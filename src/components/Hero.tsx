import { motion } from "framer-motion";
import { hero } from "../util/animations";
const Hero = () => {
  return (
    <motion.div variants={hero} initial="initial" animate="animate" className="py-20 mx-10 px-4">
      <div className="font-taiheritage text-7xl text-[#e8a53e] ">
        Jeremiah Eledia
      </div>
      <div className="font-montserrat text-4xl ">Software Developer</div>
      <div className="py-5 font-montserrat text-1xl ">
        Hi! I'm a Software developer who loves building <br/>
        beautiful and user-friendly web apps. I'm detail-oriented, <br/>
        a creative problem-solver, and a great team player. <br/>
        Let's build something amazing together!
      </div>
    </motion.div>
  );
};

export default Hero;
