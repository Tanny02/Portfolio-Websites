import { motion } from "framer-motion";

const Test = () => {
  return (
    <div className="course">
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0, borderRadius: 50, rotateZ: 360 }}
        animate={{
          opacity: 1,
          scale: 1,
          borderRadius: 0,
          rotateZ: 0,
        }}
        transition={{ duration: 5 }}
        whileHover={{ scale: 2 }}
        drag
      >
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0, borderRadius: 100, rotateZ: 360 }}
          animate={{
            opacity: 1,
            scale: 1,
            borderRadius: 0,
            rotateZ: 0,
          }}
          transition={{ duration: 5, delay: 0.5 }}
          whileHover={{ scale: 2 }}
        >
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0, borderRadius: 150, rotateZ: 360 }}
            animate={{
              opacity: 1,
              scale: 1,
              borderRadius: 0,
              rotateZ: 0,
            }}
            transition={{ duration: 5, delay: 1 }}
            whileHover={{ scale: 2 }}
          >
            <motion.div
              className="box"
              initial={{
                opacity: 0,
                scale: 0,
                borderRadius: 200,
                rotateZ: 360,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                borderRadius: 0,
                rotateZ: 0,
              }}
              transition={{ duration: 5, delay: 1.5 }}
              whileHover={{ scale: 2 }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Test;
