# User Management System  

This is the starting point for the **User Management System** assignment. The goal of this project is to create a web application where users can register, log in, and access role-based functionality based on their account type (user or admin).

## Features  

- **Home Page**:  
  - Displays "Login" and "Sign Up" buttons.  
  - Redirects users to their dashboard after successful login.  

- **Registration Page**:  
  - Allows users to create an account with a username, email, and password.  
  - Stores passwords securely using bcrypt hashing.  

- **Login Page**:  
  - Authenticates users using their email and password.  
  - Checks hashed passwords for validity during authentication.  

- **Landing Page**:  
  - For **users**, displays a simple dashboard with their username.  
  - For **admins**, displays all registered users, their emails, and roles.  

- **Logout**:  
  - Logs the user out by destroying their session and redirecting to the home page.

## Setup Instructions  

### Prerequisites  
- [Node.js](https://nodejs.org) installed on your machine.  
- A code editor, such as [VSCode](https://code.visualstudio.com/).

## How to Use this Template  

This repository is set up as a **GitHub template** to help you quickly create your own version of the **User Management System**.  

### Steps to Create Your Own Repository  

1. **Click the "Use this template" button** at the top of this page on GitHub.  

1. **Name your new repository** and choose its visibility (public or private).  

1. Once your repository is created, **clone your new repo** to your local machine:  
    ```bash  
    git clone <your-new-repo-url>  
    ```  

1. Navigate into the project directory and install the necessary dependencies:  
    ```bash  
    cd <your-new-repo-name>  
    npm install  
    ```  

1. **Run the app:**  
    ```bash  
    npm start  
    ```  
    This will start the server at `http://localhost:3000/`.  

1. You can now begin working on your project, adding your own code and committing your changes as you go:  
    ```bash  
    git add .  
    git commit -m "First commit"  
    git push origin main  
    ```  
