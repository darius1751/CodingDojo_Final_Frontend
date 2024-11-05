export const isEmail = (value: string) => {
    const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(value.toString());
    return isEmail || `${value} is not valid email`;
}