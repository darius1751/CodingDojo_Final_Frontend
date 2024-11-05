import styles from './login.module.css';
import { FormEvent } from "react"
import { useForm } from "../../hooks/useForm"
import { Field } from "../../components/Field/Field";
import { loginUser } from '../../services/loginUser';
import { useAppDispatch } from '../../context/hooks';
import { setUser } from '../../context/slice';
// import { useNavigate } from 'react-router-dom';
const initialLogin = {
    email: "",
    password: ""
}
export const Login = () => {
    const { form, handleChange } = useForm(initialLogin);
    const { email, password } = form;
    const dispatch = useAppDispatch();
    // const navigate = useNavigate();
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        loginUser(form).subscribe({
            next({ response }) {
                dispatch(setUser(response));
                // navigate('/dashboard/tasks');
            },
            error(err) {
                alert(`Error: ${err}`)
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
                    validation={(value) => { 
                        const isValid = value.toString().trim().length >= 8
                        return isValid || `Debe tener 8 o mas caracteres`
                    }}
                />
                <input value={"Login"} type='submit' className={`btn btn-primary ${styles.btnLogin}`} />
            </form>
        </div>

    )
}