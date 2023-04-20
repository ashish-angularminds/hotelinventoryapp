import { InjectionToken } from "@angular/core";

export const localstoragetoken = new InjectionToken<any>('local storage', {
    providedIn: "root",
    factory() {
        return localStorage;
    },
});

export const sessionstoragetoken = new InjectionToken<any>('session storage', {
    providedIn: 'root',
    factory() {
        return sessionStorage;
    },
})