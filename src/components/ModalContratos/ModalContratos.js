import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import '../Card/CardContent.css';
import {motion} from 'framer-motion';
import { ButtomContratoData } from '../ButtomContrato/ButtomContratoData';

 export const ModalContratos = ({ id, expander }) => {
  const area = ButtomContratoData.find(item => {
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
          {area.content}
        </p>
      </motion.div>
    </motion.div>
  )
}