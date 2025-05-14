
# DataFolio - Personal Portfolio Website

This is a Next.js and Tailwind CSS based personal portfolio website designed to showcase projects, skills, certificates, and provide contact information. It features a modern dark theme with neon blue accents and interactive elements like a cursor-following glow effect.

## Project Structure

The project follows a standard Next.js application structure:

```
.
├── public/                 # Static assets (images, fonts, etc.)
│   └── images/
│       └── intro-background.png # Background image for the intro section
├── src/
│   ├── ai/                 # Artificial Intelligence related logic
│   │   ├── dev.ts          # Development setup for Genkit (loads .env)
│   │   └── genkit.ts       # Genkit AI SDK initialization and configuration
│   ├── app/                # Next.js App Router: Pages, layouts, and global styles
│   │   ├── globals.css     # Global styles and Tailwind CSS theme (ShadCN)
│   │   ├── layout.tsx      # Root layout component for the entire application
│   │   └── page.tsx        # Main landing page component
│   ├── components/         # Reusable React components
│   │   ├── layout/         # Components related to the overall page structure
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   ├── sections/       # Components representing different sections of the portfolio
│   │   │   ├── AboutSection.tsx
│   │   │   ├── CertificateCard.tsx
│   │   │   ├── CertificatesSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── IntroSection.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   └── ProjectsSection.tsx
│   │   └── ui/             # UI components from ShadCN (e.g., Button, Card, Input)
│   ├── hooks/              # Custom React hooks
│   │   ├── useCursorGlow.ts
│   │   ├── useMobile.ts
│   │   └── useToast.ts
│   ├── lib/                # Utility functions and libraries
│   │   ├── actions.ts      # Server Actions (e.g., for form submissions)
│   │   └── utils.ts        # General utility functions (e.g., `cn` for classnames)
│   └── types/              # TypeScript type definitions
│       └── index.ts
├── .env                    # Environment variables (empty by default)
├── .gitignore              # Specifies intentionally untracked files that Git should ignore
├── components.json         # Configuration for ShadCN UI components
├── next.config.ts          # Next.js configuration file
├── package.json            # Project dependencies and scripts
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Component Functionality and Location

### `src/app/`

*   **`layout.tsx`**:
    *   **Functionality**: Defines the root HTML structure for all pages. It includes the `<html>`, `<head>`, and `<body>` tags, imports global fonts (Geist Sans and Geist Mono), sets up the Navbar, Footer, and Toaster components. It applies a dark theme by default.
    *   **Location**: `src/app/layout.tsx`
*   **`page.tsx`**:
    *   **Functionality**: This is the main entry point for the home page. It assembles all the different sections of the portfolio (Intro, About, Projects, Certificates, Contact).
    *   **Location**: `src/app/page.tsx`
*   **`globals.css`**:
    *   **Functionality**: Contains global styles, Tailwind CSS base, components, and utilities. It defines the HSL color variables for the ShadCN UI theme, supporting both dark (default) and light modes, with a focus on a neon blue primary/accent color. It also includes styles for the cursor glow effect.
    *   **Location**: `src/app/globals.css`

### `src/components/layout/`

*   **`Navbar.tsx`**:
    *   **Functionality**: Displays the main navigation bar. It includes links to different sections of the page (Home, About, Projects, Certificates, Contact) and an external link to the Resume. It's responsive, collapsing into a sheet menu on mobile devices. The navbar becomes semi-transparent and blurred when the page is scrolled.
    *   **Location**: `src/components/layout/Navbar.tsx`
*   **`Footer.tsx`**:
    *   **Functionality**: Displays the footer content, including copyright information and the current year.
    *   **Location**: `src/components/layout/Footer.tsx`

### `src/components/sections/`

*   **`IntroSection.tsx`**:
    *   **Functionality**: The hero section of the portfolio. It displays a greeting, the user's name, a brief introduction, call-to-action buttons ("Get in Touch", "Download CV"), and links to LinkedIn and GitHub. It features a blurred background image and a professional portrait with a cursor-following glow effect.
    *   **Location**: `src/components/sections/IntroSection.tsx`
*   **`AboutSection.tsx`**:
    *   **Functionality**: Provides more details about the user, including a personal narrative and a list of key skills. It displays a placeholder image (intended for a workspace photo). The cards in this section have a cursor-following glow effect.
    *   **Location**: `src/components/sections/AboutSection.tsx`
*   **`ProjectsSection.tsx`**:
    *   **Functionality**: Showcases a list of projects. Each project is displayed using the `ProjectCard` component.
    *   **Location**: `src/components/sections/ProjectsSection.tsx`
*   **`ProjectCard.tsx`**:
    *   **Functionality**: A reusable card component to display individual project details, including an image, title, short description, tags, and a link to GitHub. Clicking "View Details" opens a dialog with a more detailed overview. The card has a cursor-following glow effect.
    *   **Location**: `src/components/sections/ProjectCard.tsx`
*   **`CertificatesSection.tsx`**:
    *   **Functionality**: Displays a list of certificates earned by the user. Each certificate is displayed using the `CertificateCard` component.
    *   **Location**: `src/components/sections/CertificatesSection.tsx`
*   **`CertificateCard.tsx`**:
    *   **Functionality**: A reusable card component to display individual certificate details, including an image, title, issuing body, and a link to view the certificate. The card has a cursor-following glow effect.
    *   **Location**: `src/components/sections/CertificateCard.tsx`
*   **`ContactSection.tsx`**:
    *   **Functionality**: Provides a contact form for visitors to send messages. It includes fields for name, email, and message. It uses a server action (`submitContactForm`) for form submission and displays success/error messages using toasts. It also lists direct contact information (email, phone). The cards in this section have a cursor-following glow effect.
    *   **Location**: `src/components/sections/ContactSection.tsx`

### `src/components/ui/`

*   **Functionality**: This directory contains UI components primarily sourced from [ShadCN/UI](https://ui.shadcn.com/). These are pre-built, accessible, and customizable components like `Button.tsx`, `Card.tsx`, `Input.tsx`, `Dialog.tsx`, `Sheet.tsx`, `Toast.tsx`, `Toaster.tsx`, etc. They are styled using Tailwind CSS and configured via `globals.css` and `tailwind.config.ts`.
*   **Location**: `src/components/ui/`

### `src/hooks/`

*   **`useCursorGlow.ts`**:
    *   **Functionality**: A custom React hook that enables a glow effect around an HTML element, following the mouse cursor. It updates CSS custom properties (`--mouse-x`, `--mouse-y`, `--glow-size`) and adds/removes a class to activate the glow defined in `globals.css`.
    *   **Location**: `src/hooks/useCursorGlow.ts`
*   **`useMobile.ts`**:
    *   **Functionality**: A custom React hook to detect if the current viewport width corresponds to a mobile device (based on a breakpoint of 768px).
    *   **Location**: `src/hooks/useMobile.ts`
*   **`useToast.ts`**:
    *   **Functionality**: A custom React hook for managing and displaying toast notifications. It provides a `toast` function to trigger notifications and manages their state.
    *   **Location**: `src/hooks/useToast.ts`

### `src/lib/`

*   **`actions.ts`**:
    *   **Functionality**: Contains server actions used by the application. Currently, it includes `submitContactForm` which handles the logic for the contact form submission, including Zod-based validation and simulating an email sending process.
    *   **Location**: `src/lib/actions.ts`
*   **`utils.ts`**:
    *   **Functionality**: Contains utility functions. The primary function is `cn`, a helper for conditionally joining class names, commonly used with Tailwind CSS and class-variance-authority.
    *   **Location**: `src/lib/utils.ts`

### `src/ai/`

*   **`genkit.ts`**:
    *   **Functionality**: Initializes and configures the Genkit AI SDK. It sets up the Google AI plugin and specifies a default model (`googleai/gemini-2.0-flash`).
    *   **Location**: `src/ai/genkit.ts`
*   **`dev.ts`**:
    *   **Functionality**: A development helper script that loads environment variables from a `.env` file using `dotenv`. This is typically used when running Genkit in a development environment.
    *   **Location**: `src/ai/dev.ts`

### `src/types/`

*   **`index.ts`**:
    *   **Functionality**: Defines shared TypeScript interfaces and types used across the application, such as `Project` and `Certificate`.
    *   **Location**: `src/types/index.ts`

## Key Configuration Files

*   **`next.config.ts`**: Configures Next.js specific settings, including TypeScript and ESLint build error ignorance, and image optimization settings (e.g., allowed remote hostnames for `next/image`).
*   **`tailwind.config.ts`**: Configures Tailwind CSS, including dark mode strategy, content paths, and theme extensions (colors, border radius, keyframes, animations) that align with the ShadCN UI variables in `globals.css`.
*   **`tsconfig.json`**: TypeScript compiler options, defining how the TypeScript code is checked and transpiled.
*   **`components.json`**: Configuration file for ShadCN UI, specifying style, component paths, Tailwind CSS paths, and other preferences for the `shadcn-ui` CLI.

## Styling Approach

The application uses **Tailwind CSS** for utility-first styling. UI components are primarily from **ShadCN/UI**, which are also styled with Tailwind CSS. The overall theme (colors, radius, etc.) is managed through CSS variables defined in `src/app/globals.css`, allowing for easy customization of dark and light modes. The default theme is dark with neon blue accents.

## Core Functionalities

*   **Responsive Design**: The portfolio is designed to be responsive and adapt to different screen sizes.
*   **Section-Based Navigation**: Smooth scrolling navigation to different parts of the single-page portfolio.
*   **Project Showcase**: Displays projects with images, descriptions, tags, and links to GitHub.
*   **Certificate Display**: Showcases certificates with images, titles, and links to credentials.
*   **Interactive Contact Form**: Allows users to send messages directly through the website.
*   **Cursor Glow Effect**: An interactive visual effect where a glow follows the cursor around specified elements like the intro image and cards.
*   **Direct Resume Link**: Provides a direct link to the user's resume hosted on Google Drive.
