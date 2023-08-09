import React from 'react'
import MemberCard from '@/components/MemberCard';
import MemberInterface from '@/interface/member.interface';

const members: MemberInterface[] = [
  {
    name: "John Doe",
    imgFileName: "john.jpg",
    role: "Software Engineer",
    links: {
      linkedIn: "https://www.linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
      instagram: "https://www.instagram.com/johndoe"
    }
  },
  {
    name: "Jane Smith",
    imgFileName: "jane.jpg",
    role: "Designer",
    links: {
      linkedIn: "https://www.linkedin.com/in/janesmith",
      github: "https://github.com/janesmith",
      instagram: "https://www.instagram.com/janesmith"
    }
  },
  {
    name: "Alex Johnson",
    imgFileName: "alex.jpg",
    role: "Product Manager",
    links: {
      linkedIn: "https://www.linkedin.com/in/alexjohnson",
      github: "https://github.com/alexjohnson",
    }
  }
];

const Members = () => {
  return (
    <div className='p-3 grid grid-cols-4 gap-2 w-2/3 m-auto'>
      {
        members.map((item, index) => (
          <MemberCard
            key={index}
            member={item}
          />
        ))
      }
    </div>
  )
}

export default Members