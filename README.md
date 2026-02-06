💳 FamPay Wallet Dashboard (Frontend)

A React-based frontend application inspired by a fintech wallet dashboard.
This project is built as part of structured frontend practice to strengthen
React fundamentals, component design, and state management.

🚀 Project Overview

The application simulates a digital wallet where users can:

Log in

View wallet balance

Add and spend money

Track transaction history

The project is developed incrementally, with clear daily progress and learning outcomes.

🛠 Tech Stack

React.js

JavaScript (ES6)

Vite

HTML5

CSS (inline styling)

🚀 Day 1 – React Setup & Login Flow
Focus

Setting up the React environment and building the base application flow.

Completed Tasks

Initialized React project using Vite

Configured clean project structure

Created reusable components

Built Login page UI

Implemented login state handling using useState

Switched view from Login to Dashboard on successful login

Added a Navbar component

Ran and tested the app locally

Key Learnings

React component structure

Props and state basics

Conditional rendering

Event handling in React

Debugging React + Vite setup issues

Project Structure (Day 1)
src/
├── components/
│   └── Navbar.jsx
├── pages/
│   └── Login.jsx
├── App.jsx
├── main.jsx
└── index.css

🚀 Day 2 – Wallet Dashboard UI
Focus

Building the wallet dashboard UI and rendering dynamic data.

Completed Tasks

Created wallet dashboard screen

Displayed wallet balance in a card-style UI

Created static transactions data file

Rendered transactions using .map()

Applied conditional styling for debit and credit transactions

Implemented logout functionality

Improved UI structure for fintech look

Features Implemented

Wallet balance card

Recent transactions list

Credit (green) and debit (red) styling

Logout button

Key Concepts Learned

Rendering lists using .map()

Using key prop

Conditional styling

Separating data logic from UI

Component responsibility

Project Structure (Day 2)
src/
├── components/
│   └── Navbar.jsx
├── pages/
│   ├── Login.jsx
│   └── Dashboard.jsx
├── data/
│   └── transactions.js
├── App.jsx
├── main.jsx
└── index.css

🚀 Day 3 – Wallet Logic & State Management
Focus

Turning the UI into a functional wallet using React state and business logic.

Completed Tasks

Implemented dynamic wallet balance using useState

Added amount input field

Implemented Add Money functionality

Implemented Spend Money functionality

Updated wallet balance in real time

Recorded transactions dynamically

Displayed latest transactions first

Added validation to prevent invalid actions

Features Implemented

Add money to wallet

Spend money from wallet

Real-time balance updates

Live transaction history

Debit / credit color indicators

React Concepts Used

Multiple useState hooks

Controlled form inputs

State-driven UI updates

Immutable state updates

Event handling and validation

Key Learnings

State should never be mutated directly

UI updates are driven by state

Business logic belongs inside components

Controlled inputs improve reliability

Wallet logic mirrors real-world applications

📌 Current Status

Login → Dashboard flow working

Wallet balance updates correctly

Add / Spend money functionality working

Transaction history updates dynamically

Clean, readable component structure

