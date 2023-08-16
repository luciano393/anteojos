import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import apiServer from '../services/server';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/AuthReducer';

const Register = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Formato del email invalido").required("Required"),
    phone: Yup.number()
            .typeError("No se ve como un numero de telefono")
            .positive("El numero no puede ser negativo")
            .integer("El numero no puede ser decimal")
            .min(8, "El numero no puede tener menos de 8 digitos"),
    password: Yup.string().required("Required").min(6, "Mínimo 6 caracteres"),
    passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null])
  })

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  }

  const handleSubmit = async (values) => {
    const dataUser = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      password: values.password
    }
    await apiServer.post("http://localhost:9000/users/register", dataUser)
      .then((res) => {
        const { message, data } = res.data
        const { token } = data
        if(message === "User created successfully!") {
          window.alert("Te haz registrado correctamente")
          localStorage.setItem("token", token)
          dispatch(login())
          setTimeout(() => {
            history('/')
          }, 3000)
        } else {
          window.alert("El correo electronico y/o la contraseña son incorrectas")
        }
      })
      .catch((e) => {
      console.log(e)
      })
  }

  return (
    <div className='form-wrapper'>
        <h1>REGISTRO</h1>
        <Formik
          initialValues= {initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
         {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
         }) => (
          <form onSubmit={handleSubmit} className='form'>
            <div className='box-input'>
              <p>NOMBRE</p>
              <input 
                type="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder='ej: Maria Perez'
                className='input'
              />
            </div>
            <div className='box-input'>
              <p>EMAIL</p>
              <input 
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder='ej: tunombre@email.com'
                className='input'
              />
            </div>
            {errors.email && touched.email && errors.email}
            <div className='box-input'>
              <p>TELEFONO (OPCIONAL)</p>
              <input 
                type="number"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                placeholder='ej: 1122334456'
                className='input'
              />
            </div>
            <div className='box-input'>
              <p>CONTRASEÑA</p>
              <input 
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className='input'
              />
            </div>
            {errors.password && touched.password && errors.password}
            <div className='box-input'>
              <p>CONFIRMAR CONTRASEÑA</p>
              <input 
                type="password"
                name="confirmPassword"
                className='input'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
            </div>
            {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
            <button type='submit' disabled={isSubmitting} className='btn-form'>
              INICIAR SESIÓN
            </button>
            <p>¿Ya tenes cuenta? <Link to={'/login'} className='link'>Ingresa a tu cuenta</Link></p>
          </form>
         )} 
        </Formik>
    </div>
  )
}

export default Register