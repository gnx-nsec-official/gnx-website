"use client"

import React from 'react';
import Image from 'next/image';
import MemberInterface from '@/interface/member.interface';

interface MemberProps {
    member: MemberInterface;
}

const Member = ({ member }: MemberProps) => {
    return (
        <div className='bg-white shadow-md p-4 rounded-md flex items-center'>
            <div className='mr-4'>
                <Image
                    src={`https://ik.imagekit.io/kftm0sihh/${member.imgFileName}`}
                    alt={member.name}
                    height={60}
                    width={60}
                    className='rounded-full'
                />
            </div>
            <div className='flex flex-col'>
                <span className='text-lg font-semibold'>
                    {member.name}
                </span>
                <span className='text-gray-600'>
                    {member.role}
                </span>
            </div>
        </div>
    );
};

export default Member;
