import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

import style from "./ContactForm.module.css";

const validationForm = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Too short name")
    .max(50, "Max 8 symbols")
    .required("This field is required"),
  number: Yup.string()
    .trim()
    .min(3, "Too short number")
    .max(50, "Max 12 symbols")
    .required("This field is required"),
});

const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, action) => {
    dispatch(addContact(values));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationForm}
    >
      <Form className={style.form}>
        <div className={style.inputContainer}>
          <label htmlFor={nameId}>Name</label>
          <Field className={style.input} type="text" name="name" id={nameId} />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor={numberId}>Number</label>
          <Field
            className={style.input}
            type="text"
            name="number"
            id={numberId}
          />
        </div>
        <button className={style.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
