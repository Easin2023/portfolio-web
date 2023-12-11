import Typewriter from "typewriter-effect";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className="mt-20 flex justify-center">
        <img
          data-aos="fade-right"
          className=" w-3/12 "
          src="https://i.ibb.co/6N79HnP/394559949-374692381622478-7628019852304827346-n.jpg"
          alt=""
        />
        <div className="divider lg:divider-horizontal"></div>
        <div  data-aos="fade-left" className="mt-20">
          <h3 className=" font-font-ubuntu text-xl">
            Hallo I'm Easin Arafat 👋
          </h3>
          <p className="font-font-ubuntu">
            My favourite Technology React and taileindcss
          </p>
          <p className="mt-4 font-font-ubuntu">
            📨 <span>mdeasinarafat016456@gmail.com</span>
          </p>
          <p>📞 +8801645650504</p>
        </div>
      </div>
      <div data-aos="zoom-in-up" className="mt-14">
        <h1 className="uppercase text-5xl font-font-rubik ">junior</h1>
        <h1 className=" text-6xl uppercase font-font-rubik font-bold">
          <Typewriter
            options={{
              strings: [
                `MERN  Stack  Web  Developer `,
                "React Developer",
                "Javascript Developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div>
          <h1 className="mt-10 uppercase font-font-ubuntu border-b-1 w-96">
            social media 🔍
          </h1>
          <p className="mt-8 flex gap-5">
            <a
              className="p-2 border-1 border-black rounded-full"
              href="https://www.facebook.com/profile.php?id=100072451573313"
            >
              <FaFacebook color="blue" size={20} />
            </a>
            <a
              className="p-2 border-1 border-black rounded-full"
              href="https://github.com/Easin2023"
            >
              <FaGithub size={20} />
            </a>
            <a
              className="p-2 border-1 border-black rounded-full"
              href="https://www.linkedin.com/in/easinarafatwebdev/"
            >
              <h1 className="text-[#0077B5]">
                {" "}
                <FaLinkedin size={20} />
              </h1>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
