import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MovementsService {

    private url = 'http://localhost:9000/Expenses/api/movements';

    constructor(private http: HttpClient) { }

    getAll(): Observable<any> {
        return this.http.get(`${this.url}`);
    }

    get(pageNumber: number, pageSize: number): Observable<any> {
        return this.http.get(`${this.url}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
    }

    getById(id): Observable<any> {
        return this.http.get(this.buildUrl(id));
    }

    add(movenent): Observable<any> {
        return this.http.put(this.url, JSON.stringify(movenent));
    }

    update(movenent): Observable<any> {
        return this.http.post(this.buildUrl(movenent.id), JSON.stringify(movenent));
    }

    delete(id): Observable<any> {
        return this.http.delete(this.buildUrl(id));
    }

    private buildUrl(id) {
        return `${this.url}/${id}`;
    }

}
