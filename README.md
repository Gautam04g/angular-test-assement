# Angular Frontend Test Assignment

## 📋 Description
This Angular 19 project implements a search panel and a data table to display filtered user data using `json-server` as a backend. It demonstrates SOLID principles and modern Angular features like standalone components, `inject()`, and signals.

## 🧩 Features
- ✅ Search Panel: Filter by First Name, Last Name, Phone Number, and Position
- ✅ Data Table: Displays filtered user records
- ✅ Standalone Components using `standalone: true`
- ✅ `inject()` and `signal()` usage
- ✅ Clean folder structure and SOLID principles

## 🚀 Setup Instructions
### 1. Clone the Repository
```bash
git clone https://github.com/your-username/angular-frontend-test.git
cd angular-frontend-test
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Run JSON Server
```bash
json-server --watch db.json
```
This will start the mock API at: `http://localhost:3000/users`

### 4. Run Angular App
```bash
ng serve
```
App will be live at: `http://localhost:4200`

## ⚙️ Architecture Visualization
```
AppComponent
├── SearchPanelComponent → emits search filters
├── DataTableComponent ← receives filtered users
└── UserService → fetches data from JSON Server
```

## 🧠 Design Decisions
- Signals are used for local reactive state in AppComponent.
- Standalone components make the app modular and future-proof.
- inject() replaces constructor-based DI for brevity and clarity.
- Filtering logic is delegated to backend via query params to keep UI clean.

## ✅ Requirements Covered
- Search panel with 4 input fields ✔
- Results rendered in a table ✔
- Uses Angular 19 features ✔
- SOLID principles and modular code ✔
- Clean UI and code structure ✔
- GitHub-compatible structure and documentation ✔

## 👨‍💻 Author
Gautam G