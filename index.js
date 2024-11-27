const express = require("express");
const path = require("path");
const session = require("express-session");
const bcrypt = require('bcrypt');


const app = express();
const PORT = 3000;
const SALT_ROUNDS = 10;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
    session({
        secret: "replace_this_with_a_secure_key",
        resave: false,
        saveUninitialized: true,
    })
);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const users = [
    {
        id: 1,
        username: "Oram_79",
        email: "logansjoram7922@gmail.com",
        password: bcrypt.hashSync("Sadie2011!", SALT_ROUNDS),
        role: "admin",
    },
    {
        id: 2,
        username: "AdminUser",
        email: "admin@example.com",
        password: bcrypt.hashSync("admin123", SALT_ROUNDS),
        role: "admin",
    },
    {
        id: 3,
        username: "JohnDoe",
        email: "johndoe23@gmail.com",
        password: bcrypt.hashSync("Doe23", SALT_ROUNDS),
        role: "user"
        }
];

// GET /login - Render login form
app.get("/login", (request, response) => {
    response.render("login");
});

// POST /login - Allows a user to login

app.use(session({
    secret: 'secret_key',
    resave: false,
    saveUninitialized: true,
}));

app.post("/login", async (request, response) => {
    const {email, password } = request.body;
    const user = users.find(u => u.email === email);

    if (user && await bcrypt.compare(password, user.password)) {
        request.session.user = { username: user.username, email: user.email, role: user.role };
        response.redirect('/landing');
    } else {
        response.render('login', { error: 'Invaild Login Information'});
    }
});

// GET /signup - Render signup form
app.get("/signup", (request, response) => {
    response.render("signup");
});

// POST /signup - Allows a user to signup

app.post("/signup",async(request, response) => {
    const { username, email, password } = request.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, email, password: hashedPassword, role: 'user' });
    response.redirect('/login'); // Redirect to login after successful registration
});

// GET / - Render index page or redirect to landing if logged in
app.get("/", (request, response) => {
    if (request.session.user) {
        return response.redirect("/landing");
    }
    response.render("index");
});

// GET /landing - Shows a welcome page for users, shows the names of all users if an admin
app.get("/landing", (request, response) => {
    if (!request.session.user) {
        return response.redirect('/login');
    }

    if (request.session.user.role === 'admin') {
        response.render('admin', { users });
    } else {
        response.render('dashboard', { user: request.session.user });
    }
});

app.get('/logout', (request, response) => {
    request.session.destroy(() => {
        response.redirect('/');
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
