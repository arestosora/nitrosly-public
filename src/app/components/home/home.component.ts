import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DiscordLoginComponent } from '../discord/discord-login/discord-login.component';
import { SupportComponent } from '../discord/support/support.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DiscordLoginComponent, SupportComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
