import React from 'react'

import { Formik } from 'formik'

import './styles.css'

interface sellData {
    name: String
    birthDate: String
    email: String
    cep: number
    number: Number
    cellphone: Number
}

const FormSell: React.FC<{}> = () => {
    const initialValues: sellData = {
        name: '',
        birthDate: '00-00-0000',
        email: '',
        cep: 0,
        number: 0,
        cellphone: 0
    }

    function handleSubmit() {
        return alert(JSON.stringify(initialValues, null, 2))
    }

    return (
        <div id='formSell-container' className='container fade-in'>
            <header>
                <h1>Form sell</h1>
            </header>

            <section>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                >

                    <button type='submit'>Buy</button>
                </Formik>
            </section>

            <footer>
                <h3>Make with love by Fabrício</h3>
            </footer>
        </div>
    )
}

export default FormSell;