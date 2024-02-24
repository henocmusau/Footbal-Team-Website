import Image from 'next/image'
import styles from './page.module.css'
import { Hero, LastsPosts, Hounours, PlayersPreview, CallToAction, Breves } from '@/componets'




export default function Home() {
  return (
    <>
      <Hero />

      <Breves />

      <CallToAction />

      {/* <LastsPosts /> */}

      <PlayersPreview />

      <Hounours />
    </>
  )
}
