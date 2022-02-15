import * as React from "react";
import { css } from "@emotion/css";
import Layout from "../component/layout";
import ProjectsImages from "../component/projectsImages";
import { Link } from "gatsby";

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
              width: 38.48vw;
              height: auto;
              left: 5.46vw;
              top: 48.68vh;
              filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            `}
            alt="Manifesto"
          />
          <Link to="/guerilla-open-access" >
          <img
            src={ProjectsImages.GOpenAcc}
            className={css`
              position: absolute;
              width: 13.43vw;
              height: auto;
              left: 10.93vw;
              top: 72.86vh;
              filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            `}
            alt="Guerilla open access manifesto"
          />
          </Link>
          <Link to="/cyber-femisit" >
          <img
            src={ProjectsImages.CyberFem}
            className={css`
              position: absolute;
              width: 13.64vw;
              height: auto;
              left: 45.41vw;
              top: 29.88vh;
              filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));          
            `}
            alt="The cyber feminist manifesto for the 21st century"
          />
          </Link>
          <Link to="/digital-humanities" >
          <img
            src={ProjectsImages.DGTalHumn}
            className={css`
              position: absolute;
              width: 26.71vw;
              height: auto;
              left: 27.86vw;
              top: 120.38vh;
              filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            `}
            alt="Digital humanities manifesto"
          />
          </Link>
          <Link to="/queer-nation" >
          <img
            src={ProjectsImages.QNation}
            className={css`
              position: absolute;
              width: 27.81vw;
              height: auto;
              left: 64.73vw;
              top: 87.11vh;
              filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            `}
            alt="The queer nation manifesto"
          />
          </Link>
        </div>  
      </div>
    </Layout>
  )
}

export default Projects;
