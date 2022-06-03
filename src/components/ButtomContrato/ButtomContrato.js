import React, { useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { ModalContratos } from "../ModalContratos/ModalContratos";
import { ButtomContratoData } from "./ButtomContratoData";

export const ButtomContrato = () => {
  const [expanded, setExpanded] = useState(false);

  const [layoutId, setLayoutId] = useState(null);

  const expander = (id) => {
    if (expanded !== true) {
      setLayoutId(id);
      setExpanded(true);
    } else {
      setExpanded(false);
      setLayoutId(null);
    }
  };

  return (
    <>
      <div>
        <AnimateSharedLayout type="crossfade">
          <div>
            {ButtomContratoData.map((item) => {
              return (
                <motion.div
                  className="btn"
                  onClick={() => expander(item.id)}
                  key={item.id}
                  layoutId={item.id}
                >
                  <p>Ver +</p>
                </motion.div>
              );
            })}
          </div>
          <AnimatePresence>
            {expanded && <ModalContratos expander={expander} id={layoutId} />}
          </AnimatePresence>
        </AnimateSharedLayout>
      </div>
    </>
  );
};