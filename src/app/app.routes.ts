import { Routes } from '@angular/router';
import { DiscordLoginComponent } from './components/discord/discord-login/discord-login.component';
import { HomeComponent } from './components/home/home.component';
import { PricingComponent } from './components/pricing/pricing.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'pricing', component: PricingComponent
    }
];
