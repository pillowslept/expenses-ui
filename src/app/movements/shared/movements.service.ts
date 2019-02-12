import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MovementsService {

    private url = 'http://localhost:9000/Expenses/api/movements';

    constructor(private http: Http) { }

    getAll() {
        return this.http.get(`${this.url}/all`)
            .map(res => res.json());
    }

    get(pageNumber: number, pageSize: number) {
        return this.http.get(`${this.url}/all/${pageNumber}/${pageSize}`)
            .map(res => res.json());
    }

    getById(id) {
        return this.http.get(this.buildUrl(id))
            .map(res => res.json());
    }

    add(movenent) {
        return this.http.post(this.url, JSON.stringify(movenent))
            .map(res => res.json());
    }

    update(movenent) {
        return this.http.put(this.buildUrl(movenent.id), JSON.stringify(movenent))
            .map(res => res.json());
    }

    delete(id) {
        return this.http.delete(this.buildUrl(id))
            .map(res => res.json());
    }

    private buildUrl(id) {
        return `${this.url}/${id}`;
    }
}
