import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About GNX',
    description: 'Static page of About',
}

export default function AboutLayout({
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