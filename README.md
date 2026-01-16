# @nectar/design-system

Production-ready Angular UI components library for building consistent and beautiful user interfaces.

[![npm version](https://img.shields.io/npm/v/@nectar/design-system.svg)](https://www.npmjs.com/package/@nectar/design-system)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- 🎨 **3 Core Components**: Button, Card, and Input components with extensive variants
- ⚡ **Standalone Components**: Built with Angular standalone APIs (no modules required)
- 🎭 **Storybook Documentation**: Interactive component documentation and playground
- ✅ **Fully Tested**: 100% test coverage with comprehensive unit tests
- 📦 **Tree-Shakeable**: Support for modern module systems (ESM, CommonJS, UMD)
- ♿ **Accessible**: WCAG compliant components with built-in accessibility support
- 🎯 **TypeScript**: Full TypeScript support with complete type definitions

## Installation

```bash
npm install @nectar/design-system
```

Or using yarn:

```bash
yarn add @nectar/design-system
```

Or using pnpm:

```bash
pnpm add @nectar/design-system
```

### Prerequisites

- Angular 19+ (compatible with 20.x and 21.x)
- RxJS 7.0+
- Node.js 18+

## Quick Start

### 1. Import Components

Import components directly in your Angular component:

```typescript
import { Component } from '@angular/core';
import { ButtonComponent, CardComponent, InputComponent } from '@nectar/design-system';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent, CardComponent, InputComponent],
  template: `
    <nct-card title="Welcome">
      <nct-input placeholder="Enter your name"></nct-input>
      <nct-button variant="primary">Submit</nct-button>
    </nct-card>
  `,
})
export class AppComponent {}
```

### 2. Selective Component Imports

Import individual components to minimize bundle size:

```typescript
import { ButtonComponent } from '@nectar/design-system/button';
import { InputComponent } from '@nectar/design-system/input';
```

## Components

### Button Component

Versatile button with multiple variants and sizes.

```typescript
import { ButtonComponent } from '@nectar/design-system/button';

// Variants: primary (default), secondary, danger
// Sizes: sm, md (default), lg
```

**Template Usage:**

```html
<nct-button variant="primary" size="md">Primary Button</nct-button>
<nct-button variant="secondary" [disabled]="isLoading">Secondary</nct-button>
<nct-button variant="danger" size="lg">Delete</nct-button>
```

**Properties:**

- `@Input() variant: 'primary' | 'secondary' | 'danger' = 'primary'` - Button style variant
- `@Input() size: 'sm' | 'md' | 'lg' = 'md'` - Button size
- `@Input() disabled: boolean = false` - Disable button
- `@Output() click` - Click event emitter

### Card Component

Flexible container component for organizing content.

```typescript
import { CardComponent } from '@nectar/design-system/card';
```

**Template Usage:**

```html
<nct-card title="Card Title" [shadow]="true">
  <p>Card content goes here</p>
  <ng-template #footer>
    <nct-button>Action</nct-button>
  </ng-template>
</nct-card>
```

**Properties:**

- `@Input() title?: string` - Card title
- `@Input() shadow: boolean = false` - Add shadow effect
- `@ContentChild('footer')` - Optional footer template slot

### Input Component

Form input with validation and ReactiveFormsModule support.

```typescript
import { InputComponent } from '@nectar/design-system/input';
import { ReactiveFormsModule } from '@angular/forms';
```

**Template Usage:**

```html
<form [formGroup]="form">
  <nct-input
    formControlName="email"
    type="email"
    placeholder="Enter email"
    [errorMessage]="emailError"
    hint="We'll never share your email"
  >
  </nct-input>
  <nct-button [disabled]="form.invalid">Submit</nct-button>
</form>
```

**Properties:**

- `@Input() type: 'text' | 'email' | 'password' | 'number' | 'tel' = 'text'` - Input type
- `@Input() placeholder?: string` - Placeholder text
- `@Input() disabled: boolean = false` - Disable input
- `@Input() errorMessage?: string` - Error message to display
- `@Input() hint?: string` - Helper text below input
- Implements `ControlValueAccessor` for reactive forms integration

## Styling

Components use Angular's view encapsulation with scoped SCSS. To customize component styles, use CSS custom properties:

```css
:root {
  --nct-primary-color: #3b82f6;
  --nct-secondary-color: #6b7280;
  --nct-danger-color: #ef4444;
  --nct-border-radius: 0.375rem;
  --nct-font-family: system-ui, -apple-system, sans-serif;
}
```

## Documentation

### Storybook

View interactive component examples and documentation:

```bash
npm run storybook
```

Opens Storybook at `http://localhost:6006`

### Component Documentation

- **Button**: 6 story variants covering all combinations
- **Card**: 4 story variants with title, footer, and shadow options
- **Input**: 6 story variants demonstrating types, validation, and states

## Examples

### Form with Validation

```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent, InputComponent } from '@nectar/design-system';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, ButtonComponent],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <nct-input
        formControlName="email"
        type="email"
        placeholder="Email"
        [errorMessage]="emailError"
      >
      </nct-input>
      <nct-input
        formControlName="password"
        type="password"
        placeholder="Password"
        [errorMessage]="passwordError"
      >
      </nct-input>
      <nct-button [disabled]="form.invalid">Login</nct-button>
    </form>
  `,
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get emailError(): string | null {
    const control = this.form.get('email');
    if (control?.hasError('required')) return 'Email is required';
    if (control?.hasError('email')) return 'Enter a valid email';
    return null;
  }

  get passwordError(): string | null {
    const control = this.form.get('password');
    if (control?.hasError('required')) return 'Password is required';
    if (control?.hasError('minlength')) return 'Password must be at least 8 characters';
    return null;
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
    }
  }
}
```

### Dashboard Layout

```typescript
import { Component } from '@angular/core';
import { CardComponent, ButtonComponent } from '@nectar/design-system';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent, ButtonComponent],
  template: `
    <div class="dashboard">
      <nct-card title="Dashboard" [shadow]="true">
        <p>Welcome to your dashboard!</p>
        <ng-template #footer>
          <nct-button variant="primary">View Details</nct-button>
          <nct-button variant="secondary">Export</nct-button>
        </ng-template>
      </nct-card>
    </div>
  `,
  styles: [
    `
      .dashboard {
        padding: 24px;
      }
    `,
  ],
})
export class DashboardComponent {}
```

## Accessibility

All components follow WCAG 2.1 Level AA standards:

- **Button**: Proper ARIA labels, keyboard navigation, focus states
- **Card**: Semantic HTML structure
- **Input**: Labels, error announcements, hint text support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](https://github.com/nectar-org/design-system/blob/main/CONTRIBUTING.md) for guidelines.

## License

MIT © Nectar Team

## Changelog

See [CHANGELOG.md](https://github.com/nectar-org/design-system/blob/main/CHANGELOG.md) for version history.

## Support

For issues, feature requests, or questions:

- 📝 [GitHub Issues](https://github.com/nectar-org/design-system/issues)
- 💬 [Discussions](https://github.com/nectar-org/design-system/discussions)

---

**Made with ❤️ by the Nectar Team**

## Development

### Development server

To start a local development server, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
