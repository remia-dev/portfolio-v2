import { motion } from "framer-motion";
import { hero, projects } from "../util/animations";
import bg from "../assets/ecommerce(2).png";
import bg4 from "../assets/SDSS.png";
import bg3 from "../assets/comp.png";
import bg5 from "../assets/final.png";
import bg6 from "../assets/plsfinal2.png";
import bg7 from "../assets/MS.png";

const Projects = () => {
  return (
    <div className="mx-10 px-4 py-10 ">
      <motion.div
        variants={hero}
        initial="initial"
        animate="animate"
        className="w-full rounded-lg gap-10 relative flex md:flex-row flex-col "
      >
        <div className="md:w-[50%] lg:w-2/5 h-[400px] bg-slate-200  rounded-3xl  hover:scale-[105%] duration-100 transition ease-in overflow-hidden">
          <a href="https://ecom-v2-jet.vercel.app/" target="_blank">
            <img src={bg} className="h-full w-full" alt="" />
          </a>
        </div>
        <div className="md:w-[50%] lg:w-3/5  h-[400px] bg-slate-200 rounded-3xl hover:scale-[105%] duration-100 transition ease-in relative overflow-hidden">
          <a href="https://github.com/remia-dev/chippy" target="_blank">
            <img src={bg5} className="h-full w-full" alt="" />
          </a>
        </div>
      </motion.div>
      <motion.div
        variants={hero}
        initial="initial"
        animate="animate"
        className="w-full rounded-lg flex gap-10 my-10 md:flex-row flex-col"
      >
        <div className="md:w-[50%] lg:w-[50%] h-[350px] bg-slate-200 rounded-3xl block hover:scale-[105%] duration-100 transition ease-in overflow-hidden">
          <a href="https://jiro-ms.onrender.com/" target="_blank">
            <img src={bg7} className="h-full w-full" alt="" />
          </a>
        </div>
        <div className="md:w-[50%] lg:w-[50%] h-[350px] bg-slate-200 rounded-3xl block hover:scale-[105%] duration-100 transiiton ease-in overflow-hidden">
          <a href="https://pizza-palooza.vercel.app/" target="_blank">
            <img src={bg6} className="h-[100%] w-[500%] bg-no-repeat" alt="" />
          </a>
        </div>
      </motion.div>
      <motion.div
        variants={projects}
        initial="initial"
        animate="animate"
        className="w-full"
      >
        <div className="font-montserrat flex justify-center text-3xl my-10">
          Other Projects
        </div>
        <div className="flex rounded-lg gap-10 md:flex-row flex-col">
          <div className="md:w-[50%] lg:w-[50%] h-[300px] bg-slate-200 rounded-3xl block hover:scale-[105%] duration-100 transition ease-in overflow-hidden">
            <a
              href="https://github.com/remia-dev/Competitive-Programming"
              target="_blank"
            >
              <img src={bg3} className="w-full h-full" alt="" />
            </a>
          </div>
          <div className="md:w-[50%] lg:w-[50%] h-[300px] bg-slate-200 rounded-3xl block hover:scale-[105%] duration-100 transiiton ease-in overflow-hidden">
            <a
              href="https://github.com/remia-dev/Galaxy-Star-Classification/blob/main/NeuralNetworkSDSS.ipynb"
              target="_blank"
            >
              <img src={bg4} alt="" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
