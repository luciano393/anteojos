import { Formik } from 'formik';
import React from 'react'
import { Alert } from '../components/Alert';
import apiServer from '../services/server';

const Contacto = () => {

  const initialValues = {
    name: '', 
    email: '',
    description: ''
  }

  const handleSubmit = async (values) => {
    await apiServer.post('email/send', values)
      .then(res => {
        Alert('Exito!','La consulta ha sido enviada correctamente', 'success')
      })
      .catch(error => console.log(error))  
  }

  return (
    <div className='contact-wrapper'>
        <Formik
          initialValues={initialValues}
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
          onSubmit={async (values, { resetForm }) => {
            await handleSubmit(values)
            resetForm()
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
            <h3>Contactenos</h3>
            <div className='box-input'>
              <input type="text" name='name' placeholder='Ingresa su nombre...' value={values.name} onChange={handleChange}
                  onBlur={handleBlur}/>
            </div>
            <div className='box-input'>
              <input type="text" name='email' placeholder='Ingresa tu email' value={values.email} onChange={handleChange}
                  onBlur={handleBlur}/>
            </div>
            {errors.email && touched.email && errors.email}
            <div className='box-input'>
              <textarea type="text" rows="10" cols="50" name='description' placeholder='Escribí su consulta' value={values.description} onChange={handleChange}
                  onBlur={handleBlur}/>
            </div>
            <button type='submit' disabled={isSubmitting} className='btn-form'>
              Enviar
            </button>
          </form>
         )} 
        </Formik>
    </div>
  )
}

export default Contacto