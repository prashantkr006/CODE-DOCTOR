import { useRef, useEffect, useState } from "react";
import {
  motion,
  useAnimate,
  AnimatePresence,
  useTime,
  useTransform,
} from "framer-motion";

function App(): JSX.Element {
  const [text1] = useState<string>("CODE DOCTOR👋");
  const [text2] = useState<string>("WHAT CAN I HELP YOU WITH?");
  const [textShow1, setTextShow1] = useState<boolean>(true);
  const [textShow2, setTextShow2] = useState<boolean>(false);
  const [ovalRef, animate] = useAnimate();

  useEffect(() => {
    const sequence = [
      [
        ovalRef.current,
        {
          opacity: 1,
          rotate: -180,
          backgroundImage: `linear-gradient( 135deg, #C2FFD8 10%, #465efb 100%)`,
        },
        { duration: 2.5, delay: 0 },
      ],
      [
        ovalRef.current,
        {
          backgroundImage: `linear-gradient( 135deg, #C2FFD800 10%, #465efb00 100%)`,
          rotate: -270,
        },
        { duration: 2, delay: 0 },
      ],
      [ovalRef.current, { rotate: -360 }, { duration: 2, delay: 0 }],
      [ovalRef.current, { rotate: -520 }, { duration: 2, delay: 0 }],
      [ovalRef.current, { rotate: -600 }, { duration: 2, delay: 0 }],
      [ovalRef.current, { rotate: -730 }, { duration: 1, delay: 0 }],
      [ovalRef.current, { scale: 1.3, opacity: 0 }, { duration: 3, delay: 1 }],
      [ovalRef.current, { scale: 1 }, { duration: 1, delay: 0 }],
    ];

    //@ts-ignore
    animate(sequence, { delay: 1, repeat: Infinity });
    setTimeout(() => {
      setTextShow1(false);
    }, 5000);
    setTimeout(() => {
      setTextShow2(true);
    }, 9000);
  }, []);

  const EmptySpace = (): JSX.Element => {
    return (
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        className="flex flex-col justify-center items-start text-white font-gillsans font-semibold text-40 w-200 lg:h-64 sx:h-96"
      >
        {" "}
      </motion.h2>
    );
  };

  const TextAnimate = (txt: string, time: number): JSX.Element => {
    return (
      <>
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: time }}
          exit={{ opacity: 0 }}
          className="flex flex-col justify-center items-start text-white font-gillsans font-semibold text-40 w-200 lg:h-64 sx:h-96"
        >
          {txt}
        </motion.h2>
      </>
    );
  };

  return (
    <div className="h-auto w-auto flex justify-center items-center">
      <div ref={ovalRef} className="oval-shape"></div>
      <AnimatePresence>
        {textShow1 && TextAnimate(text1, 3)}
        {textShow2 && TextAnimate(text2, 0)}
      </AnimatePresence>
    </div>
  );
}

export default App;
