import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const AboutMe = () => {

     useEffect(() => {
          AOS.init();
          AOS.refresh();
        }, []);
     
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className=" ml-7 "
    >
      <h1 className="text-5xl font-font-rubik mt-14">About Me</h1>
      <p className="mt-4 font-font-rubik text-lg">
        Easin Arafat, an ambitious Higher Secondary Education batch student with
        a passion for crafting immersive web experiences. Embarked on a
        transformative six-month expedition through the intricacies of web
        development, where challenges metamorphosed into invaluable life
        lessons: mastering time, resolving complexities, and sculpting chaos
        into structured code.
        <br />
        <br />
        Successfully concluded the Programming Hero course, meeting each
        milestone with punctuality and precision. This journey has been a
        crucible of knowledge, providing a robust foundation for my endeavors.
        🏆 Within the realm of coding, crafting e-commerce wonders and playful
        applications like Roza or Ice Cream using React is where my heart finds
        joyous expression. Guidance received during the program led to a notable
        achievement—a coveted spot among the 700 selected from a pool of 5000
        for early job placement support. A testament to dedication and
        perseverance.
        <br />
        <br />
        💻 Now, standing at the threshold of adulthood, as an 18-year-old junior
        developer, I harbor aspirations as vast as the code I write. An
        interesting facet of my approach—rechargeability—comes to light. After
        each coding hurdle, a momentary recharge prepares me for the next
        challenge. ⚡ While simplicity defines me, an emotional disposition
        breathes life into my endeavors. A proud flagbearer of my Muslim
        heritage, my unique lens brings forth a simple yet impactful
        perspective. Embracing my emotions as both a strength and a weakness, I
        navigate the world of web development with a unique blend of passion and
        sensitivity. Expressing heartfelt gratitude for your time in perusing my
        profile and delving into this summary. Each engagement is akin to a
        shared smile! Let's connect and embark on a journey of collaboration and
        shared happiness. ✨ Cheers to joyful discoveries, boundless
        exploration, and the pursuit of happiness through every line of code and
        journey traveled! Top
        <br />
        <br />
        Learning: I believe in the power of continuous learning. Beyond formal
        education, I immerse myself in self-directed learning, exploring new
        technologies and staying updated with industry trends.
      </p>
    </div>
  );
};

export default AboutMe;
