import styles from './register.module.css';
import { FormEvent } from "react"
import { Field } from "../../components/Field/Field"
import { useForm } from '../../hooks/useForm';
import { createUser } from '../../services/createUser';
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
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
                />
                <Field
                    label="Apellido"
                    name="lastname"
                    handleChange={handleChange}
                    value={lastname}
                    type="text"
                    required
                />
                <Field
                    label="Correo"
                    name="email"
                    handleChange={handleChange}
                    value={email}
                    type="email"
                    required
                    validation={(value) => {
                        const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(value.toString());
                        return isEmail || `${value} is not valid email`;
                    }}
                />
                <Field
                    label="Contraseña"
                    name="password"
                    handleChange={handleChange}
                    value={password}
                    type="password"
                    required
                />
                <Field
                    label="Confirmar contraseña"
                    name="confirmPassword"
                    handleChange={handleChange}
                    value={confirmPassword}
                    type="password"
                    required
                />
                <input value={"Registrarse"} type='submit' className={`btn btn-primary ${styles.btnRegister}`} />
            </form>
        </div>
    )
}