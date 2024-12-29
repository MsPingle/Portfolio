import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { Excelr, IBMEDA, udemypython } from "../../assets";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">Company Experience</h2> */}
        </div>
        <div className="mt-6 lgl:mt-14 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Java Development Cerfitiction"
            subTitle="From Excelr "
            // result="Success"
            des={
              <div>
                <div>
                    <p>
                        The Full Stack Java Development course from Excelr provided a comprehensive understanding of both frontend and backend development. It covered key technologies such as Java, Spring Boot, HTML, CSS, JavaScript, and databases. The course involved hands-on projects and industry-relevant practices, equipping me with the skills to develop scalable and efficient web applications.
                    </p>
                    <img 
                        src={Excelr} 
                        alt="Full Stack Java Development Certificate" 
                        style={{ width: '30%', height: '45%', borderRadius: '8px' }} 
                    />
                </div>
              </div>
            }
          />
          <ResumeCard
            title="Python Masterclass Certification"
            subTitle="From udemy"
            // result="Success"
            des={
              <div>
                <div>
                    <p>The Udemy Python Masterclass Certification covers fundamental to advanced Python programming concepts, including data structures, object-oriented programming, and web development. It equips learners with practical coding skills through hands-on projects and exercises.</p>
                    <img 
                        src={udemypython} 
                        alt="Full Stack Java Development Certificate" 
                        style={{ width: '30%', height: '45%', borderRadius: '8px' }} 
                    />
                </div>
              </div>
            }
          />
          <ResumeCard
            title="Exploratory Data Analysis for Machine Learning"
            subTitle="From IBM Coursera"
            // result="Success"
            des={
              <div>
                <div>
                    <p>
                    IBM's **Exploratory Data Analysis (EDA) for Machine Learning** focuses on understanding data through statistical and visual techniques. It includes identifying patterns, relationships, and anomalies, preparing data for modeling, and ensuring quality to improve machine learning outcomes. EDA is crucial for feature engineering and informed decision-making.</p>
                    <img 
                        src={IBMEDA} 
                        alt="Full Stack Java Development Certificate" 
                        style={{ width: '30%', height: '45%', borderRadius: '8px' }} 
                    />
                </div>
              </div>
            }
          />
          </div>
          </div>
    </motion.div>
  );
};

export default Achievement;
