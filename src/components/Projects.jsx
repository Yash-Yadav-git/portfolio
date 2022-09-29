import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div id="Projects" className="w-full text-center ">
      <div className="flex flex-col space-y-8">
        <div className="title text-7xl text-cyan-500 mt-20 font-bold">
          Projects
        </div>
      </div>
      <div className="ml-10 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3 mt-14 text-white">
        <div className="bg-transparent rounded-lg shadow-xl shadow-black w-96 m-2">
          <div className="flex flex-col space-y-4">
            <div className="title text-3xl font-semibold">Movie App</div>
            <div className="text-xl text-start p-2">
              This is a movie made using TheMovieDatabase API. A fun project to
              work on for understaing the API and React workings. Made using
              react-router,tailwind-css and daisy-ui
            </div>
            <div className="flex flex-row p-5 justify-evenly items-center">
              <div className="flex justify-center items-center rounded-lg bg-transparent border-2 border-cyan-600 w-24 h-10 hover:bg-cyan-600 hover:text-black">
                <a
                  href="https://d1dzk7ylnak750.cloudfront.net/"
                  target="_blank"
                >
                  <div className="text-center ">View Work</div>
                </a>
              </div>
              <a
                href="https://github.com/Yash-Yadav-git/aficionado"
                target="_blank"
              >
                <FaGithub className="w-52 h-10 hover:text-cyan-500" />
              </a>
            </div>
          </div>
        </div>
        {/* Second project */}
        <div className="bg-transparent rounded-lg shadow-xl shadow-black w-96 m-2">
          <div className="flex flex-col space-y-4">
            <div className="title text-3xl">Github Profile finder</div>
            <div className="text-xl text-start p-2">
              Project made using Github API. To search github users and view
              their stats. Made using
              create-react-app,conetx-api,tailwind-css,daisy-ui&react-router
            </div>
            <div className="flex flex-row p-5 justify-evenly items-center">
              <div className="flex justify-center items-center rounded-lg bg-transparent border-2 border-cyan-600 w-24 h-10 hover:bg-cyan-600 hover:text-black">
                <a
                  href="https://d246j4gvwl6kh6.cloudfront.net/"
                  target="_blank"
                >
                  <div className="text-center ">View Work</div>
                </a>
              </div>
              <a
                href="https://github.com/Yash-Yadav-git/github-finder"
                target="_blank"
              >
                <FaGithub className="w-52 h-10 hover:text-cyan-500" />
              </a>
            </div>
          </div>
        </div>
        {/* Sixth Project */}
        <div className="bg-transparent rounded-lg shadow-xl shadow-black w-96 m-2">
          <div className="flex flex-col space-y-4 space-between">
            <div className="title text-3xl">Meme Generator</div>
            <div className="text-xl text-start p-2">
              Meme app made using react-hooks,vanilla-css and imgurl api
            </div>
            <div className="flex flex-row p-5 justify-evenly items-center">
              <div className="flex justify-center items-center rounded-lg bg-transparent border-2 border-cyan-600 w-24 h-10 hover:bg-cyan-600 hover:text-black">
                <div className="text-center hover:text-cyan-500">View Work</div>
              </div>
              <a
                href="https://github.com/Yash-Yadav-git/meme-generator"
                target="_blank"
              >
                <FaGithub className="w-52 h-10" />
              </a>
            </div>
          </div>
        </div>
        {/* Feedback App */}
        <div className="bg-transparent rounded-lg shadow-xl shadow-black w-96 m-2">
          <div className="flex flex-col space-y-4">
            <div className="title text-3xl">Feedback App</div>
            <div className="text-xl text-start p-2">
              App that let's user add feedbacks to any service provided. That
              could be added and deleted. Made using HTML5,CSS and
              create-react-app
            </div>
            <div className="flex flex-row p-5 justify-evenly items-center">
              <div className="flex justify-center items-center rounded-lg bg-transparent border-2 border-cyan-600 w-24 h-10 hover:bg-cyan-600 hover:text-black">
                <div className="text-center ">View Work</div>
              </div>
              <a
                href="https://github.com/Yash-Yadav-git/feedback"
                target="_blank"
              >
                <FaGithub className="w-52 h-10 hover:text-cyan-500" />
              </a>
            </div>
          </div>
        </div>
        {/* sdasd   https://github.com/Yash-Yadav-git/feedback */}
        <div className="bg-transparent rounded-lg shadow-xl shadow-black w-96 m-2">
          <div className="flex flex-col space-y-4">
            <div className="title text-3xl">Airbnb UI clone</div>
            <div className="text-xl text-start p-2">Air bnb UI clone</div>
            <div className="flex flex-row p-5 justify-evenly items-center">
              <div className="flex justify-center items-center rounded-lg bg-transparent border-2 border-cyan-600 w-24 h-10 hover:bg-cyan-600 hover:text-black">
                <a
                  href="https://confident-edison-518f5f.netlify.app/"
                  target="_blank"
                >
                  <div className="text-center ">View Work</div>
                </a>
              </div>
              <a
                href="https://github.com/Yash-Yadav-git/airbnb-clone"
                target="_blank"
              >
                <FaGithub className="w-52 h-10 hover:text-cyan-500" />
              </a>
            </div>
          </div>
        </div>
        {/* S */}
      </div>
    </div>
  );
};

export default Projects;
