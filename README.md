# 🔐 Simple Sign-In Form (Full Stack)

This project is a simple **React frontend** sign-in form connected to a **Node.js + MySQL backend**. It demonstrates how to send user credentials from the UI to a server and validate them using a database.

---

## 📁 Project Structure

```
/client         → React frontend (form UI)
/server         → Node.js backend with API
  ├── db.js     → MySQL connection
  ├── index.js  → Express server
```

---

## 🚀 Features

- 📥 Email & password input form
- ✅ Frontend validation
- 🔗 API call to Node.js server
- 🗃️ MySQL database connection
- 🔒 Password check with database record

---

## ⚙️ Technologies

- **Frontend:** React, Axios, Bootstrap
- **Backend:** Node.js, Express, MySQL
- **Database:** MySQL (local or Railway/PlanetScale)

---

## 📦 Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/simple-signin-form.git
cd simple-signin-form
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create a `.env` file:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=signin
PORT=5000
```

Start the backend server:

```bash
node index.js
```

---

### 3️⃣ Setup Frontend

```bash
cd ../client
npm install
npm run dev
```

> Runs on: `http://localhost:5173`

---

## 🗃️ MySQL Database Setup

Run this SQL in your MySQL:

```sql
CREATE DATABASE signin;

USE signin;

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL
);

-- Optional: insert a test user
INSERT INTO users (email, password)
VALUES ('test@example.com', '123456');
```

---

## 🔌 API Endpoint

**POST** `/login`

```json
{
  "email": "test@example.com",
  "password": "123456"
}
```

Returns success if user exists and password matches.

---

## 🌐 Deployment

You can deploy using:

- **Render** / **Railway** for backend
- **Vercel** / **Netlify** for frontend

Ensure `.env` variables are set in backend deployment.

---

## 🙌 Author

Created by [Ganesh Babu](https://github.com/Ganeshbabu26)

---

## 📄 License

This project is licensed under the MIT License.

---

