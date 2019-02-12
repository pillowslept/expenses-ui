import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class FiltersService {

    private readonly URL = 'http://localhost:9000/Expenses/api/filters';
    private readonly language = 'es-CO';

    constructor(private http: Http) { }

    get() {
        return this.http.get(`${this.URL}/months/${this.language}`)
            .map(res => res.json());
    }

}
