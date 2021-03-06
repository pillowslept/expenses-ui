import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as ENV } from 'environments/environment';

@Injectable()
export class MovementsService {

    private readonly URL = `${ENV.api_route}movements`;

    constructor(
        private readonly http: HttpClient
    ) { }

    getAll(): Observable<any> {
        return this.http.get(`${this.URL}`);
    }

    get(pageNumber: number, pageSize: number): Observable<any> {
        return this.http.get(`${this.URL}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
    }

    getByFilters(pageNumber: number, pageSize: number, filters = {}): Observable<any> {
        const params = {
            ...filters,
            pageNumber: `${pageNumber}`,
            pageSize: `${pageSize}`,
        };

        return this.http.get(`${this.URL}/filters`, { params });
    }

    getById(id: number): Observable<any> {
        return this.http.get(`${this.URL}/${id}`);
    }

    add(movenent: any): Observable<any> {
        return this.http.post(this.URL, movenent);
    }

    update(movenent: any): Observable<any> {
        return this.http.put(`${this.URL}/${movenent.id}`, movenent);
    }

}
