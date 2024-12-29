import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2> */}
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Developer - Intern"
            subTitle="Ai Variant"
            result="09/2024 - 12/2024"
            des={
              <div>
                <p>
<li>Designed and developed 15+ REST API’s using Spring Boot to handle product management, user
authentication, and order processing.</li>
<li>Built responsive user interfaces using React.js, Bootstrap, and Tailwind CSS, improving page load times by 30.</li>
<li>Managed a MySQL database with 10+ tables for product catalogs, user profiles, and order histories, optimizing</li>
queries for faster data retrieval.</p>
              </div>
            }
          />
          
          <ResumeCard
            title="Data Scientist- Intern"
            subTitle="SecureEra PVT"
            result="02/2022 - 05/2022"
            des={
              <div>
                <p>
<li>Worked with large datasets to analyze trends and patterns.</li>
<li>Assisted in developing machine learning models,improving predictive accuracy by 15%.</li>
<li> Utilized Python for data cleaning, pre-processing, and visualization to support strategic initiatives.</li></p>
              </div>
            }
          />
          <ResumeCard
            title="Data Scientist- Intern"
            subTitle="Knowledge Solution India"
            result="09/2021 - 10/2021"
            des={
              <div>
                <p>
<li>Worked on data analysis tasks to extract valuable insights from structured and unstructured datasets.</li>
<li>Assisted in building machine learning models and algorithms for predictive analytics,improving predictive accuracy by 15% to 20%.</li>
<li> Utilized Python for data cleaning, pre-processing, and visualization to support strategic initiatives.</li></p>
              </div>
            }
          />
          
        </div>
      </div>
      
      
    </motion.div>
  );
};

export default Experience;
