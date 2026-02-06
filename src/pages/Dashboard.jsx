import { useState, useEffect } from "react";
import transactionsData from "../data/transactions";

export default function Dashboard({ onLogout }) {
  // 🔹 Load balance from localStorage (or default)
  const [balance, setBalance] = useState(() => {
    const savedBalance = localStorage.getItem("balance");
    return savedBalance ? Number(savedBalance) : 12450;
  });

  // 🔹 Load transactions from localStorage (or default)
  const [transactions, setTransactions] = useState(() => {
    const savedTxns = localStorage.getItem("transactions");
    return savedTxns ? JSON.parse(savedTxns) : transactionsData;
  });

  const [amount, setAmount] = useState("");

  // 🔹 Save balance to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("balance", balance);
  }, [balance]);

  // 🔹 Save transactions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // ➕ Add Money
  const addMoney = () => {
    if (!amount || amount <= 0) {
      alert("Enter a valid amount");
      return;
    }

    const newTxn = {
      id: Date.now(),
      title: "Money Added",
      amount: Number(amount)
    };

    setBalance(balance + Number(amount));
    setTransactions([newTxn, ...transactions]);
    setAmount("");
  };

  // ➖ Spend Money
  const spendMoney = () => {
    if (!amount || amount <= 0) {
      alert("Enter a valid amount");
      return;
    }

    if (Number(amount) > balance) {
      alert("Insufficient balance");
      return;
    }

    const newTxn = {
      id: Date.now(),
      title: "Money Spent",
      amount: -Number(amount)
    };

    setBalance(balance - Number(amount));
    setTransactions([newTxn, ...transactions]);
    setAmount("");
  };

  return (
    <div style={{ padding: "40px", maxWidth: "500px", margin: "auto" }}>
      <h2>Wallet Dashboard</h2>

      {/* Balance Card */}
      <div
        style={{
          background: "#f4f6ff",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px"
        }}
      >
        <h3>Wallet Balance</h3>
        <h1>₹{balance}</h1>
      </div>

      {/* Amount Input */}
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "10px"
        }}
      />

      {/* Action Buttons */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "30px" }}>
        <button onClick={addMoney} disabled={!amount}>
          Add Money
        </button>
        <button onClick={spendMoney} disabled={!amount}>
          Spend Money
        </button>
      </div>

      {/* Transactions */}
      <h3>Recent Transactions</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {transactions.map((txn) => (
          <li
            key={txn.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              borderBottom: "1px solid #ddd"
            }}
          >
            <span>{txn.title}</span>
            <span style={{ color: txn.amount < 0 ? "red" : "green" }}>
              ₹{txn.amount}
            </span>
          </li>
        ))}
      </ul>

      <br />
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
