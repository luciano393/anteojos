import React from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='form-wrapper'>
        <h1>REGISTRO</h1>
        <Formik
          initialValues={{ name: '', phone: '', email: '', password: ''}}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Requerid';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
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
            <div className='box-input'>
              <p>CONFIRMAR CONTRASEÑA</p>
              <input 
                type="password"
                name="confirm password"
                className='input'
              />
            </div>
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