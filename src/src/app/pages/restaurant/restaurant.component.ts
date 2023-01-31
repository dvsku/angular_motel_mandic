import { Component } from '@angular/core';
import { AbstractStandardComponent } from 'src/app/_abstract/abstract-standard/abstract-standard.component';

@Component({
    selector: 'app-restaurant',
    templateUrl: './restaurant.component.html',
    styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent extends AbstractStandardComponent {}
