import { Component } from '@angular/core';
import { faBus, faTruck } from '@fortawesome/free-solid-svg-icons';
import { AbstractStandardComponent } from 'src/app/_abstract/abstract-standard/abstract-standard.component';

@Component({
    selector: 'app-special-offers',
    templateUrl: './special-offers.component.html',
    styleUrls: ['./special-offers.component.scss']
})
export class SpecialOffersComponent extends AbstractStandardComponent {
    public faTruck = faTruck;
    public faBus = faBus;
}
