import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
    selector: 'app-abstract-standard',
    templateUrl: './abstract-standard.component.html',
    styleUrls: ['./abstract-standard.component.scss']
})
export class AbstractStandardComponent implements AfterViewInit, OnInit {
    private static CLASS_NAME_VISIBLE = 'visible';

    constructor(private renderer: Renderer2, private loadingService: LoadingService) {}

    public onIntersection(visible: boolean, target: any): void {
        if (visible && !target.classList.contains(AbstractStandardComponent.CLASS_NAME_VISIBLE)) {
            this.renderer.addClass(target, AbstractStandardComponent.CLASS_NAME_VISIBLE);
        }
    }

    ngOnInit(): void {
        this.loadingService.changeState(true);
        console.log('changed state');
    }

    ngAfterViewInit(): void {
        this.loadingService.changeState(false);
    }
}
