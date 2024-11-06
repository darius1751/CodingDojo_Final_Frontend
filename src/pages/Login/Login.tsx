import styles from './login.module.css';
import { FormEvent, useState } from "react"
import { useForm } from "../../hooks/useForm"
import { Field } from "../../components/Field/Field";
import { loginUser } from '../../services/loginUser';
import { useAppDispatch } from '../../context/hooks';
import { setUser } from '../../context/slice';
import { isPassword, isEmail } from '../../helpers/validations';
import { useNavigate } from 'react-router-dom';
const initialLogin = {
    email: "",
    password: ""
}
export const Login = () => {
    const { form, handleChange } = useForm(initialLogin);
    const { email, password } = form;
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isEmail(email) || !isPassword(password))
            return;
        loginUser(form).subscribe({
            next({ response }) {
                dispatch(setUser(response));
                navigate('/dashboard/movies');
            },
            error(_err) {
                setError(`Credenciales incorrectas`);
            },
        })
    }
    return (
        <div className={`page`}>

            <form onSubmit={handleSubmit} className={`form`}>
                <h2>Login</h2>
                <Field
                    label="Correo"
                    name="email"
                    handleChange={handleChange}
                    value={email}
                    type="email"
                    required
                    validation={isEmail}
                />
                <Field
                    label="Contraseña"
                    name="password"
                    handleChange={handleChange}
                    value={password}
                    type="password"
                    required
                    validation={isPassword}
                />
                <small className={styles.error}>{error}</small>
                <input value={"Login"} type='submit' className={`btn btn-primary ${styles.btnLogin}`} />
            </form>
        </div>

    )
}