# Angular Design System Project

A modern Angular design system library built with clean architecture principles and Storybook integration. Perfect for developing and documenting reusable UI components.

## 📁 Project Structure

```
design-system/
├── src/
│   ├── app/
│   │   ├── shared/
│   │   │   └── components/
│   │   │       ├── button/
│   │   │       │   ├── button.component.ts          # Button component logic & UI
│   │   │       │   ├── button.component.spec.ts     # Button unit tests
│   │   │       │   └── button.stories.ts            # Button Storybook stories
│   │   │       ├── card/
│   │   │       │   ├── card.component.ts
│   │   │       │   ├── card.component.spec.ts
│   │   │       │   └── card.stories.ts
│   │   │       ├── input/
│   │   │       │   ├── input.component.ts
│   │   │       │   ├── input.component.spec.ts
│   │   │       │   └── input.stories.ts
│   │   │       └── index.ts                         # Barrel export for all components
│   │   ├── app.ts                                   # Root component
│   │   ├── app.html                                 # Design system showcase
│   │   └── app.scss                                 # Global styles
│   ├── main.ts                                      # Application entry point
│   ├── styles.scss                                  # Global SCSS
│   └── index.html                                   # HTML template
├── .storybook/                                      # Storybook configuration
├── angular.json                                     # Angular CLI config
├── package.json                                     # Dependencies & scripts
├── tsconfig.json                                    # TypeScript config
└── README.md                                        # Project documentation
```

## 🎯 Clean Architecture Pattern

Each component in this design system follows a clean architecture structure with three main files:

### 1. **Component File** (`*.component.ts`)

The core implementation containing:

- Component class definition with `@Component` decorator
- Input/Output properties for component configuration
- Component logic and event handling
- JSDoc comments for documentation
- Standalone component setup (no module dependencies needed)

Example:

```typescript
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `...`,
  styles: [`...`],
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
}
```

### 2. **Stories File** (`*.stories.ts`)

Storybook documentation and visual testing:

- Story configurations with controls and argTypes
- Multiple story variations (Primary, Secondary, Disabled, etc.)
- Interactive documentation that auto-generates controls
- Visual regression testing
- Accessibility documentation

Example:

```typescript
export const Primary: Story = {
  args: { variant: 'primary', size: 'md' },
  render: (args) => ({ props: args, template: `...` }),
};
```

### 3. **Spec File** (`*.component.spec.ts`)

Unit tests using Jasmine/Karma:

- Component creation and initialization tests
- Input/Output property tests
- Event handling tests
- DOM interaction tests
- Edge case coverage

Example:

```typescript
it('should apply variant class', () => {
  component.variant = 'secondary';
  expect(component.getClasses()).toContain('secondary');
});
```

### 4. **Barrel Export** (`index.ts`)

Centralized exports for convenient imports:

```typescript
export * from './button/button.component';
export * from './card/card.component';
export * from './input/input.component';
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Angular CLI 19+

### Installation

```bash
cd design-system
npm install
```

### Available Commands

#### Development Server

```bash
ng serve
```

Navigate to `http://localhost:4200/` to see the design system showcase with all components.

#### Storybook (Recommended for Component Development)

```bash
npm run storybook
```

Opens Storybook at `http://localhost:6006/` with interactive component documentation and live previews.

#### Unit Tests

```bash
ng test
```

Runs all tests in watch mode with coverage reports.

#### Build Production

```bash
ng build
```

Outputs optimized build to `dist/design-system/`.

## 📦 Components

### Button Component

A versatile button component with multiple variants and sizes.

**Features:**

- Variants: `primary`, `secondary`, `danger`
- Sizes: `sm`, `md`, `lg`
- Disabled state support
- Hover and focus states
- Full keyboard accessibility

**Usage:**

```typescript
<app-button variant="primary" size="md" (click)="handleClick()">
  Click me
</app-button>
```

**File Structure:**

```
button/
├── button.component.ts
├── button.component.spec.ts
└── button.stories.ts
```

### Card Component

A flexible container component for organizing content.

**Features:**

- Optional title and footer
- Shadow effect support
- Responsive layout
- Semantic HTML structure

**Usage:**

```typescript
<app-card
  title="Card Title"
  [shadow]="true"
  footer="Footer text"
>
  <p>Your content here</p>
</app-card>
```

