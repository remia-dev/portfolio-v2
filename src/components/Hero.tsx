import { motion } from "framer-motion";
import { hero } from "../util/animations";
const Hero = () => {
  return (
    <motion.div
      variants={hero}
      initial="initial"
      animate="animate"
      className="py-10 mx-10 px-4"
    >
      <div className="font-taiheritage text-7xl text-[#e8a53e] ">
        Jeremiah Eledia
      </div>

      <div className="font-montserrat text-4xl py-2">Software Developer</div>
      <div className="flex gap-2 flex-wrap">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          height="30"
          width="33"
          alt="javascript logo"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
          height="30"
          width="33"
          alt="typescript logo"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          height="30"
          width="33"
          alt="react logo"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
          height="30"
          width="33"
          alt="redux logo"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          height="30"
          width="33"
          alt="html5 logo"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          height="30"
          width="33"
          alt="css3 logo"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
          height="30"
          width="33"
          alt="express logo"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          height="30"
          width="33"
          alt="nodejs logo"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg"
          height="30"
          width="33"
          alt="rust logo"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
          height="30"
          width="33"
          alt="cplusplus logo"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          height="30"
          width="33"
          alt="python logo"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
          height="30"
          width="33"
          alt="linux logo"
        />
      </div>

      <div className="py-5 font-montserrat text-1xl ">
        Hi! I'm a Software developer who loves building 
        beautiful and user-friendly web apps. I'm detail-oriented, 
        a creative problem-solver, and a great team player. 
        Let's build something amazing together!
      </div>
    </motion.div>
  );
};

export default Hero;
