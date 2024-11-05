export const isName = (name: string) =>{
    const isValid = name.trim().length >= 3
    return isValid || `Debe tener 3 o mas caracteres`
}