**File Structure:**

```
card/
├── card.component.ts
├── card.component.spec.ts
└── card.stories.ts
```

### Input Component

A form input component with validation and accessibility features.

**Features:**

- Multiple input types: `text`, `email`, `password`, `number`, `tel`
- Label, placeholder, and hint text
- Error message display
- Required field indicator
- ControlValueAccessor for reactive forms
- Full accessibility support

**Usage:**

```typescript
<app-input
  label="Email"
  type="email"
  placeholder="your@email.com"
  [hasError]="isError"
  errorMessage="Invalid email"
  [required]="true"
  (inputChange)="onInputChange($event)"
></app-input>
```

**File Structure:**

```
input/
├── input.component.ts
├── input.component.spec.ts
└── input.stories.ts
```

## ➕ Adding New Components

To create a new component following the clean architecture pattern:

### 1. Create Component Folder

```bash
mkdir -p src/app/shared/components/my-component
```

### 2. Create Component File (`my-component.component.ts`)

```typescript
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * My custom component
 * @example
 * <app-my-component [title]="'Hello'"></app-my-component>
 */
@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [CommonModule],
  template: `<div>{{ title }}</div>`,
  styles: [`...`],
})
export class MyComponentComponent {
  @Input() title?: string;
}
```

### 3. Create Stories File (`my-component.stories.ts`)

```typescript
import type { Meta, StoryObj } from '@storybook/angular';
import { MyComponentComponent } from './my-component.component';

const meta: Meta<MyComponentComponent> = {
  title: 'Components/MyComponent',
  component: MyComponentComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<MyComponentComponent>;

export const Default: Story = {
  args: { title: 'Hello' },
};
```

### 4. Create Spec File (`my-component.component.spec.ts`)

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyComponentComponent } from './my-component.component';

describe('MyComponentComponent', () => {
  let component: MyComponentComponent;
  let fixture: ComponentFixture<MyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

### 5. Export from Index

Add to `src/app/shared/components/index.ts`:

```typescript
export * from './my-component/my-component.component';
```

## 🎨 Styling

### SCSS Usage

All components use SCSS for styling:

- Supports nested selectors and mixins
- Variables can be defined for consistent theming
- Component styles are scoped to the component

### Color Palette

Components use a clean, professional color scheme:

- Primary Blue: `#2563eb`
- Secondary Gray: `#e5e7eb`
- Danger Red: `#dc2626`
- Text Gray: `#1f2937`
- Border Gray: `#d1d5db`

## 🧪 Testing

### Running Tests

```bash
ng test                    # Run tests in watch mode
ng test --no-watch        # Run tests once
ng test --code-coverage   # Generate coverage report
```

### Test Coverage

Each component should have tests for:

- Component creation and initialization
- Input property binding
- Output event emission
- DOM rendering
- User interactions
- Error states
- Edge cases

## 📚 Storybook Features

### Autodocs

Components automatically generate documentation from JSDoc comments and story definitions.

### Controls

The Storybook UI shows interactive controls for all component inputs, allowing you to test different configurations visually.

### Accessibility Testing

Storybook has built-in accessibility auditing to check WCAG compliance.

### Visual Regression Testing

Use Storybook's built-in tools or integrate Chromatic for visual regression testing.

## 🔧 Configuration Files

### `angular.json`

Configures Angular CLI build, serve, and test commands.

### `tsconfig.json`

TypeScript compiler configuration.

### `.storybook/main.ts`

Storybook framework and addon configuration.

### `.storybook/preview.ts`

Global decorators, parameters, and preview settings.

## 📖 Additional Resources

- [Angular Documentation](https://angular.dev)
- [Storybook Documentation](https://storybook.js.org/)
- [Angular Components Best Practices](https://angular.dev/guide/styleguide)
- [Storybook for Angular](https://storybook.js.org/docs/angular)
- [Accessibility in Angular](https://angular.dev/guide/accessibility)

## 🤝 Contributing

When adding new components or features:

1. Follow the clean architecture pattern
2. Write comprehensive tests (aim for >80% coverage)
3. Document with JSDoc comments
4. Create Storybook stories with multiple variants
5. Ensure accessibility compliance
6. Update this README if adding new sections

## 📄 License

This project is provided as-is for educational and development purposes.
