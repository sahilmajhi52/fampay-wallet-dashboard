# FamPay Wallet Dashboard (Frontend)

This project is a React-based frontend application inspired by a fintech wallet dashboard.
It is built as part of frontend practice, focusing on React fundamentals, component structure,
and basic application flow.

## 🚀 Day 1 Progress

On Day 1, the focus was on setting up the React environment and building the initial UI.

### ✅ Completed Tasks
- Set up a React application using Vite
- Configured project structure
- Implemented basic component-based architecture
- Created Login page UI
- Implemented login state handling using React `useState`
- Switched view from Login page to Dashboard on button click
- Added a simple Navbar component
- Successfully ran and tested the application locally

## 🧩 Features (Current)
- Login screen with email and password inputs
- Login button updates application state
- Dashboard screen displayed after login
- Simple Navbar displayed across pages

## 🛠 Tech Stack
- React.js
- JavaScript (ES6)
- Vite
- HTML5
- CSS3

## 📁 Project Structure
src/
├── components/
│ └── Navbar.jsx
├── pages/
│ └── Login.jsx
├── App.jsx
├── main.jsx
└── index.css

## 🧠 Key Learnings
- React component structure
- Props and state management
- Conditional rendering in React
- Handling user interaction with events
- Debugging React + Vite setup issues

## 🚧 Next Steps (Day 2)
- Design wallet dashboard UI
- Add wallet balance card
- Display transaction list using `.map()`
- Improve styling for a fintech-style UI

---



## 🚀 Day 2 Progress – Wallet Dashboard UI

Day 2 focused on building the core wallet dashboard interface and rendering dynamic data.

---

## ✅ Completed Tasks (Day 2)

- Created a wallet dashboard screen
- Displayed wallet balance in a card-style UI
- Created a transactions data file
- Rendered transaction list dynamically using `.map()`
- Applied conditional styling for debit and credit transactions
- Implemented logout functionality
- Improved UI structure to resemble a fintech application

---

## 🧩 Features Implemented

- **Wallet Balance Card**
  - Displays current wallet balance
- **Recent Transactions List**
  - Debit transactions shown in red
  - Credit transactions shown in green
- **Logout Button**
  - Logs the user out and returns to login screen

---

## 🛠 Tech Stack

- React.js
- JavaScript (ES6)
- Vite
- HTML5
- CSS (inline styling)

---

## 📁 Project Structure
src/
├── components/
│ └── Navbar.jsx
├── pages/
│ ├── Login.jsx
│ └── Dashboard.jsx
├── data/
│ └── transactions.js
├── App.jsx
├── main.jsx
└── index.css



## 🧠 Key Concepts Learned (Day 2)

- Rendering lists in React using `.map()`
- Using `key` prop for list items
- Conditional styling based on data values
- Separating data logic from UI components
- Component responsibility and clean structure
- State-driven UI updates

---

## ❗ Challenges Faced & Fixes

- JSX errors due to code outside component
- Missing closing tags
- Understanding `.map()` rendering
- Correct placement of UI logic inside components

These issues were resolved by:
- Keeping JSX only inside `return()`
- Using clean component structure
- Debugging errors step-by-step

---

## 📌 Current Status

- Login → Dashboard flow working
- Wallet dashboard fully functional
- Transactions UI rendering correctly
- Ready for further feature expansion

---

## 🚧 Next Steps (Day 3)

- Add money to wallet
- Deduct money from wallet
- Update balance dynamically
- Improve form handling
- Enhance UI interactions

---

Built as part of structured React practice and frontend skill development.



