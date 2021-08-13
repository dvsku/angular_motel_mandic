import {
    AfterViewInit,
    Component,
    ElementRef,
    OnChanges,
    OnInit,
    Renderer2,
    SimpleChanges,
    ViewChild
} from '@angular/core';
import { faEnvelope, faGasPump, faHotel, faPhoneAlt, faStoreAlt, faUtensils } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {
    public faPhone = faPhoneAlt;
    public faEnvelope = faEnvelope;

    public faMotel = faHotel;
    public faFuelStation = faGasPump;
    public faStore = faStoreAlt;
    public faRestaurant = faUtensils;

    @ViewChild('container')
    container: ElementRef;

    constructor(private renderer: Renderer2) {
        console.log('a');
    }

    public onIntersection(visible, target): void {
        if (visible && !target.classList.contains('visible')) {
            this.renderer.addClass(target, 'visible');
        }
    }

    ngAfterViewInit(): void {
        console.log(this.container.nativeElement.classList.contains('visible'));
    }
}
