import React, {useState} from 'react';
import {useTypewriter} from 'react-simple-typewriter';

const TypeWriterEffect = () => {
    const [name, setName] = useState("");

    const [text] = useTypewriter({
        words: [name],
        loop: 5
    });

    const typeHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.myName.value;
        console.log(name);
        setName(name);
    };


    return (
        <div className='w-full h-full text-2xl flex justify-center items-center'>
            <div>
                <form onSubmit={typeHandler}>
                    <input type="text" name="myName" id="myName" placeholder='Type Your Name' />
                    <button type='submit'>Submit</button>
                </form>
                <h1>{text}</h1>
            </div>
        </div>
    );
};

export default TypeWriterEffect;