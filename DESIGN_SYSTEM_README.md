# Design System

An Angular-based design system library with Storybook integration following clean architecture principles.

## Project Structure

```
src/app/shared/components/
├── button/
│   ├── button.component.ts          # Component implementation
│   ├── button.component.spec.ts     # Component tests
│   ├── button.stories.ts            # Storybook stories
│   └── ...
├── card/
│   ├── card.component.ts
│   ├── card.component.spec.ts
│   ├── card.stories.ts
│   └── ...
├── input/
│   ├── input.component.ts
│   ├── input.component.spec.ts
│   ├── input.stories.ts
│   └── ...
└── index.ts                         # Barrel export
```

## Clean Architecture Approach

Each component follows a consistent structure inspired by clean architecture:

- **Component File** (`*.component.ts`): Core component logic and UI implementation
- **Stories File** (`*.stories.ts`): Documentation and visual testing via Storybook
- **Spec File** (`*.component.spec.ts`): Unit tests using Jasmine/Karma
- **Barrel Export** (`index.ts`): Centralized exports for easier imports

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

Start the development server:

```bash
ng serve
```

Navigate to `http://localhost:4200/`.

### Storybook

View components in an interactive environment:

```bash
npm run storybook
```

This opens Storybook at `http://localhost:6006/`.

### Run Tests

Execute unit tests:

```bash
ng test
```

### Build

Build the project:

```bash
ng build
```

## Components

### Button Component

A versatile button component with multiple variants and sizes.

**Features:**

- Variants: primary, secondary, danger
- Sizes: sm, md, lg
- States: normal, disabled, hover
- Accessibility support

**Usage:**

```typescript
import { ButtonComponent } from './shared/components';

<app-button variant="primary" size="md" (click)="handleClick()">
  Click me
</app-button>
```

### Card Component

A flexible container component for organizing content.

**Features:**

- Optional title
- Optional footer
- Shadow effect support
- Semantic HTML structure

**Usage:**

```typescript
<app-card title="Card Title" [shadow]="true" footer="Footer text">
  <p>Your content here</p>
</app-card>
```

### Input Component

A form input component with built-in validation and accessibility.

**Features:**

- Multiple input types (text, email, password, number, tel)
- Label and placeholder support
- Error message display
- Helper/hint text
- ControlValueAccessor for reactive forms
- Disabled state support

**Usage:**

```typescript
<app-input
  label="Email"
  type="email"
  placeholder="Enter your email"
  [hasError]="isError"
  errorMessage="Invalid email"
  [required]="true"
  (inputChange)="onInputChange($event)"
></app-input>
```

## Adding New Components

To add a new component to the design system:

1. Create a new folder under `src/app/shared/components/`
2. Create the component file: `component-name.component.ts`
3. Create the stories file: `component-name.stories.ts`
4. Create the spec file: `component-name.component.spec.ts`
5. Export the component from `index.ts`

Example structure:

```
src/app/shared/components/new-component/
├── new-component.component.ts
├── new-component.component.spec.ts
├── new-component.stories.ts
```

## Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

### Code scaffolding

Generate a new component using the Angular CLI:

```bash
ng generate component shared/components/component-name
```

## Further Help

- [Angular Documentation](https://angular.io/docs)
- [Storybook Documentation](https://storybook.js.org/)
- [Angular CLI Reference](https://angular.io/cli)

## License

This project is licensed under the MIT License.
