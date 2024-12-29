import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,  projectban } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        
        <ProjectsCard
          title="Glamora E-commerce Website"
          des={
            <div>
                <p>
                Developed a dynamic and user-friendly e-commerce website featuring a secure payment gateway. This project integrated modern technologies to provide an end-to-end shopping experience for users, from browsing products to order placement and payment processing.
                </p>
                <li>Tools & Technologies: React.js, Spring Boot, Rest Api, Java, MySQL, JDBC</li>
            </div>
          }
          src={projectTwo}
          gitlink={"https://github.com/MsPingle/Glamora.git"}
        />
        <ProjectsCard
          title="Restrorunt Webpage"
          des={
            <div>
                <p>
                Designed and developed a responsive and visually appealing restaurant website using HTML, CSS, and Bootstrap. </p>
                <li>Integrated modern UI components such as navigation bars, carousels</li>
            </div>
          }
          src={projectTwo}
          gitlink={"https://github.com/MsPingle/restaurants.git"}
        />
        <ProjectsCard
          title="Heart disease prediction"
          des={
            <div>
                <p>
                A machine learning model using Python, Scikit-learn, and Pandas to predict heart disease. </p>
                <li>Achieved a high accuracy score upto 20\% through data preprocessing.</li>
            </div>
          }
          src={projectban}
          gitlink={"https://github.com/MsPingle/HeartDiseasePrediction.git"}
        />
       
        
      </div>
    </section>
  );
}

export default Projects