import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export class BaseService<T> {
    constructor(protected url: string, protected http: HttpClient) { }

    findAll(): Observable<T[]> {
        return this.http.get<T[]>(this.url);
    }

    save(body: T) {
        return this.http.post(this.url, body);
    }
}