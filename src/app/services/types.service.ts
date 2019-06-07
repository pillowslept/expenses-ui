import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as ENV } from 'environments/environment';

@Injectable()
export class TypesService {

    private readonly URL = `${ENV.api_route}types`;

    constructor(
        private http: HttpClient
    ) { }

    get(): Observable<any> {
        return this.http.get(this.URL);
    }

    byId(id): Observable<any> {
        return this.http.get(`${this.URL}/${id}`);
    }

    add(type): Observable<any> {
        return this.http.post(this.URL, type);
    }

    update(type): Observable<any> {
        return this.http.put(`${this.URL}/${type.id}`, type);
    }

    delete(id): Observable<any> {
        return this.http.delete(`${this.URL}/${id}`);
    }

}
