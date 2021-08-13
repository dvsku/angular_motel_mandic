import { Component, Input, Renderer2 } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    public isMenuCollapsed = true;
    public faBars = faBars;

    @Input('dynamicNav')
    public dynamicNav = true;

    constructor(private renderer: Renderer2) {}

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
