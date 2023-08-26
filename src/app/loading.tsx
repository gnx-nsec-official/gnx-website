'use client'

import React from 'react'
import { Dna } from 'react-loader-spinner'
import Section from '@/components/Section'

const Loading = () => {
    return (
        <Section className='flex items-center justify-center'>
            <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </Section>
    )
}

export default Loading