function Register() {

  const handleRegister = () => {
    alert("You are registered successfully!");
  };

  return (
    <div className="home">
      <h2>Register Page</h2>

      <input
        type="text"
        placeholder="Enter Name"
        className="input-box"
      />

      <br /><br />

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

      <button onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}

export default Register;