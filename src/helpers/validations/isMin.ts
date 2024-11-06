export const isMin = (value: string, min: number) =>{
    const isValid = value.trim().length >= min
    return isValid || `Debe tener ${min} o mas caracteres`
}