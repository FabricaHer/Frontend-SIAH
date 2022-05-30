import React, { useState } from "react";
import { CardsData } from "../Cards/CardsData";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import "../Cards/Cards.css";
import {CardContent} from "../Card/CardContent";

export const Cards = () => {
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
          <div className="Cards">
            {CardsData.map((item) => {
              return (
                <motion.div
                  className="parentContainer"
                  onClick={() => expander(item.id)}
                  key={item.id}
                  layoutId={item.id}
                >
                  <p className="title">{item.title}</p>
                  <span className="icon">{item.icon}</span>
                </motion.div>
              );
            })}
          </div>
          <AnimatePresence>
            {expanded && <CardContent expander={expander} id={layoutId} />}
          </AnimatePresence>
        </AnimateSharedLayout>
      </div>
    </>
  );
};
