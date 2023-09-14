import React from 'react'
import Heading from './Heading'

interface Props {
    heading: string
    body: string
}

const FeatureCard = (props: Props) => {
  return (
    <div className='bg-gray-300'>
        <Heading>
            {props.heading}
        </Heading>
        <div>
            {props.body}
        </div>
    </div>
  )
}

export default FeatureCard