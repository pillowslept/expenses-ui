import { Injectable, EventEmitter } from '@angular/core';
import { HttpRequest } from '@angular/common/http';

@Injectable()
export class LoadingIndicatorService {

    public onLoadingChanged: EventEmitter<boolean> = new EventEmitter<boolean>(true);
    private requests: Array<HttpRequest<any>> = [];

    startRequest(req: HttpRequest<any>): void {
        this.requests.push(req);
        this.notify();
    }

    finishRequest(req: HttpRequest<any>): void {
        const index = this.requests.indexOf(req);
        if (index !== -1) {
            this.requests.splice(index, 1);
        }
        this.notify();
    }

    private notify(): void {
        this.onLoadingChanged.emit(!!this.requests.length);
    }

}
