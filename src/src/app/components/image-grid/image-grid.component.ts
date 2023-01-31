import { Component, Input } from '@angular/core';

@Component({
    selector: 'image-grid',
    templateUrl: './image-grid.component.html',
    styleUrls: ['./image-grid.component.scss']
})
export class ImageGridComponent {
    @Input('images')
    images: string[];
}
