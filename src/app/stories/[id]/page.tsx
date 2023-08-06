"use client"
import React, { useEffect, useState } from 'react'
import styles from "./page.module.scss"
import useTextToSpeech from '@/hooks/useTextToSpeech'
import Image from 'next/image'
import {useWindowScroll} from 'react-use';
import Question from '@/components/stories/Question/Question.component'
import WordModal from '@/components/stories/WordModal/WordModal.component'
import TranslationType from '@/types/Translation.type'
// import translations from '../../../../translations/new.json'
import QuestionsSection from '@/components/stories/QuestionsSection'
import StoryType from '@/types/Story.type'






const StoryPage = ({params}: {
  params: {
    id: string
  }
}) => {
  const {id} =params
  const [story, setStory] = useState<StoryType | null>(null)
  const [translations, setTranslations] = useState<{[key:string]:TranslationType}>({})
const getStory = async () => {
  const imported = (await import(`../../../stories/${id}`)).default
  const translations = (await import(`../../../../translations/${imported.dictionary}`)).default
  setStory(imported)
  setTranslations(translations)
}
  useEffect(()=>{
    getStory()
    
  },[])

    
  const { y} = useWindowScroll();  
  const [XY, setXY] = useState<{top:number, right:number}>({
    top:0,
    right:0
  })
  const [selectedWord, setSelectedWord] = useState<string>("")
  function clickableWords(paragraph:string, clickCallback:(e:React.MouseEvent<HTMLSpanElement, MouseEvent>, word:string)=>void) {
    const words = paragraph.split(" ");
    return words.map(word => 
      <span className={`${styles.word} ${selectedWord==word?styles.selected:""}`} onClick={(e) => clickCallback(e, word)}>{word} </span>
    );
  }


  const translateWord = async (e:React.MouseEvent<HTMLSpanElement, MouseEvent>, word:string) => {
    const formattedWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    //@ts-ignore
    const clientRect = e.target.getBoundingClientRect()
    setSelectedWord(formattedWord)
    setXY({
      top:clientRect.top,
      right:clientRect.left
    })
}
  

useEffect(()=>{
  setSelectedWord("")
},[y])


  return (
    story && <div className={"flex flex-col p-4 dark:text-white leading-8 max-w-3xl m-auto md:pt-12 gap-4"}>
      <Image className='mb-4 rounded-md' src={story.image} width={1000} height={500} alt="Story image"></Image>
      <h1 className='text-5xl font-bold dark:text-white'>{story.title}</h1>
      {selectedWord && <WordModal
        originalWord={selectedWord || ""}
        translatedWord={translations[selectedWord]?.translation}
        type={translations[selectedWord]?.type}
        examples={translations[selectedWord]?.examples}
        closeModal={()=>setSelectedWord("")}
        top={XY.top}
        left={XY.right}
      />}
      <div>{clickableWords(story.text, translateWord)}</div>
     <QuestionsSection questions={story.questions}></QuestionsSection>
      </div>
  )
}

export default StoryPage



