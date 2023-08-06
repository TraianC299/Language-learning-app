import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.scss'
import svg from '../assets/svg/hero.svg'
import StoryPreview from '@/components/stories/StoryPreview/StoryPreview.component'
import Button from '@/components/system/Button/Button.component'
import Link from 'next/link'
import HeroSection from '@/components/home/HeroSection'
import StoriesSection from '@/components/home/StoriesSection'
import Footer from '@/components/home/Footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex flex-col gap-8'>
      {/* hero section for a language learning app*/}
      <HeroSection/>
      {/* features section for a language learning app*/}

      {/* stories section */}
     <StoriesSection/>
     
      
      

    </main>
  )
}
