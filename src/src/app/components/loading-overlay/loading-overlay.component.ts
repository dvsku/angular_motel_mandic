/* eslint-disable angular/timeout-service */
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
    selector: 'loading-overlay',
    templateUrl: './loading-overlay.component.html',
    styleUrls: ['./loading-overlay.component.scss']
})
export class LoadingOverlayComponent implements OnInit, OnDestroy {
    public state = true;
    private stateSubscription: Subscription;

    constructor(private loadingService: LoadingService, private cdr: ChangeDetectorRef) {
        this.loadingService.changeState(true);
    }

    ngOnInit(): void {
        this.stateSubscription = this.loadingService.getState().subscribe((state) => {
            if (!state)
                setTimeout(() => {
                    this.state = state;
                    this.cdr.detectChanges();
                }, 2000);
        });
    }

    ngOnDestroy(): void {
        if (this.stateSubscription) this.stateSubscription.unsubscribe();
    }
}
