import { ChangeEventHandler, useId } from "react";
import styles from './field.module.css';

type Props = {
    type?: React.HTMLInputTypeAttribute | "textarea";
    name: string;
    value: string | number;
    handleChange: ChangeEventHandler;
    required?: boolean;
    label: string;
    disabled?: boolean;
    readOnly?: boolean;
    validation?: (value: string | number) => boolean | string;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    placeholder?: string;
}
export const Field = ({
    name,
    value,
    label,
    handleChange,
    validation,
    min,
    max,
    minLength,
    maxLength,
    placeholder,
    type = "text",
    required = false,
    disabled = false,
    readOnly = false,
}: Props) => {
    const id = useId();
    return (
        <div className={styles.field}>
            <label htmlFor={id} className={styles.label}>{label}</label>
            {
                type !== "textarea" ? (< input
                    id={id}
                    required={required}
                    type={type}
                    name={name}
                    value={value}
                    min={min}
                    max={max}
                    minLength={minLength}
                    maxLength={maxLength}
                    onChange={handleChange}
                    className={styles.input}
                    disabled={disabled}
                    readOnly={readOnly}
                    placeholder={placeholder}
                />)
                    :
                    (
                        <textarea
                            className={styles.textarea}
                            required={required}
                            value={value}
                            name={name}
                            onChange={handleChange}
                            id={id}
                            disabled={disabled}
                            readOnly={readOnly}
                            minLength={minLength}
                            maxLength={maxLength}
                            placeholder={placeholder}
                        >
                        </textarea>
                    )
            }
            {!!validation && (value.toString().length === 0 ? <></> : < small className={styles.error}>{validation(value)}</small>)
            }
        </div >
    )
}