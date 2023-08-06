import React from 'react'
import StoryType from '@/types/Story.type'
import Question from './Question/Question.component'

const QuestionsSection = ({questions}:{
  questions: StoryType["questions"]
}) => {
  return (
    <div className='flex flex-col justify-start items-start gap-8'>
    <h2 className='text-3xl font-semibold'>Questions:</h2>
    {questions.map((question, index) => (
      <Question
      correctAnswer={question.correctAnswer}
      options={question.options}
      question={question.question} 
      key={index}></Question>
    ))}
  </div>
  )
}

export default QuestionsSection