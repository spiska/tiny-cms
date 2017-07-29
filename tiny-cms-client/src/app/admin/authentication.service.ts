import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { appConfig } from '../app.config';
import { User } from "app/models/user.model";

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: string, password: string): Observable<any> {
        return this.http.post('/users/authenticate', { username: username, password: password })
            .map((response: Response) => {
                const user = response.json();
                if (user && user.token) {
                    localStorage.setItem(appConfig.userStorageKey, JSON.stringify(user));
                }

                return user;
            });
    }

    logout() {
        localStorage.removeItem(appConfig.userStorageKey);
    }

    isLogged(): boolean {
        if (localStorage.getItem(appConfig.userStorageKey)) {
            return true;
        }

        return false;
    }

    getCurentUser(): User {
        return User.fromString(localStorage.getItem(appConfig.userStorageKey))
    }

    getCurentToken(): string {
        let user = JSON.parse(localStorage.getItem(appConfig.userStorageKey));
        if (user) {
            return user.token;
        }

        return null;
    }
}
