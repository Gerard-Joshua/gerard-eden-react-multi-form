import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { FormContext } from "../../../App";
import * as yup from "yup";

function Workspace() {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const renderError = (message) => (
    <p className="text-red-600">{message}</p>
  );

  const ValidationSchema = yup.object().shape({
    workspaceName: yup.string().required("Workspace name is required"),
    workspaceURL: yup.string().url().required("Workspace URL is required"),
  });

  return (
    <Formik
      initialValues={{
        workspaceName: "",
        workspaceURL: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        const data = { ...formData, ...values };
        setFormData(data);
        setActiveStepIndex(activeStepIndex + 1);
      }}
    >
      <Form className="flex flex-col justify-center items-center py-5">
        <div className="text-3xl font-medium self-center mb-2">Let's set up a home for all your work</div>
        <div className="text-1xl text-gray-400 font-medium text-gray-500 self-center mb-2">You can always create another workspace later.</div>
        <div className="w-full flex flex-col items-start mb-2 pt-9">
          <label className="font-medium text-gray-600 pb-2">Workspace Name</label>
          <Field
            name="workspaceName"
            className="w-full text-1xl text-gray-600 font-medium rounded-md border border-2 border-gray-200 p-3"
            placeholder="Enter Workspace Name"
          />
        </div>
        <ErrorMessage name="workspaceName" render={renderError} />
        <div className="w-full flex flex-col items-start mb-2 pt-2">
          <label className="font-medium text-gray-600 pb-2">Workspace URL</label>
          <Field
            name="workspaceURL"
            className="w-full text-1xl text-gray-600 font-medium rounded-md border border-2 border-gray-200 p-3"
            placeholder="http://www.eden.com"
          />
        </div>
        <ErrorMessage name="workspaceURL" render={renderError} />
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

export default Workspace;
