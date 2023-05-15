import { motion } from "framer-motion";
import { hero } from "../util/animations";
const Footer = () => {
    const currentYear = new Date().getFullYear();


  return (
    <motion.div variants={hero} initial="initial" animate="animate"  className="py-10 px-4 flex items-center justify-between">
      <div className="font-montserrat text-slate-400">
        <div>&copy; {currentYear} portfolio by remia  </div>
      </div>
      <div className="hidden md:block">
        <ul className="items-center w-screen md:w-auto md:flex font-montserrat">
            <li><a href="https://drive.google.com/file/d/1Y7JQU-LjymH6wNF68z6YEBTvBq6Ftwwk/view?usp=share_link" target="_blank">résumé</a></li>
            <div className="px-2">|</div>
            <li><a href="https://www.linkedin.com/in/jeremiah-eledia-1765791a9/" target="_blank">linkedIn</a> </li>
            <div className="px-2">|</div>
            <li><a href="https://www.instagram.com/jere.eledia/" target="_blank">instagram</a> </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Footer;
