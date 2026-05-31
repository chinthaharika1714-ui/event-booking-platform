function Login() {

  const handleLogin = () => {
    alert("You are logged in successfully!");
  };

  return (
    <div className="home">
      <h2>Login Page</h2>

      <input
        type="email"
        placeholder="Enter Email"
        className="input-box"
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        className="input-box"
      />

      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;