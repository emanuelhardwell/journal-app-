import React from "react";
import { Link } from "react-router-dom";
import validator from "validator";

import { useForm } from "../../hooks/useForm";

export const RegisterScreen = () => {
  const [formValues, handleInputChange] = useForm({
    name: "emanuel",
    email: "emanuel@gmail.com",
    password: "emanuel100",
    password2: "emanuel100",
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(name, email, password, password2);

    if (isFormValid()) {
      console.log("Formulario correcto");
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      console.log("Ingresa un nombre");
      return false;
    } else if (!validator.isEmail(email)) {
      console.log("Email invalido");
      return false;
    } else if (password !== password2 || password.length < 5) {
      console.log(
        "Las contraseñas deben ser iguales y debe de tener mas de 5 caracteres"
      );
      return false;
    }

    return true;
  };

  // RETURN
  return (
    <>
      <h3 className="auth__title">Register</h3>

      <div className="auth__alert-error">Hola mundo</div>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />

        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          className="auth__input"
          value={password2}
          onChange={handleInputChange}
        />

        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>

        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
};
