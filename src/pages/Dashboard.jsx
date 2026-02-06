import { useState, useEffect } from "react";
import transactionsData from "../data/transactions";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

export default function Dashboard({ onLogout }) {
  /* ==========================
     STATE
  ========================== */

  const [balance, setBalance] = useState(() => {
    const savedBalance = localStorage.getItem("balance");
    return savedBalance ? Number(savedBalance) : 12450;
  });

  const [transactions, setTransactions] = useState(() => {
    const savedTxns = localStorage.getItem("transactions");
    return savedTxns ? JSON.parse(savedTxns) : transactionsData;
  });

  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("General");
  const [filter, setFilter] = useState("all");

  /* ==========================
     PERSISTENCE
  ========================== */

  useEffect(() => {
    localStorage.setItem("balance", balance);
  }, [balance]);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  /* ==========================
     ANALYTICS
  ========================== */

  const totalIncome = transactions
    .filter((txn) => txn.amount > 0)
    .reduce((sum, txn) => sum + txn.amount, 0);

  const totalExpense = transactions
    .filter((txn) => txn.amount < 0)
    .reduce((sum, txn) => sum + txn.amount, 0);

  const netChange = totalIncome + totalExpense;

  /* ==========================
     CATEGORY ANALYTICS
  ========================== */

  const categoryAnalytics = transactions.reduce((acc, txn) => {
    const cat = txn.category || "General";
    if (!acc[cat]) acc[cat] = 0;
    acc[cat] += txn.amount;
    return acc;
  }, {});

  const chartData = Object.entries(categoryAnalytics)
    .filter(([_, amt]) => amt < 0)
    .map(([name, value]) => ({
      name,
      value: Math.abs(value)
    }));

  /* ==========================
     FILTER
  ========================== */

  const filteredTransactions = transactions.filter((txn) => {
    if (filter === "credit") return txn.amount > 0;
    if (filter === "debit") return txn.amount < 0;
    return true;
  });

  /* ==========================
     ACTIONS
  ========================== */

  const addMoney = () => {
    if (!amount || Number(amount) <= 0) return;

    const value = Number(amount);
    setBalance(balance + value);
    setTransactions([
      { id: Date.now(), title: "Money Added", amount: value, category },
      ...transactions
    ]);
    setAmount("");
  };

  const spendMoney = () => {
    if (!amount || Number(amount) <= 0) return;

    const value = Number(amount);
    if (value > balance) return alert("Insufficient balance");

    setBalance(balance - value);
    setTransactions([
      { id: Date.now(), title: "Money Spent", amount: -value, category },
      ...transactions
    ]);
    setAmount("");
  };

  /* ==========================
     UI
  ========================== */

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "auto" }}>
      <h2>Wallet Dashboard</h2>

      {/* Balance */}
      <div style={card}>
        <h3>Wallet Balance</h3>
        <h1>₹{balance}</h1>
      </div>

      {/* Analytics */}
      <div style={card}>
        <h3>Analytics</h3>
        <p>Income: <strong style={{ color: "green" }}>₹{totalIncome}</strong></p>
        <p>Expense: <strong style={{ color: "red" }}>₹{Math.abs(totalExpense)}</strong></p>
        <p>Net Change: <strong>₹{netChange}</strong></p>
      </div>

      {/* 🔥 PIE CHART */}
      <div style={card}>
        <h3>Spending by Category</h3>

        {chartData.length === 0 ? (
          <p>No expense data</p>
        ) : (
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label
                >
                  {chartData.map((_, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* Amount */}
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={input}
      />

      {/* Category */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={input}
      >
        <option>General</option>
        <option>Food</option>
        <option>Shopping</option>
        <option>Bills</option>
        <option>Travel</option>
        <option>Entertainment</option>
      </select>

      {/* Actions */}
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        <button onClick={addMoney}>Add Money</button>
        <button onClick={spendMoney}>Spend Money</button>
      </div>

      {/* Filters */}
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("credit")}>Credit</button>
        <button onClick={() => setFilter("debit")}>Debit</button>
      </div>

      {/* Transactions */}
      <h3>Transactions</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredTransactions.map((txn) => (
          <li key={txn.id} style={txnStyle}>
            <div>
              <strong>{txn.title}</strong>
              <div style={{ fontSize: 12 }}>{txn.category}</div>
            </div>
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

/* ==========================
   STYLES
========================== */

const card = {
  background: "#f4f6ff",
  padding: 20,
  borderRadius: 10,
  marginBottom: 20
};

const input = {
  width: "100%",
  padding: 10,
  marginBottom: 10
};

const txnStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: 10,
  borderBottom: "1px solid #ddd"
};

const COLORS = [
  "#6366f1",
  "#22c55e",
  "#ef4444",
  "#f59e0b",
  "#06b6d4",
  "#8b5cf6"
];
