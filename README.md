# React Clean Architecture Frontend Template

This repository provides a template for React frontend projects structured with Clean Architecture principles. It uses Vite, TypeScript, and includes a simple To-Do application example.

## Core Principles

The structure aims to separate concerns into distinct layers:

-   **Domain (`src/domain`):** Contains core business logic, types, and interfaces. These are pure and framework-agnostic.
    -   Example: `Todo` interface.
-   **Application (`src/hooks`, `src/contexts` or `src/store`):** Orchestrates use cases and manages application state.
    -   `hooks`: Custom React Hooks for feature-specific logic and state. Example: `useTodos`.
    -   `contexts`: React Context API for state management. Example: `TodoContext`.
-   **Infrastructure (`src/services`):** Handles communication with external systems like APIs.
    -   Example: `todoService` for fetching and updating To-Do items (currently mocked).
-   **Presentation (`src/components`, `src/pages`, `src/App.tsx`, `src/styles`):** The UI layer.
    -   `components`: Reusable UI components.
        -   `common/`: Generic, highly reusable components (e.g., Button, Input).
        -   `features/`: Components specific to a business feature (e.g., `TodoList`, `AddTodoForm`).
    -   `pages`: Top-level components representing application views/pages. Example: `HomePage`.
    -   `App.tsx`: The root application component.
    -   `styles`: Global styles and theming.

## Directory Structure

```
public/
├── index.html
src/
├── App.tsx
├── index.tsx
│
├── components/
│   ├── common/
│   └── features/
│       ├── AddTodoForm/
│       └── TodoList/
├── config/
│   └── index.ts
├── contexts/
│   ├── TodoContext.tsx
│   └── index.ts
├── domain/
│   ├── todo.ts
│   └── index.ts
├── hooks/
│   ├── useTodos.ts
│   └── index.ts
├── pages/
│   ├── HomePage.tsx
│   └── index.ts
├── services/
│   ├── todoService.ts
│   └── index.ts
├── styles/
│   └── index.ts      # (global.css, theme.ts etc. can be added here)
└── utils/
    └── index.ts      # (Utility functions)
package.json
tsconfig.json
vite.config.ts
.eslintrc.cjs
.gitignore
README.md
```

## Getting Started

### Prerequisites

-   Node.js (v18 or later recommended)
-   npm (or yarn/pnpm)

### Installation

1.  **Clone the repository (or use it as a template):**
    ```bash
    # git clone <repository-url>
    # cd <repository-name>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    # or
    # pnpm install
    ```

### Running the Development Server

To start the Vite development server:

```bash
npm run dev
# or
# yarn dev
# or
# pnpm dev
```

This will typically open the application in your browser at `http://localhost:5173`.

### Building for Production

To create a production build:

```bash
npm run build
# or
# yarn build
# or
# pnpm build
```

The production files will be generated in the `dist` directory.

### Linting

To run the linter:

```bash
npm run lint
# or
# yarn lint
# or
# pnpm lint
```

## Example Feature: To-Do App

The included To-Do application demonstrates how the layers interact:

-   **`HomePage.tsx` (`pages`):** Assembles the UI.
-   **`TodoProvider` (`contexts`):** Manages the state of the to-do list.
-   **`useTodos` (`hooks`):** Provides access to to-do state and actions.
-   **`AddTodoForm.tsx` & `TodoList.tsx` (`components/features`):** Presentational components for adding and displaying todos.
-   **`todoService.ts` (`services`):** Simulates API calls for managing todos.
-   **`Todo` interface (`domain`):** Defines the structure of a to-do item.

This template provides a starting point. Feel free to adapt and expand upon it for your specific project needs.
