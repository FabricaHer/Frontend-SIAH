import React, { useState } from 'react';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import {ModalContratos} from "../ModalContratos/ModalContratos";

export const ButtomContrato = () => {
    const [expandir, setExpandir] = useState(false);

    // const expansion = () => {
    //     if (expandir !== true) {
    //         setExpandir(true);
    //     }else{
    //         setExpandir(false);
    //     }
    // };

  return (
    <div>
        <AnimateSharedLayout type="crossfade">
            <motion.button className="btn" 
                onClick={()=> { setExpandir(true)}}
            >
                Ver +
            </motion.button>
            <AnimatePresence>
                {expandir && <ModalContratos setExpandir={setExpandir} />}
            </AnimatePresence>
        </AnimateSharedLayout>
    </div>
  )
}
