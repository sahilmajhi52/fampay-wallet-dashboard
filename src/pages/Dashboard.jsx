import { useState } from "react";
import transactionsData from "../data/transactions";

export default function Dashboard({ onLogout }) {
  const [balance] = useState(12450);

  return (
    <div style={{ padding: "40px" }}>
      
      {/* Wallet Balance Card */}
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

      {/* Recent Transactions */}
      <h3>Recent Transactions</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {transactionsData.map((txn) => (
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
