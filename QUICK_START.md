# 🚀 Quick Start Guide - Angular Design System

## What You Have

A complete Angular design system project with:

✅ **3 Example Components** (Button, Card, Input)
✅ **Storybook Integration** - Interactive component documentation
✅ **Clean Architecture** - Organized, maintainable component structure
✅ **Unit Tests** - Comprehensive test coverage with Jasmine/Karma
✅ **TypeScript** - Full type safety
✅ **SCSS Styling** - Nested selectors and variables support
✅ **Responsive Design** - Mobile-first approach

## Project Location

```
/home/luke/root/dev/nectar/
```

## Get Started in 30 Seconds

### 1. Navigate to Project

```bash
cd /home/luke/root/dev/nectar
```

### 2. Start Storybook (Recommended for development)

```bash
npm run storybook
```

✨ Opens at `http://localhost:6006/`

Or start the dev server:

```bash
ng serve
```

Opens at `http://localhost:4200/`

### 3. View Components

- **Storybook** (6006): Interactive component preview with live controls
- **Dev Server** (4200): Full app showcase with all components

## Project Structure at a Glance

```
src/app/shared/components/
├── button/          ← Button component
├── card/            ← Card component
├── input/           ← Input component
└── index.ts         ← Barrel export (import all at once)
```

## Each Component Has 3 Files

```
button/
├── button.component.ts       ← Component implementation
├── button.component.spec.ts  ← Unit tests
└── button.stories.ts         ← Storybook documentation
```

## Key Commands

| Command             | Purpose                                    |
| ------------------- | ------------------------------------------ |
| `npm run storybook` | View components in Storybook (recommended) |
| `ng serve`          | Run dev server on localhost:4200           |
| `ng test`           | Run unit tests                             |
| `ng build`          | Build for production                       |
| `npm run compodoc`  | Generate API documentation                 |

## Import Components

### In Your App

```typescript
import { ButtonComponent, CardComponent, InputComponent } from './shared/components';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent, CardComponent, InputComponent],
  template: `
    <app-button>Click me</app-button>
    <app-card title="My Card">Content here</app-card>
  `,
})
export class App {}
```

## Component Showcase

### Button

```html
<app-button variant="primary" size="md">Primary Button</app-button>
<app-button variant="secondary">Secondary</app-button>
<app-button variant="danger" [disabled]="true">Disabled</app-button>
```

### Card

```html
<app-card title="My Card" [shadow]="true" footer="Last updated today">
  <p>Card content goes here</p>
</app-card>
```

### Input

```html
<app-input label="Email" type="email" placeholder="your@email.com" [required]="true"></app-input>
```

## Add a New Component

1. Create folder:

   ```bash
   mkdir src/app/shared/components/my-component
   ```

2. Create `my-component.component.ts`
3. Create `my-component.component.spec.ts` (tests)
4. Create `my-component.stories.ts` (Storybook)
5. Add export to `index.ts`

See `PROJECT_GUIDE.md` for detailed instructions.

## File Locations

| File                      | Purpose                        |
| ------------------------- | ------------------------------ |
| `PROJECT_GUIDE.md`        | Complete architecture & guides |
| `DESIGN_SYSTEM_README.md` | Package documentation          |
| `src/app/app.html`        | Component showcase page        |
| `.storybook/`             | Storybook configuration        |
| `angular.json`            | Angular CLI config             |

## Clean Architecture Pattern

Each component follows the **Clean Architecture** pattern:

```
┌─────────────────────────┐
│  *.component.ts         │ ← Component Logic
├─────────────────────────┤
│  *.stories.ts           │ ← Documentation
├─────────────────────────┤
│  *.component.spec.ts    │ ← Tests
├─────────────────────────┤
│  index.ts               │ ← Barrel Export
└─────────────────────────┘
```

This structure keeps components:

- 📦 **Self-contained** - Everything in its own folder
- 🧪 **Well-tested** - Tests co-located with code
- 📚 **Well-documented** - Stories show usage
- 📦 **Easy to import** - Barrel exports for convenience

## Quick Tips

### ✨ Best Practice

Use `npm run storybook` for component development. It provides:

- Live reload
- Interactive controls
- Visual testing
- Accessibility auditing
- Auto-generated documentation

### 🎯 Workflow

1. Build component in `*.component.ts`
2. Write tests in `*.component.spec.ts`
3. Document in `*.stories.ts` with examples
4. View in Storybook to verify it works

### 🔄 Importing Components

Instead of:

```typescript
import { ButtonComponent } from './shared/components/button/button.component';
```

Use barrel export:

```typescript
import { ButtonComponent } from './shared/components';
```

## Next Steps

1. **Explore Storybook**: Run `npm run storybook` and click through components
2. **Read PROJECT_GUIDE.md**: Deep dive into architecture and best practices
3. **Create a Component**: Follow the pattern and add a new component
4. **Write Tests**: Add test cases in spec files
5. **Customize Styles**: Update SCSS colors and spacing to match your brand

## Need Help?

- **Angular Docs**: https://angular.dev
- **Storybook Docs**: https://storybook.js.org/
- **TypeScript Docs**: https://www.typescriptlang.org/
- **Project Guide**: See `PROJECT_GUIDE.md` in this directory

---

**Happy Component Building! 🎨**

Start with: `npm run storybook`
