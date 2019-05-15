import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FiltersService {

    private readonly URL = 'http://localhost:9000/Expenses/api/filters';
    private readonly language = 'es-CO';

    constructor(private http: HttpClient) { }

    get(): Observable<any> {
        return this.http.get(`${this.URL}/months/${this.language}`);
    }

}
