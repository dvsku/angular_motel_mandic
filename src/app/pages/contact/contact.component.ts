import { Component } from '@angular/core';
import { faEnvelope, faGasPump, faHotel, faPhoneAlt, faStoreAlt, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { AbstractStandardComponent } from 'src/app/_abstract/abstract-standard/abstract-standard.component';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent extends AbstractStandardComponent {
    public faPhone = faPhoneAlt;
    public faEnvelope = faEnvelope;

    public faMotel = faHotel;
    public faFuelStation = faGasPump;
    public faStore = faStoreAlt;
    public faRestaurant = faUtensils;
}
