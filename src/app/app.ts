import { Component, signal } from '@angular/core';
import { ButtonComponent, CardComponent, InputComponent } from './shared/components';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent, CardComponent, InputComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('design-system');
}
