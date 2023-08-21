import React, { useState } from 'react';


const App = () => {


  const [uiColor, setUiColor] = useState();
  const [onButton, setOnButton] = useState();


  const getColor = (e) => {
    setOnButton(e.target.value)
  };

  const showColor = () => {
    setUiColor(onButton);
  };

  const copy = () => {

    if (uiColor) {
      navigator.clipboard.writeText(uiColor);
      alert('copied')
    } else {
      navigator.clipboard.writeText('');
    }


  };



  return (

    <>
      <section className='flex justify-center h-[100vh] w-[100vw] bg-sky-100 pt-20'>

        <div>

          <div className="text-center font-normal mb-4 text-black text-4xl dark:text-gray-400">Background Color Flipper</div>
          <p className=' mb-8 text-center text-lg'>You can put the <span className='text-indigo-500'>(`color-name`, `rgb`, `rgba`, `hsl`, `hwb` or `hex`) </span> </p>

          <button onClick={copy} className='ml-96 mb-1 cursor-pointer bg-[#000000] text-white rounded-[0.26rem] text-sm py-0.5 px-1 tracking-[1px] '>Copy to Clipboard</button>

          <div className='border-2 border-gray-300 h-[50%] w-[100%] mb-8' style={{ background: `${uiColor}` }}></div>


          <div className='flex justify-center items-center space-x-4'>
            <input onChange={getColor} type="text" id="default-search" autoComplete='off' className=" text-sm px-4 py-3 text-gray-900 border border-gray-50 outline-none rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Write the Color " />

            <button onClick={showColor} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Click for Color</button>
          </div>

        </div>




      </section >
    </>

  )
}

export default App
