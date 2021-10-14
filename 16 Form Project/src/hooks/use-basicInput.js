import { useState } from 'react'

const useBasicInput = (validateValue) => {
  const [enteredValue, setenteredValue] = useState('')
  const [isTouched, setIsTouched] = useState(false)

  const valueIsValid = validateValue(enteredValue)
  const hasError = !valueIsValid && isTouched

  const valueChangeHandler = (event) => {
    setenteredValue(event.target.value)
  }

  const inputBlurHandler = (event) => {
    setIsTouched(true)
  }

  const reset = () => {
    enteredValue('')
    isTouched(false)
  }

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  }
}

export default useBasicInput
