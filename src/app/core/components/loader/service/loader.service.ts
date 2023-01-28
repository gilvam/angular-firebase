import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class LoaderService {
	private initCount = 0;
	private timerLoader = 200;
	private count = this.initCount;
	private request = new BehaviorSubject<boolean>(!!this.initCount);

	private get add(): number {
		return ++this.count;
	}

	private get remove(): number {
		if (!this.count) {
			return this.count;
		}
		return --this.count;
	}

	start(): void {
		this.request.next(!!this.add);
	}

	stop(): void {
		timer(this.timerLoader).subscribe(() => this.request.next(!!this.remove));
	}

	get onShow(): Observable<boolean> {
		return this.request;
	}
}
