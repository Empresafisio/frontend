import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LoginPage = () => {
  return (
    <>
      <Header />
      <main className="login-page">
        <h1>Welcome Back!</h1>
        <form>
          <label>
            Email:
            <input type="email" placeholder="Enter your email" />
          </label>
          <label>
            Password:
            <input type="password" placeholder="Enter your password" />
          </label>
          <button type="submit">Login</button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;
