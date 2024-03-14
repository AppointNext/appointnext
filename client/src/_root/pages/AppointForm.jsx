import React, { useState } from 'react';

const AppointForm = () => {
    const [input, setInput] = useState({ prevVisit: "", file: "", Describe: "", treat: "" });

    const handleChange = (event) => {
        const { name, value, type } = event.target;
        setInput((prevState) => ({ ...prevState, [name]: type === 'radio' ? value : value }));
        console.log(input);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(input);
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <form onSubmit={submitHandler} className='flex-col justify-center items-center shadow-lg rounded-xl p-8 w-96 bg-gray-100'>
                <div className='mb-4 flex justify-between items-center w-full'>
                    <label htmlFor="treat" className='block text-gray-700'>Treatment For</label>
                    <select name="treat" id="treat" onChange={handleChange} value={input.treat} className='p-2 outline-none shadow-md rounded-md w-2/3'>
                        <option value="fever">Fever</option>
                        <option value="skin">Skin treatment</option>
                        <option value="kidney">Kidney Stone</option>
                        <option value="unc">Unconscious</option>
                    </select>
                </div>

                <div className='mb-4 flex justify-between items-center w-full'>
                    <label htmlFor="describe" className='block text-gray-700'>Describe</label>
                    <input type="text" placeholder='Describe' value={input.Describe} name='Describe' onChange={handleChange} className='p-2 shadow-md rounded-md w-2/3' />
                </div>

                <div className='mb-4 flex justify-between items-center w-full'>
                    <label className='block text-gray-700'>Any Previous Visit</label>
                    <div className='flex space-x-4'>
                        <label className='inline-flex items-center'>
                            <input type='radio' name='prevVisit' value="Yes" checked={input.prevVisit === "Yes"} onChange={handleChange} className='form-radio h-5 w-5 text-blue-600' />
                            <span className='ml-2'>Yes</span>
                        </label>
                        <label className='inline-flex items-center'>
                            <input type='radio' name='prevVisit' value="No" checked={input.prevVisit === "No"} onChange={handleChange} className='form-radio h-5 w-5 text-blue-600' />
                            <span className='ml-2'>No</span>
                        </label>
                    </div>
                </div>

                <div className='mb-4 flex justify-between items-center w-full'>
                    <label htmlFor="file" className='block text-gray-700'>Any reports</label>
                    <input type='file' value={input.file} name='file' onChange={handleChange} className='p-2 shadow-md rounded-md w-2/3' />
                </div>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AppointForm;
