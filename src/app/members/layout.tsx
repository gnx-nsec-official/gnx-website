import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'GNX: Members',
    description: 'All Core are developers and Core Mebers',
}

export default function MembersLayout({
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