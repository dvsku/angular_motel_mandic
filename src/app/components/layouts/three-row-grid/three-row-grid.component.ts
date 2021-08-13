import { Component, Input } from '@angular/core';

@Component({
    selector: 'three-row-grid',
    templateUrl: './three-row-grid.component.html',
    styleUrls: ['./three-row-grid.component.scss']
})
export class ThreeRowGridComponent {
    @Input('dynamicNav')
    public dynamicNav = true;
}
