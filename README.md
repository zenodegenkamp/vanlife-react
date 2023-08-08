
# Van life README

This README provides an overview of the structure and functionality of the React website project.

## Table of Contents

- [Description](#description)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Routes and Components](#routes-and-components)
- [Authentication](#authentication)
- [Contributing](#contributing)
- [License](#license)

## Description

This React website is designed to provide various functionalities related to vans, hosting, and user interactions. It is built using React and utilizes React Router for managing routes. The website has different sections, including Home, About, Van Details, User Authentication, Host Dashboard, Income Tracking, Reviews, and more.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Installation

1. Clone the repository to your local machine:
   ```
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install the project dependencies using npm or yarn:
   ```
   npm install
   # or
   yarn install
   ```

### Running the Application

Once the dependencies are installed, you can start the development server and view the website in your browser.

```bash
npm start
# or
yarn start
```

The application should now be accessible at `http://localhost:3000`.

## Project Structure

The project structure is organized for easy navigation and separation of concerns. Here's a brief overview:

- `src/`
  - `components/`: Reusable UI components
  - `pages/`: Different pages/views of the website
  - `server.js`: Mock server (for simulation purposes)
  - `App.js`: Main application component
  - `index.js`: Entry point to the application

## Routes and Components

The website is structured using React Router for routing. The routes and components are organized as follows:

- Public Routes:
  - Home
  - About
  - Vans
  - Van Detail
  - Login
  - 404 Not Found

- Protected Routes (Authentication Required):
  - Host Dashboard
  - Income
  - Reviews
  - Host Vans
  - Host Van Detail (with nested sub-routes)
    - Host Van Info
    - Host Van Pricing
    - Host Van Photos

## Authentication

Authentication is managed using an `AuthRequired` component. For now, authentication status is determined by the `authenticated` variable. If the user is not authenticated, they are redirected to the Login page.

## Contributing

Contributions to the project are welcome! Feel free to submit issues and pull requests for enhancements, bug fixes, or new features.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---
