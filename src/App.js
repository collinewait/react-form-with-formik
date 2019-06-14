import React from "react";
import { withFormik, Form } from "formik";
import Yup from "yup";

function App({ values, handleChange }) {
  return (
    <Form>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
      />
      <button>Submit</button>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },
  handleSubmit(values) {
    console.log(values);
  }
})(App);
