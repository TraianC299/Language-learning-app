import React from 'react'


type RadioButtonsProps = {
    options: {label:string, value:any}[]
    value: string
    setValue: (value: string) => void
}
const RadioButtons = ({options, value, setValue}:RadioButtonsProps) => {
  return (
    <div className="flex flex-col gap-4">
      {options.map((option, index) => (
        <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
          <input 
            checked={value === option.value}
            onChange={(e) => {e.preventDefault;setValue(option.value)}}
          
          type="radio" value=""  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          <label className="w-full py-4 ml-2 text-sm font-medium text-slate-800 dark:text-gray-300">{option.label}</label>
        </div>
      ))}
    </div>
  )
}

export default RadioButtons