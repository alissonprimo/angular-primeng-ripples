import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ButtonModule, RippleModule],
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  primengConfig = inject(PrimeNGConfig)

  NgOnInit() {
    this.primengConfig.ripple =  true
  }
}
