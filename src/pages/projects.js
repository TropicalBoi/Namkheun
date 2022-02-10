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
        height: 229.56vh;
        background-color: white;
      `}>
          <img
            src={ProjectsImages.GOpenAcc}
            className={css`
              position: absolute;
              width: 13.4375vw;
              height: auto;
              left: 38.69vw;
              top: 27.66vh;
              filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            `}
            alt="Guerilla open access menifesto"
          />
          <img
            src={ProjectsImages.CyberFem}
            className={css`
              position: absolute;
              width: 13.64vw;
              height: auto;
              left: 60.57vw;
              top: 29.88vh;
              filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));          
            `}
            alt="The cyber feminist menifesto for the 21st century"
          />
          <img
            src={ProjectsImages.DGTalHumn}
            className={css`
              position: absolute;
              width:  26.71875vw;
              height: auto;
              left: 18.69vw;
              top: 110.66vh;
              filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            `}
            alt="Digital humanities menifesto"
          />
          <img
            src={ProjectsImages.QNation}
            className={css`
              position: absolute;
              width: 27.8125vw;
              height: auto;
              left: 53.48vw;
              top: 112.59vh;
            `}
            alt="The queer nation menifesto"
          />
        </div>
      </div>
    </Layout>
  )
}

export default Projects;
