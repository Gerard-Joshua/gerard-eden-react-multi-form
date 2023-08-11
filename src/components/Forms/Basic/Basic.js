import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { FormContext } from "../../../App";
import * as yup from "yup";

function Basic() {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const renderError = (message) => (
    <p className="text-red-600">{message}</p>
  );

  const ValidationSchema = yup.object().shape({
    full_name: yup.string().required("Full name is required"),
    display_name: yup.string().required("Display name is required"),
  });

  return (
    <Formik
      initialValues={{
        full_name: "",
        display_name: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        const data = { ...formData, ...values };
        setFormData(data);
        setActiveStepIndex(activeStepIndex + 1);
      }}
    >
      <Form className="flex flex-col justify-center items-center py-3">
        <div className="text-3xl font-medium self-center mb-2">Welcome! First things first...</div>
        <div className="text-1xl text-gray-400 font-medium text-gray-500 self-center mb-2">You can always change them later.</div>
        <div className="w-full flex flex-col items-start mb-2 pt-9">
          <label className="font-medium text-gray-600 pb-2">Full Name</label>
          <Field
            name="full_name"
            className="w-full text-1xl text-gray-600 font-medium rounded-md border-2 border-gray-200 p-3"
            placeholder="Enter Full Name"
          />
        </div>
        <ErrorMessage name="full_name" render={renderError} />
        <div className="w-full flex flex-col items-start mb-2 pt-2">
          <label className="font-medium text-gray-600 pb-2">Display Name</label>
          <Field
            name="display_name"
            className="w-full text-1xl text-gray-600 font-medium rounded-md border-2 border-gray-200 p-3"
            placeholder="Enter Display Name"
          />
        </div>
        <ErrorMessage name="display_name" render={renderError} />
        <button
          className="w-full rounded-md bg-indigo-500 font-small text-white my-4 p-3"
          type="submit"
        >
          Create Workspace
        </button>
      </Form>
    </Formik>
  );
}

export default Basic;
