# Dashboard
A modern and customizable dashboard built with React, Vite, and Tailwind CSS. This project includes a navigation sidebar with submenu options, a header component, and various elements to provide a clean and intuitive user interface for applications that require multi-level navigation.

## Table of Contents
- Features
- Installation
- Usage
- Components
- Scripts
- Dependencies

## Features
- Responsive Sidebar Navigation: Includes main and submenu navigation options, easily expandable and collapsible.
- Search Bar in Header: Quick access search bar to filter items.
- User Profile Dropdown: Allows user profile management with a dropdown menu in the header.
- React Router: For easy navigation across multiple pages and subpages.
- Fully Configurable UI: Easily customizable with Tailwind CSS and lucide-react icons for a streamlined design.

  
## Installation
- Clone the repository:

```bash
git clone[https://github.com/mohosin2126/react-dashboard-layout.git]
cd dashboard
```

- Install dependencies:
```bash
npm install
```

## Usage
To start the development server, run:

``` bash
npm run dev
```

To build the project for production, run:
```bash
npm run build
```

To preview the production build, run:

```bash
npm run preview
```

## Components

### Sidebar
- Sidebar component with NavItem for creating customizable, nested navigation options.
- Supports submenus with collapsible sections.
### Header
- Includes a search input, notification icon, and user profile dropdown.
  
### NavItem
- Subcomponent for individual navigation items in the Sidebar.

 
## Scripts
- `npm run dev`: Starts the development server with hot-reloading enabled.
- `npm run build`: Builds the application for production.
- `npm run preview`: Previews the production build.
- `npm run lint`: Lints the codebase using ESLint.
  
## Dependencies
- `React: ^18.3.1` - Frontend library for building the UI.
- `React Router DOM: ^6.26.2` - Library for routing and navigation.
- `Vite: ^5.4.8` - Bundler and build tool for faster development.
- `Tailwind CSS: ^3.4.13` - Utility-first CSS framework for styling.
- `Lucide React: ^0.451.0` - Icon pack for React components.
