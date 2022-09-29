import {
  FaJsSquare,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaJira,
} from "react-icons/fa";

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-7xl font-bold text-cyan-500 mt-10">Skills</div>
      <div className="grid grid-cols-2 md:grid md:grid-cols-4 gap-16 mt-10">
        <div className="bg-transparent shadow-lg shadow-black rounded-lg p-3 pt-5 pb-5">
          <FaHtml5 className="w-40 h-32" color="cyan" />
          <div className="text-2xl text-center font-bold text-white">HTML5</div>
        </div>

        <div className="bg-transparent shadow-lg shadow-black rounded-lg p-3 pt-5 pb-5">
          <FaCss3Alt className="w-40 h-32" color="cyan" />
          <div className="text-2xl text-center font-bold text-white">CSS3</div>
        </div>
        <div className="bg-transparent shadow-lg shadow-black rounded-lg p-3 pt-5 pb-5">
          <FaJsSquare className="w-40 h-32" color="cyan" />
          <div className="text-2xl text-center font-bold text-white">JS</div>
        </div>
        <div className="bg-transparent shadow-lg shadow-black rounded-lg p-3 pt-5 pb-5">
          <FaReact className="w-40 h-32" color="cyan" />
          <div className="text-2xl text-center font-bold text-white">REACT</div>
        </div>
        <div className="bg-transparent shadow-lg shadow-black rounded-lg p-3 pt-5 pb-5">
          <FaAws className="w-40 h-32" color="cyan" />
          <div className="text-2xl text-center font-bold text-white">AWS</div>
        </div>
        <div className="bg-transparent shadow-lg shadow-black rounded-lg p-3 pt-5 pb-5">
          <FaGitAlt className="w-40 h-32" color="cyan" />
          <div className="text-2xl text-center font-bold text-white">GIT</div>
        </div>
        <div className="bg-transparent shadow-lg shadow-black rounded-lg p-3 pt-5 pb-5">
          <FaGithub className="w-40 h-32" color="cyan" />
          <div className="text-2xl text-center font-bold text-white">
            GITHUB
          </div>
        </div>
        <div className="bg-transparent shadow-lg shadow-black rounded-lg p-3 pt-5 pb-5">
          <FaJira className="w-40 h-32" color="cyan" />
          <div className="text-2xl text-center font-bold text-white">JIRA</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
