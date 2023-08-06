"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import styles from './styles.module.scss'
import { SelectOption, SelectProps } from './types'
import Input from '../Input/Input.component'






const getInitialValue = (value:SelectProps["value"], options:SelectOption[]) => {
    if(value){    
        const option = options.find(option => option.value === value)
        return option?option.label:""
    }else{
        return ""
    }

}


const Select = ({options=[], value, setValue, noAddOption, withImage, label, ...props}:SelectProps) => {
    const [relevantOptions, setRelevantOptions] = React.useState([...options])
    const [focus, setFocus] = React.useState(false)
    const [inputValue, setInputValue] = useState(getInitialValue(value, options))
    const ref = useRef(null);
    useClickAway(ref, () => {
      setFocus(false);
    });



    useEffect(()=>{
        setRelevantOptions([...options])
    },[options])






    const complete = ({label, value}:SelectOption) => {
        setFocus(false)
        setInputValue(label)
        setValue(value)
    }
   

    return (
            <div aria-label='select' className={styles.container} ref={ref}>
            <Input label={label} value={inputValue} onFocusCapture={()=>setFocus(true)} setValue={()=>{}} {...props}></Input>
            {focus?<div className={styles.styledAutocompleteContainer} style={{pointerEvents:focus?"all":"none", opacity:focus?"1":"0"}} >
                {relevantOptions.map(option => <div 
                    className={styles.tag + " " + (value?value===option.value?styles.selected:"":"")}
                    onClick={()=>complete({...option})} 
                    key={option.label}
                    >{withImage?<img src={option.image}></img>:null}<p>{option.label}</p></div>)}
            </div>:null}
            <button aria-label='close' className={styles.timePickerButton} onClick={()=>setFocus(previous=>!previous)}><p className='h6'>{focus?"☝️":"👇"}</p></button>
            </div>
    )
}

export default Select






