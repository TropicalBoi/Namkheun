import * as React from "react";
import { css } from "@emotion/css";
import Layout from "../component/layout";
import ProjectsImages from "../component/projectsImages";

const Projects = () => {
  return (
    <Layout>
      <div className={css`
        position: absolute;
        overflow: scroll;
        scrollbar-width: none;
        width: 100vw;
        height: 100vh;
      `}>
        <div className={css`
        width: 100vw;
        height: 230vh;
        background-color: white;
      `}>
          <img
            src={ProjectsImages.Manifesto}
            className={css`
              position: absolute;
              width: 739px;
              height: auto;
              left: 105px;
              top: 461px;
              filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            `}
            alt="Manifesto"
          />
          <img
            src={ProjectsImages.GOpenAcc}
            className={css`
              position: absolute;
              width: 258px;
              height: auto;
              left: 210px;
              top: 690px;
              filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            `}
            alt="Guerilla open access manifesto"
          />
          <img
            src={ProjectsImages.CyberFem}
            className={css`
              position: absolute;
              width: 262px;
              height: auto;
              left: 872px;
              top: 283px;
              filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));          
            `}
            alt="The cyber feminist manifesto for the 21st century"
          />
          <img
            src={ProjectsImages.DGTalHumn}
            className={css`
              position: absolute;
              width: 513px;
              height: auto;
              left: 535px;
              top: 1140px;
              filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            `}
            alt="Digital humanities manifesto"
          />
          <img
            src={ProjectsImages.QNation}
            className={css`
              position: absolute;
              width: 534px;
              height: auto;
              left: 1243px;
              top: 825px;
              filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            `}
            alt="The queer nation manifesto"
          />
        </div>
      </div>
    </Layout>
  )
}

export default Projects;
