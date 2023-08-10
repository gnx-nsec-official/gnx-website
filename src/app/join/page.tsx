'use client'

import React, { ChangeEvent, useReducer } from 'react';
import axios from 'axios';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dropdown from '@/components/Dropdown';

interface State {
  name: string;
  phoneNumber: string;
  email: string;
  department: "CSE" | "IT" | "ECE" | "CSBS" | "AIML" | "BME" | "Select";
  reason: string;
  gradYear: number;
  gender: "M" | "F" | "Select";
}

const initialState: State = {
  name: '',
  phoneNumber: '',
  email: '',
  department: 'Select',
  reason: '',
  gradYear: 2022,
  gender: 'Select',
};

type Action =
  | { type: 'UPDATE_FIELD'; field: string; value: string }
  | { type: 'RESET' };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const Page = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const sendRequest = async () => {
    try {
      const res = await axios.post('/api/join', state);
      return res.data;
    } catch (error) {
      console.error('Error sending request:', error);
      return null;
    }
  };

  const handleClick = async () => {
    const data = await sendRequest();
    if (data?.response) {
      toast('We Will Contact You Soon...');
    }
    // console.log(state)
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FIELD', field: name, value });
  };

  const handleDropDownChange = (name: string, value: string) => {
    dispatch({ type: 'UPDATE_FIELD', field: name, value });
  }

  return (
    <div className='flex justify-center md:items-center h-[90vh] select-none'>
      <div className='p-2 flex flex-col md:w-1/3'>
        <Input
          name='name'
          value={state.name}
          label='Name'
          onChange={handleInputChange}
        />
        <Input
          name='phoneNumber'
          value={state.phoneNumber}
          label='Phone Number'
          onChange={handleInputChange}
        />
        <Input
          name='email'
          type='email'
          value={state.email}
          label='Email'
          onChange={handleInputChange}
        />
        <Dropdown
          options={Array.from({ length: 4 }, (_, i) => (new Date().getFullYear() + i + 1).toString())}
          onChange={(value) => { handleDropDownChange("gradYear", value) }}
          innerText='Select Your Graduation Year'
          label='Graduation Year'
        />
        <Dropdown
          options={["CSE", "IT", "ECE", "CSBS", "AIML", "BME"]}
          onChange={(value) => { handleDropDownChange("department", value) }}
          innerText='Select Your Department'
          label='Department'
        />
        <Dropdown
          options={["M", "F"]}
          onChange={(value) => { handleDropDownChange("gender", value) }}
          innerText='Select Your Gender'
          label='Gender'
        />
        <Input
          name='reason'
          value={state.reason}
          label='Why Do You Want to Join? *'
          onChange={handleInputChange}
        />
        <Button onClick={handleClick}>Request To Join</Button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Page;
