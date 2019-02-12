import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CategoriesService {

    private readonly URL = 'http://localhost:9000/Expenses/api/categories';

    constructor(private http: Http) { }

    get() {
        return this.http.get(this.URL)
            .map(res => res.json());
    }

    byId(id) {
        return this.http.get(this.buildUrl(id))
            .map(res => res.json());
    }

    add(category) {
        return this.http.post(this.URL, JSON.stringify(category))
            .map(res => res.json());
    }

    update(category) {
        return this.http.put(this.buildUrl(category.id), JSON.stringify(category))
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
