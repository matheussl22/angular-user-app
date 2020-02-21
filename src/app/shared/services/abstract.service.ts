
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AbstractService<T> {
    private HOST_API = environment.hostApi;
    private URI: string;

    constructor(public http: HttpClient,
                public uri,) {
                this.URI = uri;
    }

    save(objeto: T): Observable<T> {
        return this.http.post<T>(this.getUrl(), objeto, this.getHttpOptions());
    }

    getById(id: any): Observable<T> {
        return this.httpGet(`/${id}`);
    }

    getAll(path?: string): Observable<T> {
        console.log(path)
        return this.httpGet(path);
    }

    deleteById(id: string): Observable<T> {
        return this.httpDelete(`/${id}`);
    }

    httpGet(path: string): Observable<T> {
        return this.http.get<T>(this.getUrl() + path, this.getHttpOptions());
    }

    httpPost(objeto: T, path: string): Observable<T> {
        return this.http.post<T>(this.getUrl() + path, objeto, this.getHttpOptions());
    }

    httpPut(objeto: T, path: string): Observable<T> {
        return this.http.put<T>(this.getUrl() + path, objeto, this.getHttpOptions());
    }

    httpDelete(path: string): Observable<T> {
        return this.http.delete<T>(`${this.getUrl()}${path} `, this.getHttpOptions());
    }

    private getUrl() {
        return `${this.HOST_API}${this.URI}`;
    }

    private getHttpOptions() {
        return {
            headers: new HttpHeaders({
                'Content-Type': ' application/json',
                'Authorization': `Bearer${localStorage.getItem('TOKEN')}`
            })
        };
    }
}