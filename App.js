import React, { Component } from 'react'
import { Button, View } from 'react-native'
import { compose } from 'recompose'
import { Formik } from 'formik'
import * as Yup from 'yup'
import {
  handleTextInput,
  withNextInputAutoFocusForm,
  withNextInputAutoFocusInput
} from 'react-native-formik'
import { TextField } from 'react-native-material-textfield'

import Switch from './src/Switch';

const MyInput = compose(
  handleTextInput,
  withNextInputAutoFocusInput
)(TextField);

const Form = withNextInputAutoFocusForm(View);

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("E-mail boş bırakılamaz")
    .email("Uygun bir e-posta değil"),
  password: Yup.string()
    .required("Şifre boş bırakılamaz")
    .min(2, "Şifre yetersiz"),
  firstName: Yup.string()
    .required("İsim boş bırakılamaz"),
  lastName: Yup.string()
    .required("Soyad boş bırakılamaz"),
});

export default props => (
  <Formik
    onSubmit={values => console.log(values)}
    validationSchema={validationSchema}
    render={props => {
      return (
        <Form style={{ padding: 10 }}>
          <MyInput label="E-posta" name="email" type="email" />
          <MyInput label="Şifre" name="password" type="password" />
          <MyInput label="İsim" name="firstName" type="name" />
          <MyInput label="Soyisim" name="lastName" type="name" />
          <Switch label="Şartları kabul et" name="conditionsAccepted" />
          <Button onPress={props.handleSubmit} title="KAYDET" />
        </Form>
      )
    }}
  />
);