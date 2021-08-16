import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    public changeState(state: boolean) {
        this.isLoading.next(state);
    }

    public getState(): Observable<boolean> {
        return this.isLoading.asObservable();
    }
}
