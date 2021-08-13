import { Component, Renderer2 } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    public faCheck = faCheck;

    constructor(private renderer: Renderer2) {}

    public onIntersection(visible, target): void {
        if (visible && !target.classList.contains('visible')) {
            this.renderer.addClass(target, 'visible');
        }
    }
}
