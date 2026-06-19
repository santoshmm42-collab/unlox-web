function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Hello Guys 👋</h1>

      <label htmlFor="username">Username:</label>

      <br />
      <br />

      <input
        type="text"
        id="username"
        placeholder="Enter your username"
      />

      <br />
      <br />

      <button>Submit</button>

      <div style={{ marginTop: "20px" }}>
        <h3>Hello React!</h3>
        <p>This is a simple React app.</p>
      </div>
    </div>
  );
}

export default App;