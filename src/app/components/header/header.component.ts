import { Component, Input, Renderer2, ViewChild } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { AbstractTranslationComponent } from 'src/app/_abstract/abstract-translation/abstract-translation.component';
import { GenericModalComponent } from '../generic-modal/generic-modal.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends AbstractTranslationComponent {
    public isMenuCollapsed = true;
    public faBars = faBars;
    public faTimes = faTimes;

    @Input('dynamicNav')
    public dynamicNav = true;

    @ViewChild('languageModal')
    languageModal: GenericModalComponent;

    constructor(private renderer: Renderer2, translate: TranslateService, cookieService: CookieService) {
        super(translate, cookieService);
    }

    toggleMenu(): void {
        this.isMenuCollapsed = !this.isMenuCollapsed;
    }

    public onIntersection(visible, target): void {
        const navbar: Element = this.renderer.nextSibling(target);
        if (visible && navbar && navbar.classList.contains('sticky')) {
            this.renderer.removeClass(navbar, 'sticky');
        } else if (!visible && navbar && !navbar.classList.contains('sticky')) {
            this.renderer.addClass(navbar, 'sticky');
        }
    }
}
