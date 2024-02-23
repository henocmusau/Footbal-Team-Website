import Image from 'next/image'
import styles from './page.module.css'
import { Hero, SectionTitle, PostPreview, LastsPosts, LastsVideos, Hounours, PlayersPreview } from '@/componets'




export default function Home() {
  return (
    <>
      <Hero />

      <LastsPosts />

      <LastsVideos />

      <PlayersPreview />

      <Hounours />
    </>
  )
}
