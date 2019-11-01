import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as ENV } from 'environments/environment';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable()
export class ReportsService {

    private readonly URL = `${ENV.api_route}pdf/reports`;

    constructor(
        private http: HttpClient,
        private sanitizer: DomSanitizer,
    ) { }

    byMonthAndYear(month: number, year: number): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(`${this.URL}/month/${month}/year/${year}`);
    }

}
