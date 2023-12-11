import Typewriter from "typewriter-effect";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <div className="w-72 mt-20 mx-auto">
        <img
          className=""
          src="https://i.ibb.co/6N79HnP/394559949-374692381622478-7628019852304827346-n.jpg"
          alt=""
        />
      </div>
      <div>
        <h3 className="text-center font-mono text-xl">
          👋 Hallo I'm Easin Arafat 👨‍💻
        </h3>
        <h1 className="uppercase text-5xl font-orbitron ">junior</h1>
        <h1 className="uppercase text-6xl font-orbitron font-bold">
          <Typewriter
            options={{
              strings: [
                `MERN Stack web developer `,
                "react developer",
                "javascript developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div>
          <h1 className="mt-10 uppercase font-orbitron border-b-1 w-96">
            social media 🔍
          </h1>
          <p className="mt-10 flex gap-5">
               <a className="" href="https://www.facebook.com/profile.php?id=100072451573313">
                    <FaFacebook color="blue" size={30}/>
               </a>
               <a href="https://github.com/Easin2023">
                    <FaGithub size={30}/>
               </a>
               <a href="https://www.linkedin.com/in/easinarafatwebdev/">
                   <h1 className="text-[#0077B5]"> <FaLinkedin size={30}/></h1>
               </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
