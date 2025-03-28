# Laravel 12 Inertia with React Test Project

This is a test project designed to help you learn how to integrate **Laravel**, **Inertia.js**, and **React** into a single application. It serves as a starting point for building modern, dynamic web applications using these technologies.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Folder Structure](#folder-structure)
6. [Contributing](#contributing)
7. [License](#license)

---

## Project Overview

This project demonstrates how to use **Laravel** as the backend framework, **Inertia.js** as the bridge between the backend and frontend, and **React** as the frontend library. The goal is to provide a seamless full-stack development experience where you can build interactive user interfaces without the complexity of traditional APIs.

Key Features:
- Laravel 12 as the backend.
- Inertia.js for server-side rendering and page navigation.
- React for building dynamic frontend components.

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **PHP 8.x** (Laravel requirement)
- **Node.js** (v16 or higher)
- **Composer** (PHP dependency manager)
- **npm** or **yarn** (JavaScript package manager)
- A database (e.g., MySQL, PostgreSQL, SQLite)

---

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/SeneshCode/Laravel-12-Intertia-With-React-Test-Project.git
   cd Laravel-12-Intertia-With-React-Test-Project
   ```

2. **Install PHP Dependencies**
   ```bash
   composer install
   ```

3. **Install JavaScript Dependencies**
   ```bash
   npm install
   ```

4. **Set Up Environment Variables**
   - Copy the `.env.example` file to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Update the `.env` file with your database credentials and other configurations.

5. **Generate Application Key**
   ```bash
   php artisan key:generate
   ```

6. **Run Migrations**
   ```bash
   php artisan migrate
   ```

7. **Build Frontend Assets**
   ```bash
   npm run dev
   ```

8. **Start the Development Server**
   ```bash
   php artisan serve
   ```

9. **Access the Application**
   Open your browser and navigate to `http://localhost:8000`.

---

## Usage

Once the project is set up, you can start exploring and modifying it to suit your learning needs. Here are some things you can do:

- **Create New Pages**: Add new routes in `routes/web.php` and corresponding React components in `resources/js/Pages`.
- **Interact with the Database**: Use Laravel's Eloquent ORM to create models, seed data, and perform CRUD operations.
- **Customize Styles**: Modify the CSS/SCSS files in `resources/css` to change the look and feel of your application.

---

## Folder Structure

Here’s a brief overview of the project structure:

```
├── app/               # Laravel application logic (models, controllers, etc.)
├── resources/
│   ├── js/            # React components and frontend logic
│   │   ├── Pages/     # React components for each page
│   │   └── app.js     # Entry point for React
│   └── views/         # Blade templates (used by Inertia)
├── routes/            # Laravel routes (web.php, api.php)
├── public/            # Compiled assets (CSS, JS) and static files
├── database/          # Database migrations and seeders
├── config/            # Configuration files
└── .env               # Environment variables
```

---

## Contributing

If you’d like to contribute to this project, feel free to fork the repository and submit pull requests. Any improvements, bug fixes, or additional features are welcome!

Steps to Contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

---

## License

This project is open-source and available under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as needed.

---

## Contact

If you have any questions or need further assistance, feel free to reach out:

- GitHub: [@SeneshCode](https://github.com/SeneshCode)
- Email: [seneshpawan84@gmail.com](mailto:seneshpawan84@gmail.com)

Happy coding! 🚀


