import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./ModalContratos.css";
import {motion} from 'framer-motion';

export const ModalContratos = ({ setExpandir }) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{opacity: 0, transition: { duration:0.15 } }} 
    transition={{ duration: 0.2, delay: 0.15 }}
    style={{pointerEvents: "auto"}}
    className="card"
    layout>
      <span onClick={()=> {setExpandir(false)}}>
        <CloseIcon />
      </span>
    </motion.div>
  );
};
