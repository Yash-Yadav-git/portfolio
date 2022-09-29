import ReactTypingEffect from "react-typing-effect";
import { FaGithub, FaLinkedinIn, FaTwitter, FaMail } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

const Hero = () => {
  return (
    <div
      id="Home"
      className="flex flex-row  md:flex md:flex-row md:space-x-56   h-full w-full text-white  bg-slate-900 justify-center items-center "
    >
      <div className="ml-5 md:flex flex-col md:m-0 ">
        <div className="bg-gray-700 p-3">
          <a href="https://github.com/Yash-Yadav-git/" target="_blank">
            <FaGithub className="h-12 w-12" color="black" />
          </a>
        </div>
        <div className="bg-blue-400 p-3">
          <a
            href="https://www.linkedin.com/in/yash-yadav-developer"
            target="_blank"
          >
            <FaLinkedinIn className="h-12 w-12" color="black" />
          </a>
        </div>
        <div className="bg-blue-700">
          <a href="https://www.twitter.com/Yash_Yadav18" target="_blanK">
            <FaTwitter className="h-12 w-12" color="black" />
          </a>
        </div>
        <div className="bg-red-700">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=yashyadav78270@gmail.com"
            target="_blank"
          >
            <BiMailSend className="h-12 w-12" color="black" />
          </a>
        </div>
      </div>
      <div className="container space-y-6 p-10 flex flex-col w-full h-5/6 font-semibold tracking-widest ">
        <div className="text-xl text-cyan-500">Hi, my name is</div>
        <div className="text-5xl md:text-8xl">Yash Yadav</div>
        <div className="text-xl flex felx-row- flex-wrap w-2/3 ">
          I am apssionate software engineer foucused on building user experince
          centeric real-world application at{" "}
          <p className="text-cyan-500">EarlySalary</p>
        </div>
        <ReactTypingEffect
          className="text-5-xl md:text-5xl text-cyan-800 font-bold"
          text={["Front-end Engineer", "Web Developer", "Cloud Associate"]}
        />

        {/* <div className="text-8xl">Web developer</div> */}
        <div className="flex justify-center items-center rounded-lg bg-transparent border-2 border-cyan-600 w-44 h-20 hover:bg-cyan-600 hover:text-black">
          <a href="#Projects">
            <div className="text-2xl text-center ">View Work</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
