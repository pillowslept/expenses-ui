import { LoadingIndicatorService } from 'app/services/loading-indicator.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(
        private loadingIndicatorService: LoadingIndicatorService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loadingIndicatorService.startRequest(req);

        return next
            .handle(req)
            .pipe(finalize(() => this.loadingIndicatorService.finishRequest(req)));
    }

}
