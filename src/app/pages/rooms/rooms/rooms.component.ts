import { Component, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-rooms',
    templateUrl: './rooms.component.html',
    styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
    constructor(private renderer: Renderer2) {}

    public onIntersection(visible, target): void {
        if (visible && !target.classList.contains('visible')) {
            this.renderer.addClass(target, 'visible');
        }
    }
}
