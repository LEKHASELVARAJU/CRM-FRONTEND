import React, { useState } from "react";
import { Link } from "react-router-dom";

const User = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLogin = () => {
    if (username && password) {
      if (username === "LEKHA" && password === "123*") {
        setLoggedIn(true);
        setShowSuccessPopup(true);

        // Set a timer to hide the success popup after 2 seconds
        setTimeout(() => {
          setShowSuccessPopup(false);
        }, 2000);
      } else {
        setLoggedIn(false);
        setShowSuccessPopup(true);

        // Set a timer to hide the error popup after 2 seconds
        setTimeout(() => {
          setShowSuccessPopup(false);
        }, 2000);
      }
    } else {
      alert("Both fields are compulsory.");
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div style={styles.container}>
      <h2 >Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />
      <br />
      <div style={styles.passwordContainer}>
        <input
          type={isPasswordVisible ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button
          onClick={togglePasswordVisibility}
          style={styles.passwordToggle}
        >
          {isPasswordVisible ? "Hide" : "Show"}
        </button>
      </div>
      <br />
      <button onClick={handleLogin} style={styles.button}>
        Log In
      </button>
      {isLoggedIn && showSuccessPopup && (
        <div style={styles.successPopup}>
          <p style={styles.successText}>Welcome, potential user!</p>
          
        </div>
      )}
      {isLoggedIn && (
        <Link className="btn btn-primary mx-4" to={"/add"}>
          View
        </Link>
      )}
      {!isLoggedIn && showSuccessPopup && (
        <div style={styles.failurePopup}>
          <p style={styles.errorText}>Not a user</p>
        </div>
      )}
    </div>
  );
};
const styles = {
  container: {
    width: "300px",
    margin: "0 auto",
    textAlign: "center",
  },
  heading: {
    color: "blue",
    fontSize: "24px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
  },
  passwordContainer: {
    position: "relative",
    width: "100%",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid #ccc",
    borderRadius: "5px",
    overflow: "hidden",
    background: "white",
    boxShadow: "0 0 3px rgba(0, 0, 0, 0.2)",
    padding: "0",
    transition: "border 0.2s ease-in",
    lineHeight: "0",
    fontSize: "16px",
  },
  passwordToggle: {
    padding: "5px 10px",
    background: "#ccc",
    border: "none",
    borderLeft: "1px solid #ccc",
    cursor: "pointer",
  },
  button: {
    backgroundColor: "green",
    color: "white",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
  },
  successPopup: {
    position: "fixed",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "green",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    zIndex: 1000,
  },
  failurePopup: {
    position: "fixed",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "red",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    zIndex: 1000,
  },
  successText: {
    color: "white",
  },
  errorText: {
    color: "white",
  },
  viewButton: {
    backgroundColor: "blue",
    color: "white",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
  },
};

export default User;
