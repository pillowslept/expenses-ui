import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as ENV } from 'environments/environment';

@Injectable()
export class CategoriesService {

    private readonly URL = `${ENV.api_route}categories`;

    constructor(
        private http: HttpClient
    ) { }

    get(): Observable<any> {
        return this.http.get(this.URL);
    }

    byId(id): Observable<any> {
        return this.http.get(`${this.URL}/${id}`);
    }

    add(category): Observable<any> {
        return this.http.post(this.URL, category);
    }

    update(category): Observable<any> {
        return this.http.put(`${this.URL}/${category.id}`, category);
    }

    activate(categoryId): Observable<any> {
        const params = {
            categoryId
        };
        return this.http.post(`${this.URL}/activate`, params);
    }

    inactivate(categoryId): Observable<any> {
        const params = {
            categoryId
        };
        return this.http.post(`${this.URL}/inactivate`, params);
    }

}
