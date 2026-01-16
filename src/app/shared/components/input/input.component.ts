import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel';

/**
 * Input component for the design system
 * Supports form control integration via ControlValueAccessor
 */
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="input-wrapper">
      <label *ngIf="label" [for]="id" class="input-label">
        {{ label }}
        <span *ngIf="required" class="required">*</span>
      </label>
      <input
        [id]="id"
        [type]="type"
        [placeholder]="placeholder"
        [value]="value"
        [disabled]="disabled"
        [required]="required"
        (input)="onInput($event)"
        (blur)="onTouched()"
        class="input-field"
        [ngClass]="{ 'input-error': hasError }"
      />
      <p *ngIf="hasError && errorMessage" class="error-text">
        {{ errorMessage }}
      </p>
      <p *ngIf="hint" class="hint-text">
        {{ hint }}
      </p>
    </div>
  `,
  styles: [`
    .input-wrapper {
      display: flex;
      flex-direction: column;
      gap: 6px;
      width: 100%;
    }

    .input-label {
      font-size: 14px;
      font-weight: 500;
      color: #1f2937;
    }

    .required {
      color: #dc2626;
      margin-left: 2px;
    }

    .input-field {
      padding: 10px 12px;
      border: 1px solid #d1d5db;
      border-radius: 4px;
      font-size: 14px;
      font-family: inherit;
      transition: all 0.2s ease;

      &:focus {
        outline: none;
        border-color: #2563eb;
        box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
      }

      &:disabled {
        background-color: #f3f4f6;
        color: #9ca3af;
        cursor: not-allowed;
      }

      &.input-error {
        border-color: #dc2626;

        &:focus {
          box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
        }
      }
    }

    .error-text {
      margin: 0;
      font-size: 12px;
      color: #dc2626;
    }

    .hint-text {
      margin: 0;
      font-size: 12px;
      color: #6b7280;
    }
  `],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() id = 'input-' + Math.random().toString(36).substr(2, 9);
  @Input() type: InputType = 'text';
  @Input() label?: string;
  @Input() placeholder = '';
  @Input() hint?: string;
  @Input() errorMessage?: string;
  @Input() hasError = false;
  @Input() disabled = false;
  @Input() required = false;
  @Output() inputChange = new EventEmitter<string>();

  value: string = '';

  private onChange: (value: string) => void = () => { };
  private onTouchedFn: () => void = () => { };

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
    this.inputChange.emit(this.value);
  }

  onTouched(): void {
    this.onTouchedFn();
  }

  writeValue(value: any): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouchedFn = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
