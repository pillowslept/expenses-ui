import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as ENV } from 'environments/environment';

@Injectable()
export class MovementsService {

    private readonly URL = `${ENV.api_route}movements`;

    constructor(
        private http: HttpClient
    ) { }

    getAll(): Observable<any> {
        return this.http.get(`${this.URL}`);
    }

    get(pageNumber: number, pageSize: number): Observable<any> {
        return this.http.get(`${this.URL}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
    }

    getById(id): Observable<any> {
        return this.http.get(this.buildUrl(id));
    }

    add(movenent): Observable<any> {
        return this.http.put(this.URL, JSON.stringify(movenent));
    }

    update(movenent): Observable<any> {
        return this.http.post(this.buildUrl(movenent.id), JSON.stringify(movenent));
    }

    delete(id): Observable<any> {
        return this.http.delete(this.buildUrl(id));
    }

    private buildUrl(id) {
        return `${this.URL}/${id}`;
    }

}
