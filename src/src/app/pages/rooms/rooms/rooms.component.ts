import { Component } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { AbstractStandardComponent } from 'src/app/_abstract/abstract-standard/abstract-standard.component';

@Component({
    selector: 'app-rooms',
    templateUrl: './rooms.component.html',
    styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent extends AbstractStandardComponent {
    public faTimes = faTimes;

    selectedImages: string[];

    imagesSingle: string[] = [
        '/assets/accommodations/single/single_1.jpeg',
        '/assets/accommodations/single/single_2.jpeg',
        '/assets/accommodations/single/single_3.jpeg',
        '/assets/accommodations/single/single_4.jpeg'
    ];
    imagesTriple: string[] = [
        '/assets/accommodations/triple/triple_1.jpeg',
        '/assets/accommodations/triple/triple_2.jpeg',
        '/assets/accommodations/triple/triple_3.jpeg',
        '/assets/accommodations/triple/triple_4.jpeg',
        '/assets/accommodations/triple/triple_5.jpeg',
        '/assets/accommodations/triple/triple_6.jpeg',
        '/assets/accommodations/triple/triple_7.jpeg'
    ];
    imagesApartment: string[] = [
        '/assets/accommodations/apartment/apartment_1.jpeg',
        '/assets/accommodations/apartment/apartment_2.jpeg',
        '/assets/accommodations/apartment/apartment_3.jpeg',
        '/assets/accommodations/apartment/apartment_4.jpeg',
        '/assets/accommodations/apartment/apartment_5.jpeg',
        '/assets/accommodations/apartment/apartment_6.jpeg',
        '/assets/accommodations/apartment/apartment_7.jpeg',
        '/assets/accommodations/apartment/apartment_8.jpeg',
        '/assets/accommodations/apartment/apartment_9.jpeg',
        '/assets/accommodations/apartment/apartment_10.jpeg',
        '/assets/accommodations/apartment/apartment_11.jpeg'
    ];

    changeGallery(images: string[]) {
        if (this.selectedImages !== images) {
            this.selectedImages = images;
        }
    }
}
