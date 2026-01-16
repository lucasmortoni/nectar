import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Card component for the design system
 * A flexible container for content with optional title and description
 */
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card" [ngClass]="{ 'has-shadow': shadow }">
      <div *ngIf="title" class="card-header">
        <h3 class="card-title">{{ title }}</h3>
      </div>
      <div class="card-body">
        <ng-content></ng-content>
      </div>
      <div *ngIf="footer" class="card-footer">
        {{ footer }}
      </div>
    </div>
  `,
  styles: [`
    .card {
      background-color: white;
      border-radius: 8px;
      border: 1px solid #e5e7eb;
      overflow: hidden;
    }

    .card.has-shadow {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    .card-header {
      padding: 16px;
      border-bottom: 1px solid #e5e7eb;
    }

    .card-title {
      margin: 0;
      font-size: 18px;
      font-weight: 600;
      color: #1f2937;
    }

    .card-body {
      padding: 16px;
      color: #374151;
    }

    .card-footer {
      padding: 12px 16px;
      border-top: 1px solid #e5e7eb;
      background-color: #f9fafb;
      font-size: 12px;
      color: #6b7280;
    }
  `],
})
export class CardComponent {
  @Input() title?: string;
  @Input() footer?: string;
  @Input() shadow = false;
}
