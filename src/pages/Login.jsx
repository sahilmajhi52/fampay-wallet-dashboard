export default function Login({ onLogin }) {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h3>Login</h3>

      <input placeholder="Email" />
      <br /><br />

      <input type="password" placeholder="Password" />
      <br /><br />

      <button onClick={onLogin}>Login</button>
    </div>
  );
}
