import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as ENV } from 'environments/environment';

@Injectable()
export class FiltersService {

    private readonly URL = `${ENV.api_route}filters`;
    private readonly language = 'es-CO';

    constructor(
        private readonly http: HttpClient
    ) { }

    getMonths(): Observable<any> {
        return this.http.get(`${this.URL}/months/${this.language}`);
    }

    getYears(): any[] {
        return [2019, 2020].map((year) => ({ id: year, description: year }));
    }

}
