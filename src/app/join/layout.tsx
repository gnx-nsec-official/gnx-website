import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'JOIN GNX',
    description: 'All User Can Join',
}

export default function JoinPageLayout({
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