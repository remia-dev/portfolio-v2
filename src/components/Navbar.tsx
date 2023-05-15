import { motion } from "framer-motion";
import { navigation } from "../util/animations";
const Navbar = () => {
  return (
    <nav className="mt-10 py-5">
      <motion.div
        variants={navigation}
        initial="initial"
        animate="animate"
        className="flex items-center justify-between bg-white md:p-0 mx-10 font-montserrat"
      >
        <div className="p-3 px-4 text-1xl text-black sm:block">remia-dev</div>
        <div id="dropdown" className="hidden md:block">
          <ul className="items-center w-screen md:w-auto md:flex">
            <li className="p-4 text-black border-b md:border-0">
              <a href="https://github.com/remia-dev" target="_blank">github</a>
            </li>
            <li className="p-4 text-black border-b md:border-0">
              <a href="https://drive.google.com/file/d/1Y7JQU-LjymH6wNF68z6YEBTvBq6Ftwwk/view?usp=share_link" target="_blank">résumé</a>
            </li>
          </ul>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
