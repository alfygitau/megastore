import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { register } from "../../features/user/userSlice";

const Register = () => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { fullName, username, email, password, confirmPassword } = userInfo;

  const handleChange = (e) => {
    setUserInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return <p>Passwords do not match</p>;
    } else {
      const user = {
        name: fullName,
        username,
        email,
        password,
      };
      console.log(user)
      dispatch(register(user));
    }
  };

  return (
    <Container>
      <Wrapper>
        <div className="section">
          <section className="heading">
            <img
              src="https://seeklogo.com/images/W/walmart-spark-logo-57DC35C86C-seeklogo.com.png"
              alt="logo"
              height="40px"
              width="40px"
            />
            <p>Welcome to MegaMart</p>
          </section>
          <section className="form">
            <form onSubmit={handleRegister}>
              <div className="form-group">
                <label htmlFor="fullName">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="fullName"
                  id="fullName"
                  value={fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  name="username"
                  id="username"
                  value={username}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                />
              </div>
              <span>
                By clicking Create Account, you acknowledge you have read and
                agreed to our &nbsp;
                <Link to="/terms">Terms of Use and Privacy Policy.</Link>
              </span>
              <button type="submit" onClick={handleRegister}>
                Register
              </button>
              <p>
                Already have an account? <Link to="/login">Sign In</Link>
              </p>
            </form>
          </section>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Wrapper = styled.div`
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  /* border: 1px solid black; */

  .heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }
  .section {
    width: 80%;
    height: fit-content;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    .form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      form {
        display: flex;
        flex-direction: column;
        width: 60%;
        button {
          padding: 7px;
          background-color: rgb(0, 113, 220);
          color: white;
          border: none;
          outline: none;
          font-size: 18px;
          font-family: "BOGLEREGULAR";
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          margin-top: 10px;
          margin-bottom: 10px;
        }
        label {
          margin-bottom: 10px;
        }
        input {
          margin-bottom: 10px;
          padding: 5px;
          &::placeholder {
            font-family: "BOGLEREGULAR";
          }
        }
        a {
          color: black;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          /* border: 1px solid black; */
        }
      }
    }
  }
`;
