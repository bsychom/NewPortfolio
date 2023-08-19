import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const MessageWriter = () => {
  const [text] = useTypewriter({
    words: ['Frontend Developer', 'Software Engineer'],
    loop: Infinity,
  });

  return (
    <div className=''>
        <div className='text-green-400 text-xl font-extrabold capitalize leading-relaxed'>
      <span> <span className='text-white '></span > {text}</span>
      <Cursor  cursorStyle='_'></Cursor>

        </div>
    </div>
  );
};

export default MessageWriter;