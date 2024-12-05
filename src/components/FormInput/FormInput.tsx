import React from 'react'
import { FormInputProps } from '@/types'

import styles from './FormInput.module.css'

/**
 * A component that renders a form input field with optional validation and helper text
 *
 * @param props Component props
 * @param label FormInput label
 * @param name FormInput name
 * @param value FormInput current value
 * @param onChange FormInput callback function to handle changes to the input value
 * @param type FormInput type
 * @param required Whether the input field is required
 * @param error Whether the input field has an error
 * @param helperText FormInput helper text
 * @param rest Any other props
 *
 * @returns React Element
 */
export function FormInput({
  label,
  name,
  value,
  onChange,
  type = 'text',
  required = false,
  error = false,
  helperText,
  ...rest
}: FormInputProps): React.ReactElement {
  const inputId = `${name}-input`
  const helperTextId = `${name}-helper-text`

  return (
    <div className={styles.formInput}>
      <label htmlFor={inputId} className={styles.label}>
        {label}
        {required && <span className={styles.required}> *</span>}
      </label>
      <input
        id={inputId}
        name={name}
        className={`${styles.input} ${error ? styles.errorInput : ''}`}
        value={value}
        onChange={onChange}
        type={type}
        required={required}
        aria-invalid={error}
        {...rest}
      />
      {helperText && (
        <p
          id={helperTextId}
          className={`${styles.helperText} ${error ? styles.errorText : ''}`}
          role={error ? 'alert' : undefined}
        >
          {helperText}
        </p>
      )}
    </div>
  )
}
