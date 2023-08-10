import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'GNX Events',
    description: 'All Events will update here',
}

export default function EventLayout({
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