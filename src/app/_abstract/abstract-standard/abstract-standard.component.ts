import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { LoadingService } from 'src/app/services/loading.service';
import { AbstractTranslationComponent } from '../abstract-translation/abstract-translation.component';

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
        cookieService: CookieService
    ) {
        super(translate, cookieService);
    }

    public onIntersection(visible: boolean, target: any): void {
        if (visible && !target.classList.contains(AbstractStandardComponent.CLASS_NAME_VISIBLE)) {
            this.renderer.addClass(target, AbstractStandardComponent.CLASS_NAME_VISIBLE);
        }
    }

    ngOnInit(): void {
        this.loadingService.changeState(true);
    }

    ngAfterViewInit(): void {
        this.loadingService.changeState(false);
    }
}
