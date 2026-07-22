# 📰 NextNews

<div align="center">

A modern **News Platform** built with **Next.js App Router** to explore advanced routing patterns, rendering strategies, and server-side features.

Developed while following **Maximilian Schwarzmüller's Next.js course**, with a focus on understanding the App Router architecture and modern Next.js capabilities.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-149ECA?logo=react)
![SQLite](https://img.shields.io/badge/SQLite-better--sqlite3-003B57?logo=sqlite)
![License](https://img.shields.io/badge/License-Educational-blue)

</div>

---

## ✨ Overview

NextNews is a server-rendered news application that demonstrates many of the most important features introduced with the **Next.js App Router**.

Rather than focusing on UI complexity, this project emphasizes routing architecture, layouts, rendering behavior, and navigation patterns commonly used in modern Next.js applications.

It serves as a practical playground for understanding how advanced routing features work together in real-world scenarios.

---

## 🚀 Features

### News

* Browse all available news articles
* Read complete news details
* Image preview pages

### Archive

* Browse news by year
* Browse news by month
* Dynamic archive navigation

### Routing

* Route Groups
* Dynamic Routes
* Nested Routes
* Optional Catch-all Routes
* Parallel Routes
* Intercepting Routes

### Rendering

* Server Components
* Nested Layouts
* Loading UI
* Custom Error Pages
* Custom Not Found Pages
* Metadata API

### Database

* SQLite integration
* Server-side data fetching
* Shared database utilities

---

# 🛠 Tech Stack

| Technology              | Purpose    |
| ----------------------- | ---------- |
| Next.js 16              | Framework  |
| React 19                | UI Library |
| App Router              | Routing    |
| Better SQLite3          | Database   |
| JavaScript (ES Modules) | Language   |
| CSS Modules             | Styling    |

---

# 📂 Project Structure

```text
app/
│
├── (content)
│   ├── archive/
│   ├── news/
│   ├── loading.jsx
│   └── not-found.jsx
│
├── (marketing)
│   ├── page.jsx
│   └── layout.jsx
│
├── layout.jsx
└── page.jsx

components/
│
├── news/
├── nav-link/
└── ...

lib/
│
├── news.js
└── ...

public/
│
├── images/
└── ...
```

---

# 📚 Next.js Concepts Demonstrated

This project demonstrates many advanced App Router concepts, including:

* File-System Routing
* Nested Layouts
* Dynamic Segments
* Route Groups
* Parallel Routes
* Intercepting Routes
* Optional Catch-all Routes
* Metadata API
* Loading UI
* Error Handling
* Not Found Routes
* Server Components
* Database Fetching

---

# ⚡ Getting Started

## Clone the repository

```bash
git clone https://github.com/youzAt/NextNews.git
```

---

## Install dependencies

```bash
npm install
```

---

## Start development server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

# 📜 Available Scripts

### Development

```bash
npm run dev
```

Starts the development server.

---

### Production Build

```bash
npm run build
```

Creates an optimized production build.

---

### Start Production Server

```bash
npm start
```

Runs the production build.

---

### Lint

```bash
npm run lint
```

Runs ESLint.

---

# 🗄 Database

This project uses a local **SQLite** database powered by **better-sqlite3**.

Database access is abstracted into reusable utility functions located inside:

```text
lib/news.js
```

---

# 🎯 Learning Objectives

This project was built to practice:

* Modern Next.js routing
* App Router architecture
* Advanced layouts
* Dynamic routing
* Parallel routing
* Route interception
* Server Components
* Loading states
* Error boundaries
* Database integration

---

# 📸 Screenshots


---

# 🔮 Future Improvements

Potential enhancements include:

* Search functionality
* Pagination
* Categories
* Comments
* Markdown support
* API integration
* Light mode
* Responsive redesign

---

# 🤝 Acknowledgements

This project was built while following the excellent **Next.js course** by **Maximilian Schwarzmüller**.

The implementation has been adapted and extended as part of the learning process.

---

# 👨‍💻 Author

**Masoud Yousefi**

GitHub

https://github.com/youzAt

---

# 📄 License

This project is intended for educational purposes.

Feel free to fork it, explore the code, and use it as a learning resource.
