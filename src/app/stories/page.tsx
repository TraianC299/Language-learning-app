"use client"
import StoryPreview from '@/components/stories/StoryPreview/StoryPreview.component'
import Select from '@/components/system/Select/Select.component'
import React, { ReactNode } from 'react'
import styles from './styles.module.scss'
import Options from '@/components/system/Options/Options.component'
const Page = () => {
  const [fromLanguage, setFromLanguage] = React.useState("EN")
  const [toLanguage, setToLanguage] = React.useState("DE")
  const [level, setLevel] = React.useState("1")

  return (
    <div className='flex'>
        <div className='p-4 w-full' >
            <div className='flex column mb-4 jsb gap1'>
              <Options title='Your Language' value={fromLanguage} setValue={setFromLanguage} options={[
                  {label:"🇬🇧 English", value:"EN"},
              ]}></Options>

              <Options title="Language you want to learn" value={toLanguage} setValue={setToLanguage} options={[
                  {label:"🇬🇧 English", value:"all"},
                  {label:"🇪🇸 Spanish", value:"ES"},
                  {label:"🇩🇪 German", value:"DE"}
              ]}></Options>

              <Options title='Your level' value={level} setValue={setLevel} options={[
                  {label:"🟢 Beginner", value:"1"},
                  {label:"🟡 Intermediate", value:"2"},
                  {label:"🟠 Advanced", value:"3"},
                  {label:"🔴 Expert", value:"4"},
              ]}></Options>

            </div>
            <div className={styles.storiesContainer} >
                <StoryPreview></StoryPreview>
                <StoryPreview></StoryPreview>
                <StoryPreview></StoryPreview>
                <StoryPreview></StoryPreview>
                <StoryPreview></StoryPreview>
                <StoryPreview></StoryPreview>
                <StoryPreview></StoryPreview>
                <StoryPreview></StoryPreview>
                <StoryPreview></StoryPreview>
              </div>
        </div>
    </div>
  )
}

export default Page
