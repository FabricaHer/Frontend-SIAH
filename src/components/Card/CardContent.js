import React from 'react';
import { CardsData } from '../Cards/CardsData';
import CloseIcon from '@mui/icons-material/Close';
import '../Card/CardContent.css';
import {motion} from 'framer-motion';

 export const CardContent = ({ id, expander }) => {
  const area = CardsData.find(item => {
    return item.id === parseInt(id)
  });
  return (
    <motion.div key={id} className='expanded_card' layoutId={id}>
      <motion.div
        className='expande_card_content'
      >
        <span className='X' onClick={expander}>
          <CloseIcon /> 
        </span>
        <h2 className='Paragraph'> {area.title}</h2>
        <br/>
        <p className='text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </motion.div>
    </motion.div>
  )
}

