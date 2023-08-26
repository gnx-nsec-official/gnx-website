import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'GNX: Gallery',
    description: 'Our All Event Gallery',
}

export default function GalleryLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
}