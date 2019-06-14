import React from "react";
import { withFormik } from "formik";
import Yup from "yup";

function App({ values }) {
  return (
    <div>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
      />
    </div>
  );
}

export default withFormik({
  mapPropsToValues() {
    return {
      email: "test email"
    };
  }
})(App);
