import { FC } from 'react';
import { motion, AnimationProps } from 'framer-motion';

const AnimatedEgg: FC<AnimationProps> = ({ ...rest }) => {
  return (
    <motion.div
      className="w-40 h-60 rounded-full bg-transparent border-8 border-gradient"
      style={{ borderTopLeftRadius: '50% 75%', borderTopRightRadius: '50% 75%', borderBottomLeftRadius: '50% 75%', borderBottomRightRadius: '50% 75%' }}
      {...rest}
    />
  );
};

export default AnimatedEgg;
