import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { getBfpF, getBfpM } from "../helpers/getBfp";
import { ResultsBfp } from "./ResultsBfp";
import HealthLogo from "../assets/img/health-logo.svg";
import More from "../assets/img/more.svg";

export const CalculatorBfp = () => {

    const [formState, setFormState] = useState(false);
    const [bfp, setBfp] = useState("");
    const [genere, setGenere] = useState("");
    
    return (
        <div className='app__main-container'>
            <header className="app__head">
                <div>
                    <img className="app__img-logo" src={HealthLogo} alt="health" />
                    <h3>Health Overview</h3>
                </div>
                <img className="app__img-more" src={More} alt="more" />
            </header>
            <div className="app__section-container">
                <div className='app__form-container'>
                    <div className="app__description">
                        <h4>Calculadora de Grasa <br /> Corporal</h4>
                        <p>El método de la Marina de Estados Unidos (US Navy Method) ofrece una manera sencilla de calcular un aproximado del porcentaje del tejido adiposo en el cuerpo de una persona.</p>
                        <p>Los valores requeridos por la fórmula son las siguientes:</p>
                    </div>
                    <Formik
                        initialValues={{
                            genere: '',
                            height: '',
                            weight: '',
                            waist: '',
                            hip: '',
                            neck: '',
                        }}
                        validate={(values) => {
                            const errors = {};
                            if (!values.genere) {
                                errors.genere = 'Por favor seleccione un género';
                            }
                            if (!values.height) {
                                errors.height = 'Por favor ingrese su altura';
                            } else if (values.height < 0) {
                                errors.height = 'Por favor ingrese una altura mayor a 0';
                            }
                            if (!values.weight) {
                                errors.weight = 'Por favor ingrese su peso';
                            } else if (values.weight < 0) {
                                errors.weight = 'Por favor ingrese un peso mayor a 0';
                            }
                            if (!values.waist) {
                                errors.waist = 'Por favor ingrese su cintura';
                            } else if (values.waist < 0) {
                                errors.waist = 'Por favor ingrese una cintura mayor a 0';
                            }
                            if (values.genere === "female") {
                                if (!values.hip) {
                                    errors.hip = 'Por favor ingrese su cadera';
                                } else if (values.hip < 0) {
                                    errors.hip = 'Por favor ingrese una cadera mayor a 0';
                                }
                            }
                            if (!values.neck) {
                                errors.neck = 'Por favor ingrese su cuello';
                            } else if (values.neck < 0) {
                                errors.neck = 'Por favor ingrese un cuello mayor a 0';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { resetForm }) => {
                            setFormState(true);
                            setGenere(values.genere);
                            resetForm();
                            if (values.genere === "male") {
                                const bfp = getBfpM(values.waist, values.neck, values.height);
                                console.log(typeof(bfp))
                                setBfp(bfp);
                            } else {
                                const bfp = getBfpF(values.waist, values.neck, values.height, values.hip);
                                setBfp(bfp);
                            }
                        }}
                    >
                        {({ errors, values, isValid }) => (
                            <Form className='app__form'>
                                <div className="app__input-radio">
                                    <label htmlFor="genere" >Género</label>
                                    <div>
                                        <Field type="radio" id="genere" name="genere" value="male" /> Hombre
                                        <Field type="radio" id="genere" name="genere" value="female" /> Mujer
                                    </div>
                                    <ErrorMessage name="genere" component={() => (<div> {errors.genere} </div>)} />
                                </div>
                                <div>
                                    <label htmlFor="height" >Altura (cm)</label>
                                    <Field
                                        className="app__input"
                                        type="number"
                                        placeholder='Escribe tu altura'
                                        id="height"
                                        name="height"
                                    />
                                    <ErrorMessage name="height" component={() => (<div> {errors.height} </div>)} />
                                </div>
                                <div>
                                    <label htmlFor="weight" >Peso (kg)</label>
                                    <Field
                                        className="app__input"
                                        type="number"
                                        placeholder='Escribe tu peso'
                                        id="weight"
                                        name="weight"
                                    />
                                    <ErrorMessage name="weight" component={() => (<div> {errors.weight} </div>)} />
                                </div>
                                <div>
                                    <label htmlFor="waist" >Cintura (cm)</label>
                                    <Field
                                        className="app__input"
                                        type="number"
                                        placeholder='Medida de tu cintura'
                                        id="waist"
                                        name="waist"
                                    />
                                    <ErrorMessage name="waist" component={() => (<div> {errors.waist} </div>)} />
                                </div>
                                {
                                    values.genere === "female" ? (
                                        <div>
                                            <label htmlFor="hip" >Cadera (cm)</label>
                                            <Field
                                                className="app__input"
                                                type="number"
                                                placeholder='Medida de tu cadera'
                                                id="hip"
                                                name="hip"
                                            />
                                            <ErrorMessage name="hip" component={() => (<div> {errors.hip} </div>)} />
                                        </div>
                                    ) : null
                                }
                                <div>
                                    <label htmlFor="neck" >Cuello (cm)</label>
                                    <Field
                                        className="app__input"
                                        type="number"
                                        placeholder='Medida de tu cuello'
                                        id="neck"
                                        name="neck"
                                    />
                                    <ErrorMessage name="neck" component={() => (<div> {errors.neck} </div>)} />
                                </div>
                                <div className="app__button-container">
                                    <button className="app__button-submit" disabled={isValid === false || values.genere === "" ? true : false} type="submit">Calcular</button>
                                    <button className="app__button-reset" type="reset">Limpiar</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
                {
                    formState && <ResultsBfp bfp={bfp} genere={genere} />
                }
            </div>
        </div>
    )
}
