# User Auth App – Node.js Authentication Template

This is a lightweight user authentication template built with **Node.js**, **Express**, and **EJS**. It provides a clean starting point for building user-based web applications with login, registration, and session management out of the box.

---

##  Features

-  Registration & Login pages
-  Session-based authentication using `express-session`
-  Secure password hashing with `bcrypt`
-  Role-based access control (admin vs user)
-  Flash messages for feedback
-  EJS templating and Bootstrap styling
-  Middleware-based route protection
-  Clean file structure for easy reusability

---

##  Tech Stack

- **Node.js** with **Express**
- **EJS** for templating
- **bcrypt** for password hashing
- **express-session** for login sessions
- **connect-flash** for messaging

---

##  Upcoming Improvements

This template is intended for demo and development purposes. Upcoming enhancements include:

- ✅ Password strength validation
- ✅ Full error handling for form input
- ✅ Unit tests (with Jest or Mocha)
- 🔜 MongoDB integration (when used in real projects)

---

## 💡 Usage

This app is intended as a **template** for future projects.

By default, user data is stored in-memory and will reset on every server restart. When integrated into actual applications, this will be swapped out for a **MongoDB** database.

To run locally:

```bash
git clone https://github.com/oram79/User-Auth-App.git
cd User-Auth-App
npm install
npm start

