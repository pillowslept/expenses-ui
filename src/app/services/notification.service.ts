import { Injectable } from '@angular/core';
import { environment as ENV } from 'environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class NotificationService {

    private readonly DEFAULT_TIMEOUT = ENV.notification_timeout || 5000;
    private readonly PARAMS = {
        timeOut: this.DEFAULT_TIMEOUT,
        progressBar: true
    };

    constructor(
        private toastrService: ToastrService
    ) { }

    success(message: string, title: string = '') {
        this.toastrService.success(message, title, this.PARAMS);
    }

    error({ message, title = '' }) {
        this.toastrService.error(message, title, this.PARAMS);
    }

    warning(message: string, title: string = '') {
        this.toastrService.warning(message, title, this.PARAMS);
    }

    info(message: string, title: string = '') {
        this.toastrService.info(message, title, this.PARAMS);
    }

    show(message: string, title: string = '') {
        this.toastrService.show(message, title, this.PARAMS);
    }

}
