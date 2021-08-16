import { Component } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { AbstractStandardComponent } from 'src/app/_abstract/abstract-standard/abstract-standard.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent extends AbstractStandardComponent {
    public faCheck = faCheck;
}
