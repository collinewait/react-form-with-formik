import React from 'react';
import { withFormik } from 'formik';
import Yup from 'yup';

function App() {
  return (
    <div >
      <input type="email" name="email" placeHolder="Email" />
    </div>
  );
}

export default withFormik({

})(App);
