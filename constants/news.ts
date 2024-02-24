import heroImg from '@/assets/images/hero.jpg'
import img1 from '@/assets/images/img1.jpg'
import img2 from '@/assets/images/img2.jpg'
import img3 from '@/assets/images/img3.jpg'
import img4 from '@/assets/images/img4.jpg'
import img5 from '@/assets/images/img5.jpg'
import img6 from '@/assets/images/img6.jpg'
import img7 from '@/assets/images/img7.jpg'
import img8 from '@/assets/images/img8.jpg'
import { Post } from "@/types/news";

export const news: Post[] = [
    {
        title: 'Helka écrase son adversaire et remporte le titre !',
        image: heroImg,
        createdAt: new Date(2024, 2, 10),
        author: 'Henoc Musau',
        category: 'Championnat'
    },
    {
        title: 'Comment la LINAFOOT essaie-t-elle de détruire le championnat ?',
        image: img1,
        createdAt: new Date(2024, 4, 4),
        author: 'Henoc Musau',
        category: 'Championnat'
    },
    {
        title: 'Gédeon, le nouveau chouchou du public',
        image: img6,
        createdAt: new Date(2024, 5, 7),
        author: 'Henoc Musau',
        category: 'Championnat'
    },
    {
        title: 'Fabien : "Nous sommes les meilleurs de la Ligue !"',
        image: img3,
        createdAt: new Date(2024, 2, 10),
        author: 'Henoc Musau',
        category: 'Championnat'
    },
    {
        title: 'Helka - Vclub : Les notes des joueurs',
        image: img4,
        createdAt: new Date(2024, 11, 1),
        author: 'Henoc Musau',
        category: 'Championnat'
    },
    {
        title: 'Top 10 de plus grandes légendes du club',
        image: img5,
        createdAt: new Date(2024, 7, 10),
        author: 'Henoc Musau',
        category: 'Championnat'
    },
    {
        title: 'La billeterie est ouverte pour le match de la Coupe',
        image: img2,
        createdAt: new Date(2024, 10, 10),
        author: 'Henoc Musau',
        category: 'Championnat'
    },
    {
        title: 'L\'incroyable montée en puissance de Jonathan Masika après une première partie de la saison ratée',
        image: img7,
        createdAt: new Date(2024, 6, 24),
        author: 'Henoc Musau',
        category: 'Championnat'
    },
    {
        title: 'Tout le monde se lève pour applaudir le soldat Chichi',
        image: img8,
        createdAt: new Date(2024, 7, 10),
        author: 'Henoc Musau',
        category: 'Championnat'
    },
]