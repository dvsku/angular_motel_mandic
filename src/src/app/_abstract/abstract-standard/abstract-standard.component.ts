import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { LoadingService } from 'src/app/services/loading.service';
import { AbstractTranslationComponent } from '../abstract-translation/abstract-translation.component';
import { InViewportAction } from 'ng-in-viewport';

@Component({
    selector: 'app-abstract-standard',
    templateUrl: './abstract-standard.component.html',
    styleUrls: ['./abstract-standard.component.scss']
})
export class AbstractStandardComponent extends AbstractTranslationComponent implements AfterViewInit, OnInit {
    private static CLASS_NAME_VISIBLE = 'visible';

    constructor(
        private renderer: Renderer2,
        private loadingService: LoadingService,
        translate: TranslateService,
        cookieService: CookieService,
        config: NgbCarouselConfig) 
    {
        super(translate, cookieService);
        config.interval = 0;
    }

    public onIntersection(event: InViewportAction): void {
        if (event.visible && !event.target.classList.contains(AbstractStandardComponent.CLASS_NAME_VISIBLE)) {
            this.renderer.addClass(event.target, AbstractStandardComponent.CLASS_NAME_VISIBLE);
        }
    }

    ngOnInit(): void {
        this.loadingService.changeState(true);
    }

    ngAfterViewInit(): void {
        this.loadingService.changeState(false);
    }
}
