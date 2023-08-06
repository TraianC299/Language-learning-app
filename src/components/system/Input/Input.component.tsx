import React from 'react'
import styles from './styles.module.scss'









interface  InputProps{
  value: string,
  setValue:Function,
  label?: string,
  error?:string,
  setError?:Function,
  disabled?: boolean,
  defaultValue?: string,
  rows?:number,
  rowsMax?:number, 
  helperText?: string,
  validation?:Function, 
  placeholder?:string,
  onFocusCapture?:Function,
  props?: any[]
}

const Input:React.FC<InputProps> = ({value, setValue, label, error, setError, disabled, rows, rowsMax, helperText, validation,placeholder,onFocusCapture, ...props}) => {

    // function handleChange (e:InputEvent){
    //   e.preventDefault()
    
    // if (typeof(e.target.value)==undefined || !setValue){
    //     return null
    // }else{
    //     setValue(e.target.value)
    //    }}
    
    
    
    const validationnn = () => {
     if(validation&&setError){
       validation(value)?setError(validation(value)):setError(null)
     }else{
       return null
     }
    }
    
    const onFocus = (e:React.FocusEvent<HTMLInputElement, Element>) => {
      e.preventDefault()
    
      if(setError){
        setError(false)
      }
    }
    const onBlur = (e:React.FocusEvent<HTMLInputElement, Element>) => {
      e.preventDefault()
      validationnn()
    }
    
    
      return(
        <div className={styles.container}>
          <label htmlFor={label} className="sp">{label}</label>
          <input
          className={styles.input}
          id={label} 
          name={label}
          onChange={(e)=>setValue(e.target.value)}
          onBlur={(e)=>onBlur(e)}
          onFocus={(e)=>onFocus(e)}
          value={value}
          placeholder={placeholder}
          onFocusCapture={(e)=>onFocusCapture?onFocusCapture(e):null}
          {...props}
          

          ></input>
          {/* <p style={{color: RED}}>{error}</p> */}
          <div></div>
          
        </div>
      )
    }
    
    
    export default Input
    