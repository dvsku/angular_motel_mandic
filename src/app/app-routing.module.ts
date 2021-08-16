import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { HomeComponent } from './pages/home/home.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { RoomsComponent } from './pages/rooms/rooms/rooms.component';
import { SpecialOffersComponent } from './pages/special-offers/special-offers.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: { title: 'TITLES.HOME', reuseRoute: true }
    },
    {
        path: 'accommodation',
        component: RoomsComponent,
        data: { title: 'TITLES.ACCOMMODATION', reuseRoute: true }
    },
    {
        path: 'contact',
        component: ContactComponent,
        data: { title: 'TITLES.CONTACT', reuseRoute: true }
    },
    {
        path: 'faq',
        component: FaqComponent,
        data: { title: 'TITLES.FAQ', reuseRoute: true }
    },
    {
        path: 'restaurant',
        component: RestaurantComponent,
        data: { title: 'TITLES.RESTAURANT', reuseRoute: true }
    },
    {
        path: 'special-offers',
        component: SpecialOffersComponent,
        data: { title: 'TITLES.SPECIAL_OFFERS', reuseRoute: true }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
