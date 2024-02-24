import React from 'react'
import { SectionTitle } from '.'
import img4 from '@/assets/images/img4.jpg'
import img5 from '@/assets/images/img5.jpg'
import img6 from '@/assets/images/img6.jpg'
import Image from 'next/image'
import { PlayCircle } from 'lucide-react'
import PlayButton from './PlayButton'


export default function LastsVideos() {
    return (
        <section className='breves__videos'>
            <header className='videoSection__header'>
                <SectionTitle isSecondary text="Découvrez les récentes vidéos de l'Equipe" />
            </header>

            {/* <div className='imgContainer'> */}
            {
                [img4, img5, img6].map((img, i) => (

                    <button key={i} className='playBtn' >
                        <Image
                            alt='Helka Videos'
                            src={img}
                            className='image'
                        />
                        {/* <PlayCircle className='playSvg' /> */}
                        <PlayButton />
                        <SectionTitle isSecondary={true} text={'Titre de la vidéo '} />

                    </button>
                ))
            }
            {/* </div> */}
        </section>
    )
}
