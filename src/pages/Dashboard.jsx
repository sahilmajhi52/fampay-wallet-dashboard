import { useState } from "react";
import transactionsData from "../data/transactions";

export default function Dashboard({ onLogout }) {
  const [balance, setBalance] = useState(12450);
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState(transactionsData);

  const addMoney = () => {
    if (!amount || amount <= 0) return;

    const newTxn = {
      id: Date.now(),
      title: "Money Added",
      amount: Number(amount)
    };

    setBalance(balance + Number(amount));
    setTransactions([newTxn, ...transactions]);
    setAmount("");
  };

  const spendMoney = () => {
    if (!amount || amount <= 0 || amount > balance) return;

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

      {/* Balance */}
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

      {/* Input */}
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
      />

      {/* Buttons */}
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={addMoney}>Add Money</button>
        <button onClick={spendMoney}>Spend Money</button>
      </div>

      {/* Transactions */}
      <h3 style={{ marginTop: "30px" }}>Recent Transactions</h3>
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
