# Lendsqr Frontend Engineering Assessment

A responsive frontend implementation of the Lendsqr Admin Dashboard built with React, TypeScript, and SCSS.

## Live Demo

Deployed Application: [INSERT DEPLOYMENT URL]

## Repository

Source Code: [INSERT GITHUB REPOSITORY URL]

---

## Demo Credentials

Use the following credentials to access the application:

**Email**

```text
admin@lendsqr.com
```

**Password**

```text
password
```

---

## Overview

This project is a frontend implementation of the Lendsqr Frontend Engineering Assessment.

The application includes:

* Login Page
* Dashboard Layout
* Users Page
* User Details Page
* Pagination
* Responsive Design
* Local Storage Persistence
* Loading, Error and Empty States

The application consumes a mock API containing approximately 500 user records and presents them in a responsive dashboard interface.

---

## Features

### Authentication (Mock Login)

A mock authentication flow was implemented using localStorage.

Valid credentials:

```text
Email: admin@lendsqr.com
Password: password
```

Successful login stores an authentication flag and grants access to protected routes.

---

### Users Management

* Fetches user records from a mock API
* Displays users in a paginated table
* Handles loading states
* Handles error states
* Handles empty states
* Responsive across screen sizes

---

### User Details

Users can navigate from the Users table to an individual User Details page.

Selected user information is:

* Persisted using localStorage
* Retrieved on the User Details page
* Available after browser refresh

---

### Dashboard Layout

Reusable dashboard structure containing:

* Navbar
* Sidebar
* Main Content Area

This layout is shared across authenticated pages.

---

## Tech Stack

* React
* TypeScript
* SCSS
* React Router DOM
* Vite

---

## Mock Data Source

The application consumes a mock API containing approximately 500 user records.

### Dataset Generation

The dataset was generated using Mockaroo.

Mockaroo was used to create realistic user records containing:

* Organization
* Username
* Email
* Phone Number
* Date Joined (includes time)
* User Status
* Gender
* Avatar
* Has Loans
* Has Savings

### API Hosting

The generated dataset was then served through MockServer, which provided a REST-like endpoint consumed by the React application.

This setup simulates a real-world frontend/backend interaction while remaining within the scope of the assessment.

### Why This Approach?

* Generates realistic user data
* Produces a unique dataset for the assessment
* Supports the required 500-record dataset
* Mimics consumption of a production API
* Keeps the frontend architecture similar to a real-world application

---

## Project Structure

```text
src/
│
├── components/
│   ├── Navbar/
│   ├── Sidebar/
│   ├── Pagination/
│   ├── UserTable/
│   ├── UserStatsCard/
│   ├── UserStatusBadge/
│
├── layouts/
│   └── DashboardLayout/
│
├── pages/
│   ├── Login/
│   ├── Users/
│   └── UserDetails/
│
├── routes/
│
├── services/
│
├── types/
│
├── styles/
│
└── App.tsx
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd lendsqr-fe-test
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## Available Scripts

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Lint project:

```bash
npm run lint
```

---

## Architecture Decisions

### Why TypeScript?

TypeScript was used to provide:

* Static type checking
* Improved maintainability
* Better IDE support
* Reduced runtime errors

User-related data structures were defined using interfaces to ensure consistency throughout the application.

---

### Why Local Storage?

The assessment required user persistence using either localStorage or IndexedDB.

Local Storage was chosen because:

* Only a single selected user needs persistence
* Data volume is very small
* Simpler implementation
* Supports refresh persistence

---

### Why Pagination?

The application handles approximately 500 user records.

Pagination was implemented to:

* Improve readability
* Reduce rendered DOM elements
* Improve overall user experience

---

### Why Not Virtualization?

Virtualization was considered but not implemented.

Reasoning:

* Dataset size is approximately 500 records
* Pagination already limits rendered rows
* Performance remains excellent without virtualization
* Additional complexity was not justified for the current dataset size

---

## Responsiveness

The application is responsive across:

* Mobile Devices
* Tablets
* Desktop Screens

Responsive layouts were implemented using SCSS and flexible layout techniques.

---

## State Handling

The application includes:

### Loading State

Displayed while data is being fetched.

### Error State

Displayed when requests fail.

### Empty State

Displayed when no user records are available.

These states were implemented to handle real-world scenarios rather than only the ideal case.

---

## Future Improvements

With additional time, the following enhancements could be added:

* Search functionality
* Advanced filtering
* User action dropdown menu
* More comprehensive unit tests
* Backend authentication integration
* Global state management

---

## Author

Swagat Talukdar
