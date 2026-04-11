# PC Newcomers Guide to AI

An interactive, self-paced web course teaching AI basics to members of the Park City Newcomers Club. Built by [Applied AI Labs](https://www.appliedailabs.com).

## Features

- **7 Learning Modules**: From "What AI Is" to a full AI glossary
- **Progress Tracking**: Module completion and position saved to localStorage
- **Responsive Design**: Desktop sidebar + mobile slide-out navigation
- **Modern Stack**: Vite + React + TypeScript + Tailwind CSS + Shadcn/ui

## Getting Started

```bash
npm install
npm run dev
```

No backend or API keys required — it's a fully static app.

## Blink Dependencies Removed

This project was originally scaffolded from a [Blink](https://blink.new) template. The following Blink-related files and references have been stripped out so the app runs as a standalone Vite project:

- `@blinkdotnew/sdk` removed from `package.json`
- `.env.local` (contained `VITE_BLINK_PROJECT_ID` and `VITE_BLINK_PUBLISHABLE_KEY`)
- `.blink-template-revision` (template version marker)
- `src/Shell.tsx` (imported `@blinkdotnew/ui` — unused by the app)
- `src/components/AppSidebarShell.tsx` (imported `@blinkdotnew/ui` — unused by the app)
- `src/layouts/shared-app-layout.tsx` (wired up Shell + AppSidebarShell — unused by the app)
- Blink `<script>` tag removed from `index.html` (loaded `auto-engineer.js`)

## Available Scripts

```bash
# Run all linting (includes CSS variable check)
npm run lint

# Check only CSS variables
npm run check:css-vars

# Individual linting
npm run lint:js    # ESLint
npm run lint:css   # Stylelint
```

## CSS Variable Detection

The template includes a custom script that:

1. **Parses `tailwind.config.cjs`** to find all `var(--variable)` references
2. **Parses `src/index.css`** to find all defined CSS variables (`--variable:`)
3. **Cross-references** them to find missing definitions
4. **Reports undefined variables** with clear error messages

### Example Output

When CSS variables are missing:
```
❌ Undefined CSS variables found in tailwind.config.cjs:
   --sidebar-background
   --sidebar-foreground
   --sidebar-primary

Add these variables to src/index.css
```

When all variables are defined:
```
✅ All CSS variables in tailwind.config.cjs are defined
```

## How It Works

The detection happens during the `npm run lint` command, which will:
- Exit with error code 1 if undefined variables are found
- Show exactly which variables need to be added to your CSS file
- Integrate seamlessly with your development workflow

This prevents runtime CSS issues where Tailwind classes reference undefined CSS variables.