export const isMatch = (value: any, regex: RegExp, message: string) => {
    const isValid = regex.test(value.toString());
    return isValid || message;
}