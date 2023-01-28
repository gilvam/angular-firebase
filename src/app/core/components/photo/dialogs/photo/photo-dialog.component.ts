import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { LoaderService } from '../../../loader/service/loader.service';
import { finalize, from, timer } from 'rxjs';
import { initialize } from '../../../_shared/operator/initialize.operator';

@Component({
	selector: 'app-photo-dialog',
	templateUrl: './photo-dialog.component.html',
	styleUrls: ['./photo-dialog.component.scss'],
})
export class PhotoDialogComponent implements OnInit, OnDestroy, AfterViewInit {
	@ViewChild('video', { static: true }) videoRef = new ElementRef<HTMLVideoElement>({} as HTMLVideoElement);
	@ViewChild('canvas', { static: true }) canvasRef = new ElementRef<HTMLCanvasElement>({} as HTMLCanvasElement);
	@ViewChild('img', { static: true }) imgRef = new ElementRef<HTMLImageElement>({} as HTMLImageElement);
	hasPhoto = false;
	isLoaded = false;

	constructor(@Inject(PLATFORM_ID) private platform: string, private loaderService: LoaderService) {}

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

	load(): void {
		if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
			console.error('NO camera');
			return;
		}

		const mediaDevice = from(
			navigator.mediaDevices.getUserMedia({
				video: { facingMode: 'environment' },
			})
		).pipe(
			initialize(() => this.loaderService.start()),
			finalize(() => this.loaderService.stop())
		);
		mediaDevice.subscribe((ms: MediaStream) => this.setMediaStreamAndPlay(ms));

		const mediaDeviceSelect = from(navigator.mediaDevices.enumerateDevices());
		mediaDeviceSelect.subscribe((response: InputDeviceInfo[]) => {
			console.log(`response: `, response);
		});

		// navigator.mediaDevices.getDisplayMedia()
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

	changeCamera(): void {}

	private drawImageToCanvas(image: CanvasImageSource): void {
		console.log(`image: `, [image]);
		const { clientWidth, clientHeight, width, height } = this.videoRef.nativeElement;
		console.log(`dimension: `, { clientWidth, clientHeight, width, height });
		this.canvasRef.nativeElement.getContext('2d')?.drawImage(image, 0, 0, width, height);
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
