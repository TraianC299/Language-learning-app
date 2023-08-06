import React from 'react'
import StoryPreview from '../stories/StoryPreview/StoryPreview.component'
import Link from 'next/link'
import Stories from '@/stories'


const StoriesSection = () => {



  return (
    <section className='max-w-screen-xl mx-auto flex flex-col gap-8 p-4'>
    <div className='flex justify-between items-center w-full'>
      <h2 className="text-4xl font-semibold dark:text-white">Stories</h2>
      <Link style={{textDecoration:"none"}} href="stories"><p className="text text-white font-semibold">See more →</p></Link>
    </div>
    <div className='grid gap-8 grid-cols-1 md:grid-cols-3'>
      {Object.keys(Stories).map((story, index) => <StoryPreview 
      key={index} 
      image={Stories[story].image}
      title={Stories[story].title}
      description={Stories[story].description}
      slug={story}></StoryPreview>)}
    </div>
  </section>
  )
}

export default StoriesSection



