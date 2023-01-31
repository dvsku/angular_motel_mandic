import { Component } from '@angular/core';
import { faFacebookSquare, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { AbstractTranslationComponent } from 'src/app/_abstract/abstract-translation/abstract-translation.component';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent extends AbstractTranslationComponent {
    public faFacebook = faFacebookSquare;
    public faTwitter = faTwitter;
}
