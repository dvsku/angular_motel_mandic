import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ThreeRowGridComponent } from './components/layouts/three-row-grid/three-row-grid.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { InViewportModule } from '@thisissoon/angular-inviewport';
import { RoomsComponent } from './pages/rooms/rooms/rooms.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { SpecialOffersComponent } from './pages/special-offers/special-offers.component';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { AbstractStandardComponent } from './_abstract/abstract-standard/abstract-standard.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AbstractTranslationComponent } from './_abstract/abstract-translation/abstract-translation.component';
import { GenericModalComponent } from './components/generic-modal/generic-modal.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        ThreeRowGridComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        RoomsComponent,
        ContactComponent,
        FaqComponent,
        RestaurantComponent,
        SpecialOffersComponent,
        LoadingOverlayComponent,
        AbstractStandardComponent,
        AbstractTranslationComponent,
        GenericModalComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        NgbModule,
        InViewportModule,
        HttpClientModule,
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [TranslateModule]
})
export class AppModule {}
