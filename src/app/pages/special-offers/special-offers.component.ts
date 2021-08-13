import { Component, Renderer2 } from '@angular/core';
import { faBus, faTruck } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-special-offers',
    templateUrl: './special-offers.component.html',
    styleUrls: ['./special-offers.component.scss']
})
export class SpecialOffersComponent {
    public faTruck = faTruck;
    public faBus = faBus;

    constructor(private renderer: Renderer2) {}

    public onIntersection(visible, target): void {
        if (visible && !target.classList.contains('visible')) {
            this.renderer.addClass(target, 'visible');
        }
    }
}
