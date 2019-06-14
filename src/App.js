import React from "react";
import { withFormik, Form, Field } from "formik";
import Yup from "yup";

function App({ values }) {
  return (
    <Form>
      <Field type="email" name="email" placeholder="Email" />
      <Field type="password" name="password" placeholder="Password" />
      <label>
        <Field type="checkbox" name="newsletter" checked={values.newsletter} />
        Join our newsletter
      </label>
      <button>Submit</button>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues({ email, password, newsletter }) {
    return {
      email: email || "",
      password: password || "",
      newsletter: newsletter || false
    };
  },
  handleSubmit(values) {
    console.log(values);
  }
})(App);
