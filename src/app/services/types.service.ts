import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TypesService {

    private readonly URL = 'http://localhost:9000/Expenses/api/types';

    constructor(private http: Http) { }

    get() {
        return this.http.get(this.URL)
            .map(res => res.json());
    }

    byId(id) {
        return this.http.get(this.buildUrl(id))
            .map(res => res.json());
    }

    add(type) {
        return this.http.post(this.URL, JSON.stringify(type))
            .map(res => res.json());
    }

    update(type) {
        return this.http.put(this.buildUrl(type.id), JSON.stringify(type))
            .map(res => res.json());
    }

    delete(id) {
        return this.http.delete(this.buildUrl(id))
            .map(res => res.json());
    }

    private buildUrl(id) {
        return `${this.URL}/${id}`;
    }
}
