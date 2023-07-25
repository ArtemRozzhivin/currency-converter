import Converter from './components/Converter';

function App() {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen bg-gradient-to-b from-[#EAEAFE] to-[#DDF6F300] py-[50px] px-[20px]'>
      <div className='flex flex-col justify-center items-center gap-3 mb-10'>
        <h1 className='text-[#1F2261] text-2xl font-bold'>Currency Converter</h1>
        <p className='text-[#808080] text-center'>
          Check live rates, set rate alerts, receive notifications and more.
        </p>
      </div>

      <div className='mb-8'>
        <Converter />
      </div>

      <div>
        <p className='text-[#A1A1A1] mb-2'>Indicative Exchange Rate</p>
        <p className='text-black font-medium text-lg'>1 SGD = 0.7367 USD</p>
      </div>
    </div>
  );
}

export default App;
