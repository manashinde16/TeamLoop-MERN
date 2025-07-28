````markdown
# 🌀 TeamLoop – Advanced B2B Teams Project Management SaaS

TeamLoop is a powerful, full-stack B2B project management and team collaboration platform designed to streamline workflows, enhance team productivity, and manage tasks across organizations. Built with modern tools like React, TypeScript, Express, MongoDB, and Google OAuth, it provides a seamless experience for creating workspaces, assigning roles, managing tasks, and facilitating team communication.

---

## 🌟 Inspiration

As businesses grow, managing multiple teams, projects, and internal communication becomes increasingly complex. Tools like Slack, Trello, and Jira attempt to fill these gaps, but switching between multiple tools often leads to fragmented workflows and wasted time.

**TeamLoop** was inspired by this challenge — to build an all-in-one SaaS solution that enables B2B teams to **collaborate**, **communicate**, and **coordinate** within a single unified interface. Whether it’s project tracking, team messaging, task delegation, or role management, TeamLoop brings it all under one roof — with scalability, speed, and modern UX in mind.

---

## 🎯 Objective

The objective of TeamLoop is to provide:

- A **scalable multi-tenancy project management system** tailored for team collaboration in B2B environments.
- A seamless, secure **Google OAuth login experience** without the need for traditional password management.
- A **modular workspace system** that supports creation, management, and role-based access for multiple teams.
- A full suite of **task management tools** including assignments, priority, deadlines, and status tracking.
- Built-in **team messaging** for contextual collaboration within workspaces.
- An intuitive **light/dark mode UI** that supports accessibility and enhances the user experience.
- A solid backend architecture with data consistency, session-based security, and clean code practices.

---

## 📌 What the Project Does

TeamLoop offers a full-featured project management experience with a focus on collaboration:

- 🔐 **Google OAuth Authentication** (Secure & seamless login)
- 🏢 **Create & Manage Multiple Workspaces** (For different teams/projects)
- ✅ **Task Management System** (CRUD, status, priority, assignee)
- 📊 **Analytics Dashboard** (Track workspace performance & usage)
- 💬 **Real-time Messaging System** (Collaborate within teams)
- 🌗 **Light & Dark Mode Support**
- 🧑‍💼 **Role-Based Access Control** (Owner, Admin, Member)
- 🔔 **Notification System** (Visual feedback & updates)
- 🔍 **Search & Filters** (Status, Priority, AssignedTo)
- 🚪 **Logout & Secure Session Termination**
- 💾 **Mongoose Transactions** for consistent DB state
- 🧪 **Seeding Support** for test/demo data

---

## 🧰 Tech Stack

### 🔹 Frontend

- **React.js (v18+)**
- **TypeScript**
- **Vite** (for blazing-fast builds)
- **Redux Toolkit**
- **React Router DOM**
- **Tailwind CSS** & **Shadcn UI**
- **Framer Motion** (for smooth animations)
- **Zustand** (for lightweight global state)
- **Toastify**, **React Hook Form**, and more

### 🔹 Backend

- **Node.js**
- **Express.js**
- **MongoDB** (with **Mongoose** ORM)
- **Google OAuth 2.0** (via **Passport.js**)
- **Zod** (for schema validation)
- **Cookie-based Sessions**
- **Nodemailer** (for email workflows)

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/teamloop.git
cd teamloop
````

---

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the `/server` folder and add the following:

```env
PORT=8000
NODE_ENV=development
MONGO_URI="your-mongodb-uri"

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_CALLBACK_URL=http://localhost:8000/api/auth/google/callback

FRONTEND_ORIGIN=http://localhost:3000
FRONTEND_GOOGLE_CALLBACK_URL=http://localhost:3000/google/callback
```

Then start the backend server:

```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd ../client
npm install
npm run dev
```

The frontend will be running at [http://localhost:3000](http://localhost:3000)

---

## 📌 Use Cases

* ✅ B2B SaaS companies needing workspace-based team collaboration
* ✅ Startups looking to manage internal tasks & roles securely
* ✅ Teams wanting an integrated task board with real-time updates
* ✅ Managers needing dashboards and role-controlled access
* ✅ Remote teams requiring structured, scalable communication systems

---

## 🧩 Features & Modules

| Feature                    | Status |
| -------------------------- | ------ |
| Google OAuth Sign-in       | ✅      |
| Role-Based Permissions     | ✅      |
| Workspaces / Teams         | ✅      |
| Projects & Task Management | ✅      |
| Messaging System           | ✅      |
| Notification System        | ✅      |
| Light/Dark Mode            | ✅      |
| Search, Filter, Pagination | ✅      |
| Analytics Dashboard        | ✅      |
| Session Handling           | ✅      |
| Data Seeding               | ✅      |

---

## 🚧 Challenges Faced

* Integrating **Google OAuth** with cookie-based sessions securely.
* Designing a flexible role system across multiple teams and workspaces.
* Managing **frontend state** between modals, forms, and boards.
* Implementing **Mongoose Transactions** to ensure DB consistency.
* Fine-tuning **dark/light mode** for accessibility and theme persistence.

---

## 🏆 Accomplishments

* Built a **production-ready B2B collaboration platform** solo from start to finish.
* Achieved full integration of frontend/backend with clean code architecture.
* Developed secure Google Auth flow without JWT or local password storage.
* Learned & applied best practices in scalable frontend architecture and backend DB modeling.

---

## 📘 What I Learned

* Advanced usage of **React + Redux + Zustand** in a real-world app.
* TypeScript patterns in both frontend and backend codebases.
* Google OAuth integration using **Passport.js** and session cookies.
* Clean architecture principles for scalable backend systems.
* Building for scalability: modular code, flexible data models, and reusable UI.

---

## 📌 License

This project is open-source and built for educational and demonstrative purposes.

---

## 📬 Contact

**Manas Shinde**
📧 [manashinde16@gmail.com](mailto:manashinde16@gmail.com)
🔗 [LinkedIn](https://linkedin.com/in/manashinde16)

---

```
