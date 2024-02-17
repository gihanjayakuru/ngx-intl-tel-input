import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxIntlTelInputComponent } from '../../../ngx-intl-tel-input/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxIntlTelInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'demo-app';
}
