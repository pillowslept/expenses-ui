import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as ENV } from 'environments/environment';

@Injectable()
export class FiltersService {

    private readonly URL = `${ENV.api_route}filters`;
    private readonly language = 'es-CO';

    constructor(
        private http: HttpClient
    ) { }

    get(): Observable<any> {
        return this.http.get(`${this.URL}/months/${this.language}`);
    }

}
