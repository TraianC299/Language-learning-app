import Image from 'next/image'
import React from 'react'
import styles from './styles.module.scss'
import Button from '@/components/system/Button/Button.component'
import Link from 'next/link'


type StoryPreviewProps = {
    image: string,
    title: string,
    description: string,
    slug: string
}
const StoryPreview = ({image,title, description, slug}:StoryPreviewProps) => {
  return (
    <div className={styles.container+ ` flex flex-col gap-1 hover:shadow-xl hover:scale-105 transition`}>
            <div className={styles.imageContainer}>
                <Image
                style={{
                    objectFit:"cover"
                }}
                src={image}
                alt="Picture of the author"
                fill></Image>
                
            <div className={styles.profile}>
                <Image
                    src={
                        "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=800"
                    }
                    alt="Picture of the author"
                    width={32}
                    height={32}
                    style={{objectFit:"cover"}}
                ></Image>
                <p className='p bold'>Henrietta Langdon</p>
            </div>
            </div>
            
            <div className={styles.text + " flex flex-col justify-start items-start gap-2 p-6 flex-1"}>
                <h2 className={"text-2xl font-medium dark:text-white"}>{title}</h2>
                <p className="text-sm dark:text-white line-clamp-3">
                    {description}
                </p>
                <Link className="no-underline mt-auto mb-0" href={`/stories/${slug}`}><Button className="mt-4 ghost">Read →</Button></Link>
            </div>
            
    </div>
  )
}

export default StoryPreview