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
        data: { title: 'LevelUp | Home', reuseRoute: true }
    },
    {
        path: 'accommodation',
        component: RoomsComponent,
        data: { title: 'LevelUp | Rooms', reuseRoute: true }
    },
    {
        path: 'contact',
        component: ContactComponent,
        data: { title: 'LevelUp | Contact', reuseRoute: true }
    },
    {
        path: 'faq',
        component: FaqComponent,
        data: { title: 'LevelUp | Contact', reuseRoute: true }
    },
    {
        path: 'restaurant',
        component: RestaurantComponent,
        data: { title: 'LevelUp | Contact', reuseRoute: true }
    },
    {
        path: 'special-offers',
        component: SpecialOffersComponent,
        data: { title: 'LevelUp | Contact', reuseRoute: true }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
