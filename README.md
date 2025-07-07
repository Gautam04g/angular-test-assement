# Angular Test Assignment

## 📋 Description
This Angular 19 project implements a user search interface using a search panel and a results data table, powered by `json-server`. It uses modern Angular features like standalone components, `inject()`, and `signal()`, and follows SOLID principles and modular architecture.

---

## 🧩 Features
- 🔍 Search Panel with inputs: First Name, Last Name, Phone Number, Position
- 📄 Data Table to display filtered user data
- ⚡ Built with Angular 19 (standalone components, inject, signal)
- 🧠 Modular folder structure and SOLID principle adherence
- 🌐 Backend mock with `json-server`

---

## 📁 Folder Structure
```
src/
├── app/
│   ├── app.component.ts
│   ├── app.routes.ts
│   ├── app.config.ts
├── users/
│   ├── components/
│   │   ├── data-table/
│   │   └── search-panel/
│   ├── interface/
│   │   └── user.ts
│   ├── services/
│       ├── user.service.ts
│       └── user.service.spec.ts
├── index.html
├── main.ts
├── styles.scss
```

---

## 🚀 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Gautam04g/angular-test-assement.git
cd angular-test-assement
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start JSON Server (Mock API)
```bash
npm install -g json-server
json-server --watch db.json
```
→ This will start your backend at: `http://localhost:3000/users`

### 4. Run Angular App
```bash
ng serve
```
→ Visit `http://localhost:4200` to see the app in action.

---

## ⚙️ Architecture Diagram (Textual)
```
AppComponent
├── SearchPanelComponent (Standalone) → emits filters
├── DataTableComponent (Standalone) ← shows users
└── UserService → handles HTTP + filtering logic
```

---

## 🧠 Design Decisions
- ✅ `signal()` used in `AppComponent` to manage users state reactively
- ✅ `inject()` used instead of constructor DI for brevity
- ✅ Standalone components improve modularity
- ✅ json-server used to simulate real HTTP API with filters
- ✅ Styling included via component-scoped CSS/SCSS

---

## 📦 Deliverables
- ✅ Angular 19+ standalone-based UI app
- ✅ `db.json` backend with mock users
- ✅ README with setup + architecture
- ✅ GitHub-push ready structure

---

## 👨‍💻 Author
Gautam G
