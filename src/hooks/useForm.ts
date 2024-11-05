import { ChangeEvent, useState } from "react"
/**
 * Este **Hook** se encarga de manejar la informacion de todos los campos del formulario segun el valor inicial
 * Tener en cuenta que: los name deben ser iguales a los nombres de cada campo initialForm para que funcione la sincronizacion
 * @argument initialForm
 * @example
 * const initialState = { name: '', age: 0 }
 * const { form, handleChange } = useForm(initialState);
 * @returns form, setForm, handleChange
*/
export const useForm = <T>(initialForm: T) => {
    const [form, setForm] = useState(initialForm);
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    return {
        form,
        setForm,
        handleChange
    }
}