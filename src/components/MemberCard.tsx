"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import MemberInterface from '@/interface/member.interface';
import { Linkedin, Github, Twitter, Instagram } from 'lucide-react';

interface MemberProps {
    member: MemberInterface;
}

const Member = ({ member }: MemberProps) => {
    return (
        <motion.div
            className='bg-white shadow-lg p-4 rounded-md flex flex-col items-center'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)' }}
        >
            <div className='mr-4'>
                <Image
                    src={`https://ik.imagekit.io/kftm0sihh/${member.imgFileName}`}
                    alt={member.name}
                    height={150}
                    width={150}
                    className='rounded-full p-2 shadow-md'
                />
            </div>
            <div className='flex flex-col text-center p-1'>
                <span className='text-lg font-semibold'>
                    {member.name}
                </span>
                <span className='text-gray-600'>
                    {member.role}
                </span>
            </div>
            <div className='flex mt-2 space-x-2'>
                {member.links.linkedIn && (
                    <a href={member.links.linkedIn} target='_blank' rel='noopener noreferrer'>
                        <Linkedin size={24} />
                    </a>
                )}
                {member.links.github && (
                    <a href={member.links.github} target='_blank' rel='noopener noreferrer'>
                        <Github size={24} />
                    </a>
                )}
                {member.links.twitter && (
                    <a href={member.links.twitter} target='_blank' rel='noopener noreferrer'>
                        <Twitter size={24} />
                    </a>
                )}
                {member.links.instagram && (
                    <a href={member.links.instagram} target='_blank' rel='noopener noreferrer'>
                        <Instagram size={24} />
                    </a>
                )}
            </div>
        </motion.div>
    );
};

export default Member;

