'use client'

import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';
import Input from '@/components/Input';
import Button from '@/components/Button';

interface State {
  name: string;
  phoneNumber: string;
  email: string;
}

const initialState: State = {
  name: '',
  phoneNumber: '',
  email: '',
};

const Page = () => {
  const [state, setState] = useState<State>(initialState);

  const sendRequest = async () => {
    const res = await axios.post('/api/join', state);
    return res.data;
  };

  const handleClick = () => {
    sendRequest().then((data) => {
      if (data.response) {
        console.log(data);
      }
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className='flex justify-center items-center h-[90vh]'>
      <div className='p-2 flex flex-col w-1/3 h-fit shadow shadow-orange-200'>
        <Input
          name="name"
          value={state.name}
          placeholder='Type Your Name...'
          onChange={handleInputChange}
        />
        <Input
          name="phoneNumber"
          value={state.phoneNumber}
          placeholder='Type Your Contact...'
          onChange={handleInputChange}
        />
        <Input
          name="email"
          type='email'
          value={state.email}
          placeholder='Type Your Email...'
          onChange={handleInputChange}
        />
        <Button onClick={handleClick}>Click Here</Button>
      </div>
    </div>
  );
};

export default Page;
