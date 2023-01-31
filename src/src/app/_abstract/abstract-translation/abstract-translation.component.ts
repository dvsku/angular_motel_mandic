import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'app-abstract-translation',
    templateUrl: './abstract-translation.component.html',
    styleUrls: ['./abstract-translation.component.scss']
})
export class AbstractTranslationComponent {
    private translate: TranslateService;
    private cookieService: CookieService;

    constructor(translate: TranslateService, cookieService: CookieService) {
        this.translate = translate;
        this.cookieService = cookieService;
        this.translate.setDefaultLang('en');
        if (this.cookieService.check('language')) {
            this.translate.use(this.cookieService.get('language'));
        }
    }

    public changeLanguage(language: string) {
        this.cookieService.set('language', language, undefined, '/', undefined, false, 'Lax');
        this.translate.use(language);
    }
}
