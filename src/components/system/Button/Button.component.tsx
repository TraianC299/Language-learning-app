import React from 'react'
import './styles.scss'
const Button = (props:any) => {
  return (
    <div {...props} className={"button " + props.className} >{props.children}</div>
  )
}

export default Button