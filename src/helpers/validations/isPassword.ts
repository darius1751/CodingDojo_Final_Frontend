export const isPassword = (password: string) => {
    const isValid = password.trim().length >= 8
    return isValid || `Debe tener 8 o mas caracteres`
}