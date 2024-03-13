import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ServerConfig } from '../../../app.config';

@Component({
  selector: 'app-discord-login',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './discord-login.component.html',
  styleUrl: './discord-login.component.css'
})
export class DiscordLoginComponent {
  public login() {
    window.location.href = `${ServerConfig.Endpoint}/auth/login`;
  }
}
