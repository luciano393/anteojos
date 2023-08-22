import { Field, Formik } from 'formik'
import React, {  useState } from 'react'


const AddProduct = () => {
    const [ image, setImage ] = useState()

    const initialValues = {
        model: "",
        category: "",
        price: "",
        image: []
    }

    const onChange = (o) => {
        setImage(URL.createObjectURL(o.target.files[0]));
    }

    const handleSubmit = async (values) => {
        
        try {
            console.log()
        } catch(e) {
            console.log(e)
        }
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
                    {(image) ? <img src={image} alt='' className='img'/> : <></>}
                    <Field type="text" name="model" placeholder="Ingrese el modelo" className="input" value={values.model}/>
                    <Field as="select" name="category" className="select" value={values.category}>
                        <option value="category-1">Anteojos de sol</option>
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