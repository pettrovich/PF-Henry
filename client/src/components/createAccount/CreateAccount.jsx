import React from 'react';
import {useDispatch} from "react-redux";
import {addUserDb} from '../../redux/actions/createUsers'
import {Formik, Form, Field} from 'formik'
import './CreateAccount.css'
const CreateAccount = () => {
    const dispatch = useDispatch();
    return (
        <div className="div-container-form">
            <Formik
                initialValues={{
                    name: '',
                    lastName: '',
                    dni: '',
                    email: '',
                    celphone: '',
                    username: '',
                    password: '',
                    address: '',
                    number: '',
                    zipCode:'',
                    province: '',
                    location: '',
                    apartment: '',
                    description: ''
                }}
                validate={(valores) => {
                    let errores = {}
                    if (!valores.name) {
                        errores.name = 'Por favor ingresa un nombre'
                    }
                    if (!valores.lastName){
                        errores.lastName = 'Por favor ingresa el Apellido'
                    }
                    if (!valores.dni){
                        errores.dni = 'Por favor ingresa el dni'
                    }
                    if (!valores.email){
                        errores.email = 'Por favor ingresa el email'
                    }
                    if (!valores.celphone){
                        errores.celphone = 'Por favor ingresa su numero de celular'
                    }
                    if (!valores.username){
                        errores.username = 'Por favor ingresa un alias'
                    }
                    if (!valores.password){
                        errores.password = 'Por favor ingresa una contraseña'
                    }
                    if (!valores.address){
                        errores.address = 'Por favor ingresa una Direccion'
                    }
                    if (!valores.number){
                        errores.number = 'Por favor ingresa un Numero'
                    }
                    if (!valores.zipCode){
                        errores.zipCode = 'Por favor ingresa el Codigo Postal'
                    }
                    if (!valores.province){
                        errores.province = 'Por favor ingresa la Ciudad'
                    }
                    if (!valores.location){
                        errores.location = 'Por favor ingresa la Ubicacion'
                    }
                    if (!valores.apartment){
                        errores.apartment = 'Por favor ingresa Apartamento'
                    }
                    if (!valores.description){
                        errores.description = 'Por favor ingresa una Description'
                    }
                    return errores;
                }}
                onSubmit={(valores, {resetForm}) => {
                    dispatch(addUserDb(valores))
                    alert('Su Registro ha sido exitoso')
                    resetForm();
                }}
            >
                {({values, touched, errors, handleChange,handleBlur}) => (
                    <main>
                        <Form className="form" >
                            <div className="form-grup">
                                <label htmlFor="name" className="form-label">Nombres: </label>
                                <div className="form-input-grup">
                                    <Field className="form-input"
                                           type="text" name="name"
                                           placeholder="ingrese Nombre"
                                           id="name"
                                    />
                                </div>
                                {touched.name && errors.name && <p className="form-p-error"> {errors.name}</p>}
                            </div>
                            <div className="form-grup">
                                <label htmlFor="lastName" className="form-label">Apellido: </label>
                                <div className="form-input-grup">
                                    <Field className="form-input"
                                           type="text"
                                           name="lastName"
                                           placeholder="ingrese Apellido"
                                           id="lastName"
                                    />
                                </div>
                                {touched.lastName && errors.lastName && <p className="form-p-error"> {errors.lastName}</p>}
                            </div>
                            <div className="form-grup">
                                <label htmlFor="dni" className="form-label">Dni: </label>
                                <div className="form-input-grup">
                                    <Field className="form-input"
                                           type="text"
                                           name="dni"
                                           placeholder="ingrese Apellido"
                                           id="dni"
                                    />
                                </div>
                                {touched.dni && errors.dni && <p className="form-p-error"> {errors.dni}</p>}
                            </div>
                            <div className="form-grup">
                                <label htmlFor="email" className="form-label">Email: </label>
                                <div className="form-input-grup">
                                    <Field className="form-input"
                                           type="email"
                                           name="email"
                                           placeholder="correo@gmail.com"
                                           id="email"
                                    />
                                </div>
                                {touched.email && errors.email && <p className="form-p-error"> {errors.email}</p>}
                            </div>
                            <div className="form-grup">
                                <label htmlFor="celphone" className="form-label">Telefono: </label>
                                <div className="form-input-grup">
                                    <Field className="form-input"
                                           type="text"
                                           name="celphone"
                                           placeholder="ingrese Telefono"
                                           id="celphone"
                                    />
                                </div>
                                {touched.celphone && errors.celphone && <p className="form-p-error"> {errors.celphone}</p>}
                            </div>
                            <div className="form-grup">
                                <label htmlFor="username" className="form-label">Username: </label>
                                <div className="form-input-grup">
                                    <Field className="form-input"
                                           type="text"
                                           name="username"
                                           placeholder="ingrese Username"
                                           id="username"
                                    />
                                </div>
                                {touched.username && errors.username && <p className="form-p-error"> {errors.username}</p>}
                            </div>
                            <div className="form-grup">
                                <label htmlFor="password" className="form-label">Contraseña: </label>
                                <div className="form-input-grup">
                                    <Field className="form-input"
                                           type="password"
                                           name="password"
                                           placeholder="ingrese Contraseña"
                                           id="password"
                                    />
                                </div>
                                {touched.password && errors.password && <p className="form-p-error"> {errors.password}</p>}
                            </div>
                            <div className="form-grup" >
                                <label htmlFor="address" className="form-label">Direccion: </label>
                                <div className="form-input-grup">
                                    <Field className="form-input"
                                           type="text" name="address"
                                           placeholder="ingrese la Direccion"
                                           id="address"
                                    />
                                </div>
                                {touched.address && errors.address && <p className="form-p-error"> {errors.address}</p>}
                            </div>
                            <div className="form-grup">
                                <label htmlFor="number" className="form-label">Numero: </label>
                                <div className="form-input-grup">
                                    <Field className="form-input"
                                           type="text" name="number"
                                           placeholder="ingrese el Numero"
                                           id="number"
                                    />
                                </div>
                                {touched.number && errors.number && <p className="form-p-error"> {errors.number}</p>}
                            </div>
                            <div className="form-grup">
                                <label htmlFor="zipCode" className="form-label">Codigo Postal: </label>
                                <div className="form-input-grup">
                                    <Field className="form-input"
                                           type="text" name="zipCode"
                                           placeholder="Codigo Postal"
                                           id="zipCode"
                                    />
                                </div>
                                {touched.zipCode && errors.zipCode && <p className="form-p-error"> {errors.zipCode}</p>}
                            </div>
                            <div className="form-grup">
                                <label htmlFor="province" className="form-label">Provincia: </label>
                                <div className="form-input-grup">
                                    <Field className="form-input"
                                           type="text" name="province"
                                           placeholder="ingrese la provincia"
                                           id="province"
                                    />
                                </div>
                                {touched.province && errors.province && <p className="form-p-error"> {errors.province}</p>}
                            </div>
                            <div className="form-grup">
                                <label htmlFor="location" className="form-label">Ubicacion: </label>
                                <div className="form-input-grup">
                                    <Field className="form-input"
                                           type="text" name="location"
                                           placeholder="ingrese la Ubicacion"
                                           id="location"
                                    />
                                </div>
                                {touched.location && errors.location && <p className="form-p-error"> {errors.location}</p>}
                            </div>
                            <div className="form-grup">
                                <label htmlFor="apartment" className="form-label">Apartamento: </label>
                                <div className="form-input-grup">
                                    <Field className="form-input"
                                           type="text" name="apartment"
                                           placeholder="ingrese el numero Apartamento"
                                           id="apartment"
                                    />
                                </div>
                                {touched.apartment && errors.apartment && <p className="form-p-error"> {errors.apartment}</p>}
                            </div>
                            <div className="form-grup">
                                <label htmlFor="description" className="form-label">Description: </label>
                                <div className="form-input-grup">
                                    <Field className="form-input"
                                           type="text" name="description"
                                           placeholder="ingrese la Descripcion"
                                           id="description"
                                    />
                                </div>
                                {touched.description && errors.description && <p className="form-p-error"> {errors.description}</p>}
                            </div>
                            <button type="submit">Registrar</button>
                        </Form>

                    </main>
                )}

            </Formik>
        </div>
    );
};

export default CreateAccount;