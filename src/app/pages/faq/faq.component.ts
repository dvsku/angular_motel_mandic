import { Component, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
    constructor(private renderer: Renderer2) {}

    public onIntersection(visible, target): void {
        if (visible && !target.classList.contains('visible')) {
            this.renderer.addClass(target, 'visible');
        }
    }
}
