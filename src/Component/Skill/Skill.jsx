import { FaHtml5 } from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMongoose,
  SiNetlify,
  SiVercel,
} from "react-icons/si";
import { FaCss3, FaGithub, FaJs, FaNodeJs, FaReact } from "react-icons/fa6";

const Skill = () => {
  return (
    <div className="ml-7 font-font-ubuntu">
      <h1 className="mt-14 text-5xl font-font-rubik">My Skill</h1>
      <div className="flex gap-3">
        <div className="p-4 flex flex-col items-center border w-20 rounded-lg mt-11">
          <FaHtml5 size={40} />
          <h1>HTML</h1>
        </div>
        <div className="p-4 flex flex-col items-center border w-20 rounded-lg mt-11">
          <FaCss3 size={40} />
          <h1>CSS</h1>
        </div>
        <div className="p-4 flex flex-col items-center border w-20 rounded-lg mt-11">
          <FaJs size={40} />
          <h1>Js</h1>
        </div>
        <div className="p-4 flex flex-col items-center border w-20 rounded-lg mt-11">
          <FaReact size={40} />
          <h1>React</h1>
        </div>
        <div className="p-4 flex flex-col items-center border w-20 rounded-lg mt-11">
          <FaNodeJs size={40} />
          <h1>NodeJs</h1>
        </div>
        <div className="p-4 flex flex-col items-center border w-20 rounded-lg mt-11">
          <SiExpress size={40} />
          <h1>ExpressJS</h1>
        </div>
        <div className="p-4 flex flex-col items-center border w-20 rounded-lg mt-11">
          <SiMongodb size={40} />
          <h1>MongoDB</h1>
        </div>
        <div className="p-4 flex flex-col items-center border w-20 rounded-lg mt-11">
          <SiMongoose size={40} />
          <h1>Mongoose</h1>
        </div>
        <div className="p-4 flex flex-col items-center border w-20 rounded-lg mt-11">
          <SiFirebase size={40} />
          <h1>Firebase</h1>
        </div>
      </div>
      <div>
        <h1 className="text-3xl mt-2">Tools</h1>
        <div className="flex gap-4">
          <div className="p-4 flex flex-col items-center border w-20 rounded-lg mt-11">
            <FaGithub size={40} />
            <h1>GitHub</h1>
          </div>
          <div className="p-4 flex flex-col items-center border w-20 rounded-lg mt-11">
            <SiNetlify size={40} />
            <h1>Netlify</h1>
          </div>
          <div className="p-4 flex flex-col items-center border w-20 rounded-lg mt-11">
            <SiVercel size={40} />
            <h1>Vercel</h1>
          </div>
        </div>
      </div>
      <div>
          <h1 className="text-3xl mt-10">Soft Skills</h1>
          <p className="text-xl mt-4">👉 Hard working || Management || Time Management || LeaderShip </p>
      </div>
    </div>
  );
};

export default Skill;
