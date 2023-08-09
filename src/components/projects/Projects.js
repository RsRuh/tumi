import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT OUR ADMINS & MODERATORS PROFILE"
          des="OUR ADMINS & MODERATORS"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Nowrin Jahan Nila"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
          idLink="https://www.facebook.com/profile.php?id=100010465983769"
          role="Admin"
        />
        <ProjectsCard
          title=""
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
          idLink="https://www.facebook.com/profile.php?id=100090619907863"
          role="Admin"
        />
        <ProjectsCard
          title="Nidhi Afrin Safa"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
          idLink="https://www.facebook.com/profile.php?id=100087741426969"
          role="Admin"
        />
        <ProjectsCard
          title="Safa Rahman"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectFour}
          idLink="https://www.facebook.com/eyasfi.jui.i/"
          role="Moderator"
        />
        <ProjectsCard
          title="Tamanna Tammu"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectFive}
          idLink="https://www.facebook.com/profile.php?id=100095292459920"
          role="Moderator"
        />
        <ProjectsCard
          title="Tashfia Tisha"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectSix}
          idLink="https://www.facebook.com/profile.php?id=100095317188442"
          role="Moderator"
        />
      </div>
    </section>
  );
}

export default Projects