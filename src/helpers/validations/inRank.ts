export const inRank = (value: number, min: number, max: number) => { 
    const isValid = value >= min && value <= max;
    return isValid || `No se encuentra entre ${min} - ${max}`;
}