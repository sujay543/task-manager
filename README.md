# 📝 Task Manager (Full Stack Project)

A simple full-stack Task Manager application built using Node.js, Express, MongoDB, and vanilla JavaScript.

---

## 🚀 Features

* Create a task
* View all tasks
* Mark task as completed
* Update task status
* Delete a task
* Real-time UI updates

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Atlas)
* **Frontend:** HTML, CSS, JavaScript
* **Tools:** Postman, VS Code

---

## 📁 Project Structure

```
task-manager/
│
├── controllers/      # Business logic
├── models/           # Mongoose schema
├── routes/           # API routes
├── templates/        # Frontend files
├── server.js         # Entry point
├── index.js          # App configuration
├── package.json
└── .env
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

---

### 2️⃣ Install dependencies

```
npm install
```

---

### 3️⃣ Setup environment variables

Create a `.env` file and add:

```
DATABASE=your_mongodb_connection_string
PORT=8000
```

---

### 4️⃣ Run the server

```
npm run server
```

Server will run on:

```
http://localhost:8000
```

---

### 5️⃣ Run frontend

Open:

```
templates/index.html
```

Or use Live Server:

```
http://127.0.0.1:5500
```

---

## 🔗 API Endpoints

### Get all tasks

```
GET /api/v1/task
```

### Create task

```
POST /api/v1/task
```

### Update task

```
PATCH /api/v1/task/:id
```

### Delete task

```
DELETE /api/v1/task/:id
```

---

## ⚠️ Important Notes

* CORS is enabled for frontend-backend communication
* MongoDB Atlas is used for database
* Environment variables are required for security

---

## 📸 Screenshots (Optional)

*Add screenshots of your UI here*

---

## 📌 Future Improvements

* Add authentication (login/signup)
* Add due dates
* Add task categories
* Improve UI/UX

---

## 👨‍💻 Author

**Sujay Sen**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
