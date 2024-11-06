import styles from './register.module.css';
import { FormEvent } from "react"
import { Field } from "../../components/Field/Field"
import { useForm } from '../../hooks/useForm';
import { createUser } from '../../services/createUser';
import { isEmail, isPassword } from '../../helpers/validations';
import { isMin } from '../../helpers/validations/isMin';
import { useNavigate } from 'react-router-dom';
const initialRegister = {
    name: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
}
export const Register = () => {
    const { form, handleChange } = useForm(initialRegister);
    const { name, lastname, email, password, confirmPassword } = form;
    const navigate = useNavigate();
    const isEqualPassword = (confirmPassword: string) => {
        const isValid = password.trim() === confirmPassword.trim();
        return isValid || `Las contraseñas no coinciden`

    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isMin(name, 3) && isMin(lastname, 3) && isEmail(email) && isPassword(password) && isEqualPassword(confirmPassword))
            createUser({
                name: name.trim(),
                lastname: lastname.trim(),
                credentials: {
                    email: email.trim(),
                    password: password.trim()
                }
            }).subscribe({
                next(_value) {
                    console.log(_value)
                    navigate('/login');
                },
                error(_err) {
                    console.warn(_err);
                },
            })
    }
    return (
        <div className={`page`}>
            <form onSubmit={handleSubmit} className={`form`}>
                <h2 >Registro</h2>
                <Field
                    label="Nombre"
                    name="name"
                    handleChange={handleChange}
                    value={name}
                    type="text"
                    required
                    validation={(value) => isMin(value, 3)}
                    initialError='Por favor proporciona tu nombre'
                />
                <Field
                    label="Apellido"
                    name="lastname"
                    handleChange={handleChange}
                    value={lastname}
                    type="text"
                    required
                    validation={(value) => isMin(value, 3)}
                    initialError='Por favor proporciona tu apellido'
                />
                <Field
                    label="Correo"
                    name="email"
                    handleChange={handleChange}
                    value={email}
                    type="email"
                    required
                    validation={isEmail}
                    initialError='Por favor ingresa un correo válido'
                />
                <Field
                    label="Contraseña"
                    name="password"
                    handleChange={handleChange}
                    value={password}
                    type="password"
                    required
                    validation={isPassword}
                    initialError='La contraseña necesita tener al menos 8 caracteres'
                />
                <Field
                    label="Confirmar contraseña"
                    name="confirmPassword"
                    handleChange={handleChange}
                    value={confirmPassword}
                    type="password"
                    required
                    validation={isEqualPassword}
                    initialError='Las contraseñas no coinciden'
                />
                <input value={"Registrarse"} type='submit' className={`btn btn-primary ${styles.btnRegister}`} />
            </form>
        </div>
    )
}