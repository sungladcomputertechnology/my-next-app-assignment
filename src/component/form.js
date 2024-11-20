import { useState } from 'react';
function FormComponent() {
    const [inputValue, setInputValue] = useState('');
    const [selectedValue, setSelectedValue] = useState('');

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
        <label className='text-lg fony-bold'>Enter your name</label>
         <input className='border-4 border-black border-solid rounded-md p-2' type="text" value={inputValue}   
        onChange={(e) => setInputValue(e.target.value)} />
        <p>inputValue{inputValue}</p>
        <label className='text-lg fony-bold'>Select Your State</label>
        <select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>

            <option value="Lagos">Lagos</option>
            <option value="Ogun">Ogun</option>
            <option value="Cross River">Cross River</option>
        </select>
        <p>selectedValue{selectedValue}</p>
        </div>
    );
  }
  export default FormComponent;