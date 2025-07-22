<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# HiveElla Hotel Website - Copilot Instructions

This is a modern hotel website built with the Lit framework (Web Components). The project follows these conventions:

## Architecture

- **Framework**: Lit 3.x with TypeScript
- **Build Tool**: Vite
- **Component Structure**: Modular web components in `/src/components/`
- **Styling**: CSS-in-JS using Lit's `css` template literal

## Component Guidelines

- Use `@customElement('element-name')` decorator for component registration
- Use `@state()` for internal component state
- Use `@property()` for external component properties
- Follow the naming convention: `kebab-case` for element names
- Use semantic HTML and accessibility best practices

## Styling Guidelines

- Use CSS custom properties for theming
- Brand colors: Primary #8B7355, Secondary #6B5D4F
- Typography: 'Playfair Display' for headings, 'Inter' for body text
- Mobile-first responsive design approach
- Use CSS Grid and Flexbox for layouts

## Hotel-Specific Features

- Room booking functionality
- Contact forms with validation
- Responsive image galleries
- Mobile-optimized navigation
- Modern design with hospitality industry best practices

## Development Notes

- All components are self-contained with their own styles
- Use event delegation for user interactions
- Optimize images for web performance
- Ensure WCAG accessibility compliance
- Test on multiple devices and browsers

When generating code for this project, prioritize modern web standards, accessibility, and the luxurious hotel brand aesthetic.
