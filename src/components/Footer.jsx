import { FaTwitter, FaLinkedinIn, FaMailchimp, FaGithub } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
const Footer = () => {
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center space-y-10 mt-32"
    >
      <div className=" text-cyan-500">What's next?</div>
      <div className="title text-7xl text-cyan-500 mt-20 font-bold">
        Get In Touch
      </div>
      <div className="text-2xl text-white text-">
        So, that's been from my side. Feel free to reach out to me on LinkendIn
        or Twitter. <br></br> If you are a person who prefers mail, well click
        on the button to mail me
      </div>
      <div className="flex flex-row gap-8 items-center">
        <div className=" p-3">
          <a href="https://github.com/Yash-Yadav-git/" target="_blank">
            <FaGithub className="h-12 w-12 " color="white" />
          </a>
        </div>
        <div className=" p-3">
          <a
            href="https://www.linkedin.com/in/yash-yadav-developer"
            target="_blank"
          >
            <FaLinkedinIn className="h-12 w-12" color="white" />
          </a>
        </div>
        <div className="">
          <a href="https://www.twitter.com/Yash_Yadav18" target="_blanK">
            <FaTwitter className="h-12 w-12" color="white" />
          </a>
        </div>
        <div className="">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=yashyadav78270@gmail.com"
            target="_blank"
          >
            <AiFillMail className="h-12 w-12 " color="white" />
          </a>
        </div>
      </div>
      {/* <div className="flex justify-center items-center rounded-lg bg-transparent border-2 border-cyan-600 w-24 h-10 hover:bg-cyan-600 hover:text-black">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=yashyadav78270@gmail.com"
          target="_blank"
        >
          <div className="text-center ">Mail me</div>
        </a>
      </div> */}
    </div>
  );
};

export default Footer;
