import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About GNX',
    description: 'User can contact us',
}

export default function ContactLayout({
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