import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Button component for the design system
 * @example
 * <app-button variant="primary" size="md">Click me</app-button>
 */
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [ngClass]="getClasses()"
      [type]="type"
      [disabled]="disabled"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    button {
      font-weight: 500;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s ease;
      
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      &:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      }
    }

    .primary {
      background-color: #2563eb;
      color: white;

      &:hover:not(:disabled) {
        background-color: #1d4ed8;
      }
    }

    .secondary {
      background-color: #e5e7eb;
      color: #1f2937;

      &:hover:not(:disabled) {
        background-color: #d1d5db;
      }
    }

    .danger {
      background-color: #dc2626;
      color: white;

      &:hover:not(:disabled) {
        background-color: #b91c1c;
      }
    }

    .sm {
      padding: 6px 12px;
      font-size: 12px;
    }

    .md {
      padding: 10px 16px;
      font-size: 14px;
    }

    .lg {
      padding: 14px 24px;
      font-size: 16px;
    }
  `],
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;

  getClasses(): string {
    return `${this.variant} ${this.size}`;
  }
}
