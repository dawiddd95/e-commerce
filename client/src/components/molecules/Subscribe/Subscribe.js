import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button } from 'components/atoms/Button/Button';
import { Input } from 'components/atoms/Input/Input';
import * as S from './StyledSubscribe';

const Subscribe = () => {
    // useState WSZYSTKIE STANY JEŚLI POTRZEBNE
    // moglibyśmy tutaj też zdefiniować funkcję, zamiast pisać na żywca wszystko w ciele onSubmit={}

    return (
        <>
            <Formik
                initialValues={{ email: '' }}
                onSubmit={values => {
                    // Tutaj logika do fetcha
                    // axios.post, zmiany stanów etc.  
                    return values;
                }}
                // Walidacja formika z Yup
                validationSchema={Yup.object().shape({
                    email: Yup
                       .string()
                       .email()
                       .required('Email is required'),
                 })}
            >
            {({ handleSubmit }) => (
                // Jest to <Form> tylko, że wsytylowane pod nasze potrzeby
                <S.StyledForm onSubmit={handleSubmit}>
                    {/* Jeśli mamy swoje inputy to nie musimy wstawiać Field */}
                    <Input
                        type="text"
                        // name musi być taki sam jak nazwa pola z initialValues
                        name="email"
                        placeholder="Your email address"
                        width='90%'
                        footer
                    />
                    {/* Do atomów możemy sobie propsy dopisywać swobodnie */}
                    <Button 
                        type="submit" 
                        // Propsy SC, które uwzględniłem w stylach atomu
                        borderRadius='22px'
                        uppercase 
                    >
                        subscribe
                    </Button>
                </S.StyledForm>
            )}
            </Formik>
        </>
    );
}
 
export default Subscribe;