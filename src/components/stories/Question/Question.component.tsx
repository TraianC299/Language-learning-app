import RadioButtons from '@/components/system/RadioButtons/RadioButtons.component'
import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { MdError } from 'react-icons/md'
type QuestionProps = {

    question: string
    options: string[]
    correctAnswer: string
}
const Question = ({question, options, correctAnswer}:QuestionProps) => {
  const [answer, setAnswer] = React.useState<string>('')
  return (
    <div className='flex flex-col gap-4 w-full'>
        <h1 className='text-2xl font-semibold'>{question}</h1>
        <RadioButtons options={options.map(el=>({label:el, value:el}))} value={answer} setValue={setAnswer}></RadioButtons>
        {answer && <div className='flex gap-2 items-center ml-auto'>
          <p className='text-sm'>{answer == correctAnswer ? "Correct!" : "Incorrect"}</p>
          {answer == correctAnswer?<BsFillCheckCircleFill className={`text-2xl text-green-500`}></BsFillCheckCircleFill>:<MdError className="text-2xl text-red-500"/>}
        </div>}
    </div>
  )
}

export default Question