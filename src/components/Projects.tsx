import { motion } from "framer-motion";
import { hero, projects } from "../util/animations";

const Projects = () => {
  return (
    <div className="mx-10 px-4 py-10 ">
      <motion.div variants={hero} initial="initial" animate="animate" className="w-full rounded-lg gap-10 relative flex md:flex-row flex-col ">
        <div className="md:w-[50%] lg:w-2/5 h-[400px] bg-slate-200 rounded-3xl  hover:scale-[105%] duration-100 transition ease-in overflow-hidden ">
          <div className="font-montserrat py-5 px-5">
            <div className="flex justify-start text-2xl text-white">Title </div>
          </div>
        </div>
        <div className="md:w-[50%] lg:w-3/5  h-[400px] bg-slate-200 rounded-3xl hover:scale-[105%] duration-100 transition ease-in relative">
          <div className="font-montserrat py-5 px-5">
            <div className="flex justify-start text-2xl text-white">Title </div>
          </div>
        </div>
      </motion.div>
      <motion.div variants={hero} initial="initial" animate="animate" className="w-full rounded-lg flex gap-10 my-10 md:flex-row flex-col">
        <div className="md:w-[50%] lg:w-[60%] h-[400px] bg-slate-200 rounded-3xl block hover:scale-[105%] duration-100 transition ease-in">
          <div className="font-montserrat py-5 px-5">
            <div className="flex justify-start text-2xl text-white">Title </div>
          </div>
        </div>
        <div className="md:w-[50%] lg:w-[40%] h-[400px] bg-slate-200 rounded-3xl block hover:scale-[105%] duration-100 transiiton ease-in">
          <div className="font-montserrat py-5 px-5">
            <div className="flex justify-start text-2xl text-white">Title </div>
          </div>
        </div>
      </motion.div>
      <motion.div variants={projects} initial="initial" animate="animate" className="w-full">
        <div className="font-montserrat flex justify-center text-3xl my-10">
          Other Projects
        </div>
        <div className="flex rounded-lg gap-10 md:flex-row flex-col">
          <div className="md:w-[50%] lg:w-[50%] h-[300px] bg-slate-200 rounded-3xl block hover:scale-[105%] duration-100 transition ease-in">
            <div className="font-montserrat py-5 px-5">
              <div className="flex justify-start text-2xl text-white">Title </div>
            </div>
          </div>
          <div className="md:w-[50%] lg:w-[50%] h-[300px] bg-slate-200 rounded-3xl block hover:scale-[105%] duration-100 transiiton ease-in">
            <div className="font-montserrat py-5 px-5">
              <div className="flex justify-start text-2xl text-white">Title </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
