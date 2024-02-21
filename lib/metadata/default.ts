import type { Metadata } from 'next'


export const defaultMetadata: Metadata = {
    title: "Helka TP - Club de Football Tout-Puissant de Kinshasa",
    description: "Bienvenue sur le site officiel du club de football Helka TP. Restez à jour avec les dernières nouvelles, les matchs, les résultats et plus encore.",
    keywords: ["Helka TP", 'Helka', 'Tout-Puissant Helka', 'TP Helka', "Football", "Club", 'Football Academy', "Kinshasa", "Tout-Puissant"],
    generator: 'Henoc Musau',
    applicationName: 'Helka TP',
    referrer: 'origin-when-cross-origin',
    authors: [{ name: 'Henoc Musau' }],
    // authors: [{ name: 'Henoc Musau' }, { name: 'Josh', url: 'https://nextjs.org' }],
    creator: 'Henoc Musau',
    publisher: 'Henoc Musau',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('http://localhost:3000'),
    alternates: {
        canonical: '/',
        // languages: {
        //   'en-US': '/en-US',
        //   'de-DE': '/de-DE',
        // },
    },
    openGraph: {
        // images: ogImage.src,
        // images: '/og-image.png',
        title: "Helka TP - Club de Football Tout-Puissant de Kinshasa",
        description: "Bienvenue sur le site officiel du club de football Helka TP. Restez à jour avec les dernières nouvelles, les matchs, les résultats et plus encore.",
        url: 'http://localhost:3000',
        siteName: 'Helka TP',
        images: [
            {
                url: 'https://nextjs.org/og.png', // Must be an absolute URL
                width: 800,
                height: 600,
            },
            {
                url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
                width: 1800,
                height: 1600,
                alt: 'My custom alt',
            },
        ],
        locale: 'fr_FR',
        type: 'website',
    },
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    twitter: {
        card: 'summary_large_image',
        title: "Helka TP - Club de Football Tout-Puissant de Kinshasa",
        description: "Bienvenue sur le site officiel du club de football Helka TP. Restez à jour avec les dernières nouvelles, les matchs, les résultats et plus encore.",
        // siteId: '1467726470533754880',
        creator: '@henocmusau',
        creatorId: '1467726470533754880',
        images: ['https://nextjs.org/og.png'], // Must be an absolute URL
    },
    category: 'Football'
}