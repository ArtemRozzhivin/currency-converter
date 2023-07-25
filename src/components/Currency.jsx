import React from 'react';

const Currency = ({ isConverted }) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='text-[#989898] text[15px]'>
        {isConverted ? <p>Converted Amount</p> : <p>Amount</p>}
      </div>
      <div className='flex gap-4'>
        <select
          id='currency'
          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'>
          <option selected>Choose a country</option>
          <option value='US'>United States</option>
          <option value='CA'>Canada</option>
          <option value='FR'>France</option>
          <option value='DE'>Germany</option>
        </select>

        <input
          type='number'
          className='bg-[#EFEFEF] rounded-lg px-4 py-2 font-semibold text-xl text-right block w-full'
        />
      </div>
    </div>
  );
};

export default Currency;
