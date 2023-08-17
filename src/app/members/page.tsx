'use client'

import React, { useEffect, useState } from 'react'
import MemberCard from '@/components/MemberCard';
import MemberInterface from '@/interface/member.interface';
import FetchMembers from './members';

const Members = () => {
  const [data, setData] = useState<MemberInterface[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const resp = await FetchMembers()
      setData(resp);
    }

    fetchData();
  }, [])
  return (
    <div className='p-3 grid grid-cols-1 md:grid-cols-4 gap-2 w-2/3 m-auto'>
      {data && data?.map((item, index) => {
        return <MemberCard
          key={index}
          member={item}
        />
      })}
    </div>
  )
}

export default Members