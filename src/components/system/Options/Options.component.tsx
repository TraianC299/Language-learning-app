import React, { ReactNode } from 'react'
import styles from './styles.module.scss'

type Option = {
    label: string
    value: string | number
}


type Props = {
    options: Option[],
    value: string | number,
    setValue: (value: string | number) => void,
    title?: string
}
const Options = ({options, value, setValue, title}:Props) => {
  return (
    <div className='flex column jfs'>
        {title?<p className='mb1 h5 bold'>{title}</p>:null}
        <div className='flex flex-wrap ac jfs gap1'>{
            options.map(el=><Option selected={el.value===value} onClick={()=>setValue(el.value)}>{el.label}</Option>)}
            </div>
    </div>
  )
}

export default Options



const Option = ({children, selected, ...props}:{children:any, selected:boolean, props: any[]}) => {
    return (
        <button {...props} className={`${styles.optionContainer} ${selected?styles.selected:""} p`} >{children}</button>
    )
}