import { Newspaper, Calendar, UsersRound, HeartHandshake, ShoppingCart } from "lucide-react";

export const navbarLinks = [
    {
        text: 'actualités',
        link: '/news',
        icon: Newspaper
    },
    // {
    //     text: 'calendrier',
    //     link: '/fixtures',
    //     icon: Calendar
    // },
    {
        text: 'équipe',
        link: '/team',
        icon: UsersRound
    },
    {
        text: 'boutique',
        link: '/shop',
        icon: ShoppingCart
    },
    {
        text: 'fans',
        link: '/fans',
        icon: HeartHandshake
    },

]