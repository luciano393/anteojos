import { Field, Formik } from 'formik'
import React, { useState } from 'react'
import apiServer from '../../services/server'
import getToken from '../../helpers/UseGetToken'
import { Alert } from '../Alert'
import { useDispatch } from 'react-redux'
import { loadProducts } from '../../reducers/ProductReducer'
import getBase64 from '../../helpers/UseGetBase64'



const AddProduct = () => {
    const [ url, setUrl ] = useState()
    const [ image, setImage ] = useState()
    const dispatch = useDispatch()

    const initialValues = {
        model: "",
        category: "",
        price: "",
        image: []
    }

    const onChange = async (o) => {
        setUrl(URL.createObjectURL(o.target.files[0]));
        await getBase64(o.target.files[0])
            .then(resolve => setImage(resolve))
            .catch(error => console.log(error))
    }

    const handleSubmit = async (values) => {
        values.image = image
        await apiServer.post('/product/create', values, getToken())
            .then(res => {
                Alert("Exito!", "El producto se ha cargado correctamente!", "success")
                dispatch(loadProducts())
            })    
            .catch(e => console.log(e))
    }

    
    return (
        <div className='container'>
            <h2>Add new product</h2>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
            {({
                values,
                isSubmitting
            }) => (
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit(values)}} className='form'>
                    <label for="image">Choose file to upload</label>
                    <input
                        type="file" name="product[image]"
                        onChange={onChange}
                    />
                    {(url) ? <img src={url} alt='' className='img'/> : <></>}
                    <Field type="text" name="model" placeholder="Ingrese el modelo" className="input" value={values.model}/>
                    <Field as="select" name="category" className="select" value={values.category}>
                        <option value="category-1" selected="true" >Anteojos de sol</option>
                        <option value="category-2">Anteojos recetados</option>
                        <option value="category-3">Lentes de contacto</option>
                        <option value="category-4">Niños</option>
                    </Field>
                    <Field type="float" name="price" placeholder="Ingrese el monto" className="input" value={values.price}/>
                    <button type="submit" disabled={isSubmitting} className='btn'>Add</button>
                </form>
            )}    
            </Formik>
        </div>
    )
}

export default AddProduct