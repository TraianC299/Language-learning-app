import Button from '@/components/system/Button/Button.component'
import React from 'react'
import styles from './styles.module.scss'
import {IoClose} from 'react-icons/io5'
import TranslationType from '@/types/Translation.type'
import useTextToSpeech from '@/hooks/useTextToSpeech'

type Props = {
  translatedWord: string,
  originalWord: string,
  type: string,
  closeModal: ()=>void,
  // setTranslation: (translation:any)=>void,
  top:number,
  examples?:{en:string, de:string}[],
  left:number,
  speak: (text:string)=>void
}
const WordModal = ({
  originalWord,
  translatedWord,
  examples,
  closeModal,
  type,
    top,
    left,
}:Props) => {
  const {speak} = useTextToSpeech({lang: "de-DE"}) 

  return (
    <div className={"fixed top-0 left-0 p-4 rounded-md bg-white transition max-w-[20rem] min-w-[5rem]"} style={{top:`${top + 24}px`, left:`${left}px`}}>
        <div className='flex items-center justify-startborder-8 border-sky-500'>
          <h2 className='text-black'>{originalWord} - {translatedWord} ({type})</h2>
          <Button className="text small" onClick={()=>speak(originalWord)}>🔊</Button>
          <div className={styles.closeButton} onClick={closeModal}>
            <IoClose color='black'/>
          </div>
        </div>
        {examples?.length && <div className='flex flex-col gap-2'>
          <p className='text-base text-black'>Examples:</p>
          {examples?.map((example, index) => <Example key={index} german={example.de} english={example.en}></Example>)}
        </div>}
      </div>
  )
}

export default WordModal



const Example = ({german, english}:{
  german:string,
  english:string
}) => {
  return (
    <div className='flex flex-col gap-1'>
      <p className='text-xs text-black'>{german}</p>
      <p className='text-xs text-slate-500'>{english}</p>
    </div>
  )
}