import React from 'react';

const Currency = ({ currency, setCurrency, value, setValue, exchangeRate, isConverted }) => {
  const currencies = Object.keys(exchangeRate.course);

  return (
    <div className='flex flex-col gap-4'>
      <div className='text-[#989898] text[15px]'>
        {isConverted ? <p>Converted Amount</p> : <p>Amount</p>}
      </div>
      <div className='flex gap-4'>
        <select
          id='currency'
          onChange={(e) => setCurrency(e.target.value)}
          className='bg-gray-50 border border-gray-300 text-[#26278D] font-medium text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'>
          {currencies.map((item) => (
            <option selected={currency === item} key={item}>
              {item}
            </option>
          ))}
        </select>

        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type='number'
          className='bg-[#EFEFEF] rounded-lg px-4 py-2 font-semibold text-xl text-right block w-full'
        />
      </div>
    </div>
  );
};

export default Currency;
