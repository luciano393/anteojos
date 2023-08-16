import React from 'react';
import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import apiServer from '../services/server';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/AuthReducer';

const Login = () => {
    const dispatch = useDispatch();
    const history = useNavigate();

    const validationSchema = Yup.object({
      email: Yup.string().email("Formato del email invalido").required("Required"),
      password: Yup.string().required("Required").min(6, "Mínimo 6 caracteres")
    })

    const initialValues = {
      email: "",
      password: ""
    }

    const handleSubmit = async (values) => {
      const dataUser = {
        email: values.email,
        password: values.password
      }
      await apiServer.post("http://localhost:9000/users/authenticate", dataUser)
              .then(async (res) => {
                const { data, message } = res.data
                const { token } = data
                console.log(data)
                if(message === "Login Successful.") {
                  window.alert("Haz iniciado sesión con exito!")
                  localStorage.setItem("token", token)
                  dispatch(login(data))
                  history('/')
                }
              })
              .catch((e) => {
                console.log(e)
              })
    }

    return (
      <div className='form-wrapper'>
          <h1>INGRESAR</h1>
          <Formik
            initialValues={initialValues}
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
              <button type='submit' disabled={isSubmitting} className='btn-form'>
                INICIAR SESIÓN
              </button>
              <p>¿No tenes cuenta? <Link to={'/register'} className='link'>Crear cuenta</Link></p>
            </form>
          )} 
          </Formik>
      </div>
    )
}

export default Login