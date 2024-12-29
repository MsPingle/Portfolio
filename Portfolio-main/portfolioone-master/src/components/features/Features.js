import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe,FaJs, FaJava, FaPython, FaCode, FaHtml5, FaCss3, FaLaptopCode, FaReact, FaBootstrap, FaDatabase, FaMicrochip, FaTools, FaGit, FaGitlab, FaGitAlt } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="My"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="My" des="Skills" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Programming Languages "
          des={
            <div className="grid grid-cols-1 xs:grid-cols-2 xs:grid-cols-3 gap-2">
             <div className="flex flex-col items-center">
                <span className="text-3xl text-red-500">
                  <FaJava title="Java" />
                </span>
                <span className="text-xs font-small mt-2">Java</span>
              </div>

              <div className="flex flex-col items-center">
                  <span className="text-3xl text-red-500">
                    <FaPython title="Python" />
                  </span>
                  <span className="text-xs font-small mt-2">Python</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-3xl text-red-500">
                  <FaJs title="JavaScript" />
                </span>
                <span className="text-xs font-small mt-2">JavaScript</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl text-red-500">
                  <FaHtml5 title="HTML" />
                </span>
                <span className="text-xs font-small mt-2">HTML</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl text-red-500">
                  <FaCss3 title="CSS" />
                </span>
                <span className="text-xs font-small mt-2">CSS</span>
              </div>
            </div>
            
        }
        icon = {<FaCode/>}
         
        />
        <Card
          title="Frameworks/Libraries"
          des={
            <div className="grid grid-cols-1 xs:grid-cols-2 xs:grid-cols-3 gap-2">
              <div className="flex flex-col items-center">
                <span className="text-3xl text-red-500">
                  <FaJava title="hibernate" />
                </span>
                <span className="text-xs font-small mt-2">hibernate</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl text-red-500">
                  <FaJava title="springboot" />
                </span>
                <span className="text-xs font-small mt-2">SpringBoot</span>
                
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl text-red-500">
                  <FaReact title="ReactJs" />
                </span>
                <span className="text-xs font-small mt-2">React.js</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl text-red-500">
                  <FaBootstrap title="bootstrap" />
                </span>
                <span className="text-xs font-small mt-2">BootStrap</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl text-red-500">
                  <FaCss3 title="tailwind" />
                </span>
                <span className="text-xs font-small mt-2">Tailwind CSS</span>
              </div>
            </div>
          }
          icon={<FaLaptopCode />}
        />
        <Card
          title="DataBase"
          des={
            <div className="grid grid-cols-1 xs:grid-cols-2 xs:grid-cols-3 gap-2">
              <div className="flex flex-col items-center">
                <span className="text-3xl text-red-500">
                  <FaDatabase title="Mysql" />
                </span>
                <span className="text-xs font-small mt-2">MySQL</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl text-red-500">
                  <FaJava title="JDBC" />
                </span>
                <span className="text-xs font-small mt-2">JDBC</span>
              </div>
            </div>

          }
          icon={<FaDatabase/>}
        />
        <Card
          title="Technologies"
          des={
            <div className="grid grid-cols-1 xs:grid-cols-2 xs:grid-cols-3 gap-2">
              <div className="flex flex-col items-center">
                <span className="text-3xl text-red-500">
                  <FaJava title="J2EE" />
                </span>
                <span className="text-xs font-small mt-2">J2EE</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl text-red-500">
                  <FaPython title="pandas" />
                </span>
                <span className="text-xs font-small mt-2">Pandas</span>
              </div>
              
            </div>
          }
          icon={<FaMicrochip />}
        />
        <Card
          title="Tools"
          des={
            <div className="grid grid-cols-1 xs:grid-cols-2 xs:grid-cols-3 gap-2">
              <div className="flex flex-col items-center">
                <span className="text-3xl text-red-500">
                  <FaGitAlt title="git" />
                </span>
                <span className="text-xs font-small mt-2">Git</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl text-red-500">
                  <FaCode title="Rest" />
                </span>
                <span className="text-xs font-small mt-2">REST API</span>
              </div>
            </div>
          }
          icon={<FaTools />}
        />
        
      </div>
    </section>
  );
}

export default Features