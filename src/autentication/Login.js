import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import apiServer from '../services/server';
import { useDispatch } from 'react-redux';
import { getUserAction } from '../reducers/AuthReducer';
import { Alert } from '../components/Alert';

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
      await apiServer.post("/users/authenticate", dataUser)
              .then(async (res) => {
                const { data, message } = res.data
                const { token } = data
                if(message === "Login Successful.") {
                  Alert("Exito!","Haz iniciado sesión con exito!","success")
                  localStorage.setItem("token", token)
                  dispatch(getUserAction())
                  setTimeout(() => {
                    history('/')
                  },3000)
                }
              })
              .catch((error) => {
                if (error.response.status === 401) {
                  Alert("Oops!", "El correo electronico y/o la contraseña son incorrectas", "error")
                } else {
                  Alert("Oops!", "Hubo un error desconocido.")
                }
              }
              )
    }

    return (
      <div className='form-wrapper'>
          <header>
            <Link to={"/"} className='logo'>
              Logo
            </Link>
          </header>
          <h1>Login de usuarios</h1>
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