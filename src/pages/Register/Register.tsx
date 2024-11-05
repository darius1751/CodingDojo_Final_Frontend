import styles from './register.module.css';
import { FormEvent } from "react"
import { Field } from "../../components/Field/Field"
import { useForm } from '../../hooks/useForm';
import { createUser } from '../../services/createUser';
import { isEmail, isPassword } from '../../helpers/validations';
import { isName } from '../../helpers/validations/isName';
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
    const isEqualPassword = (confirmPassword: string) => {
        const isValid = password.trim() === confirmPassword.trim();
        return isValid || `Las contraseñas no coinciden`

    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isName(name) && isName(lastname) && isEmail(email) && isPassword(password) && isEqualPassword(confirmPassword))
            createUser({
                name,
                lastname,
                credentials: {
                    email,
                    password
                }
            }).subscribe({
                next(_value) {
                },
                error(_err) {
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
                    validation={isName}
                    initialError='Por favor proporciona tu nombre'
                />
                <Field
                    label="Apellido"
                    name="lastname"
                    handleChange={handleChange}
                    value={lastname}
                    type="text"
                    required
                    validation={isName}
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