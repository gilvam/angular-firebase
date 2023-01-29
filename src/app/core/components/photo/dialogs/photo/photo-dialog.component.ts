import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { LoaderService } from '../../../loader/service/loader.service';
import { finalize, from, timer } from 'rxjs';
import { initialize } from '../../../_shared/operator/initialize.operator';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-photo-dialog',
	templateUrl: './photo-dialog.component.html',
	styleUrls: ['./photo-dialog.component.scss'],
})
export class PhotoDialogComponent implements OnInit, OnDestroy, AfterViewInit {
	@ViewChild('video', { static: true }) videoRef = new ElementRef<HTMLVideoElement>({} as HTMLVideoElement);
	@ViewChild('canvas', { static: true }) canvasRef = new ElementRef<HTMLCanvasElement>({} as HTMLCanvasElement);
	@ViewChild('img', { static: true }) imgRef = new ElementRef<HTMLImageElement>({} as HTMLImageElement);
	deviceIdList: string[] = [];
	deviceIdIndex = 1;
	hasPhoto = false;
	isLoaded = false;

	constructor(private snackBar: MatSnackBar, private loaderService: LoaderService) {}

	ngOnInit(): void {}

	ngAfterViewInit(): void {
		timer(0).subscribe(() => {
			this.load();
			// this.imgRef.nativeElement.src = imgData;
			// this.isLoaded = true;
			// this.hasPhoto = true;
		});
	}

	ngOnDestroy(): void {
		this.stop();
	}

	private get mediaStream(): MediaStream {
		return this.videoRef.nativeElement.srcObject as MediaStream;
	}

	private setMediaStreamAndPlay(mediaStream: MediaStream): void {
		console.log(`mediaStream: `, mediaStream);
		console.log(`mediaStream.getVideoTracks(): `, mediaStream.getVideoTracks());
		this.videoRef.nativeElement.srcObject = mediaStream;
		this.videoRef.nativeElement.play().then(() => {
			this.isLoaded = true;
		});
	}

	async load(constraints?: MediaStreamConstraints | null): Promise<any> {
		if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
			this.snackBar.open('câmera não encontrada', '', { duration: 2000 });
			return;
		}

		this.deviceIdList = await navigator.mediaDevices
			.enumerateDevices()
			.then(devices => devices.filter(device => device.kind === 'videoinput').map(device => device.deviceId));

		console.log(`this.deviceIdList: `, this.deviceIdList);

		from(navigator.mediaDevices.getUserMedia(constraints || { video: true }))
			.pipe(
				initialize(() => this.loaderService.start()),
				finalize(() => this.loaderService.stop())
			)
			.subscribe(
				(ms: MediaStream) => this.setMediaStreamAndPlay(ms),
				error => {
					console.error('ERROR => ', error);
				}
			);

		// mediaDevice.getVideoTracks()[

		// navigator.mediaDevices
		// 	.getUserMedia({
		// 		// video: { facingMode: this.constraints },
		// 		video: true,
		// 	})
		// 	.then(display => {
		// 		const videos = display.getVideoTracks();
		// 		console.log(`videos: `, videos);
		// 		console.log(`settings: `, videos[0].getSettings());
		//
		// 		display.getVideoTracks().forEach(track => {
		// 			console.log(`track: `, track);
		// 		});
		// 	});
	}

	stop(): void {
		if (!this.mediaStream) {
			return;
		}
		this.videoRef.nativeElement.pause();
		this.mediaStream.getVideoTracks().forEach(it => it.stop());
		this.videoRef.nativeElement.srcObject = null;
		this.isLoaded = false;
	}

	changeCamera(): void {
		if (this.deviceIdList.length <= this.deviceIdIndex) {
			this.deviceIdIndex = 0;
			this.changeCamera();
			return;
		}

		const constraints: MediaStreamConstraints | null = {
			video: { deviceId: this.deviceIdList[this.deviceIdIndex++] },
		};
		this.load(constraints);
	}

	private drawImageToCanvas(image: CanvasImageSource): void {
		this.canvasRef.nativeElement
			.getContext('2d')
			?.drawImage(image, 0, 0, this.videoRef.nativeElement.width, this.videoRef.nativeElement.height);
	}

	capture(): void {
		this.drawImageToCanvas(this.videoRef.nativeElement);
		const img = this.canvasRef.nativeElement.toDataURL('image/png');
		// const imgBlob = this.canvasRef.nativeElement.toBlob(resp => resp);
		this.hasPhoto = true;
		console.log(`capture: `, `${img.substring(0, 50)}...`);
		console.log(`capture blob: `, ':(');

		this.imgRef.nativeElement.src = img;
	}

	unCapture(): void {
		this.hasPhoto = false;
	}
}
