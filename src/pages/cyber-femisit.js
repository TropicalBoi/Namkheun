import * as React from "react";
import { useState } from "react";
import { css } from "@emotion/css";
import Layout from "../component/layout";
import CyberFemContent from "../images/CyberFem_Article_NK.jpg";

const Cyberfem = () => {
  const [thaiText, setThaiText] = useState(false);

  return (
    <Layout>
      <div
        className={css`
          position: absolute;
          overflow: scroll;
          scrollbar-width: none;
          width: 100vw;
          height: 100vh;
        `}
      >
        <div
          className={css`
            width: 100vw;
            height: 310vh;
            margin-bottom: 20vh;
          `}
        >
          <a id="top"></a>
          <div
            className={css`
              position: absolute;
              width: fit-content;
              height: fir-content;
              left: 2.08vw;
              top: 40.23vh;
            `}
          >
            {!thaiText &&<p className="infoTxt">
              The Cyberfeminist <br></br>
              Manifesto For <br></br>
              the 21st Century
            </p>}
            {thaiText &&<p className="infoThTxt">
              ไซเบอร์เฟมินิสต์แมนิเฟสโต้<br></br>
              แห่งศตวรรษที่ 21
            </p>}
          </div>
          <div
            className={css`
              position: absolute;
              width: 49.375vw;
              height: fit-content;
              left: 25.15vw;
              top: 40.23vh;
            `}
          >
            {!thaiText && <p className="infoTxt">English description available soon.</p>}
            {thaiText && <p className="infoThTxt">
              เขียนโดย VNS Matrix คอลเลคทีฟศิลปินหญิงจากออสเตรเลีย โดยเขียนขึ้น
              ในยุคเดียวกับการเกิดขึ้น และแพร่หลายของอินเตอร์เน็ต
              โลกออนไลน์จึงไม่ได้ เป็นเพียงดินแดนใหม่ของโครงข่ายสังคม
              แต่เป็นการอุปมาถึงความเป็นไปได้
              ในการจินตนาการหรืองัดแงะความสัมพันธ์ทางเพศสภาพที่ 7 โอนเอียงใน
              “โลกเป็นจริง”
            </p>}
          </div>
          <div
            className={css`
              position: absolute;
              width: fit-content;
              height: fit-content;
              left: 79.06vw;
              top: 40.23vh;
            `}
          >
            {!thaiText &&<p className="infoTxt">
              Author<br></br>Year
            </p>}
            {thaiText &&<p className="infoThTxt">
              ผู้เขียน<br></br> ปี
            </p>}
          </div>
          <div
            className={css`
              position: absolute;
              width: fit-content;
              height: fit-content;
              left: 87.18vw;
              top: 40.23vh;
            `}
          >
            {!thaiText &&<p className="infoTxt">
              VNS matrix<br></br>1991
            </p>}
            {thaiText &&<p className="infoThTxt">
              วีเอนเอส เมทริกซ<br></br>2534
            </p>}
          </div>
          <div
            className={css`
              position: absolute;
              width: 5.88vw;
              height: 3.27vh;
              left: 79.06vw;
              top: 52.27vh;
              font-family: moderat-meduim;
              font-style: normal;
              font-weight: 500;
              font-size: 1.45vw;
              letter-spacing: 0.02em;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
            `}
          >
            {thaiText && (
              <p
                className={css`
                  cursor: pointer;
                `}
                onClick={() => setThaiText(!thaiText)}
              >
                EN
              </p>
            )}
            {!thaiText && (
              <p
                className={css`
                  text-decoration: underline;
                `}
              >
                EN
              </p>
            )}
            <p>/</p>
            {!thaiText && (
              <p
                className={css`
                  cursor: pointer;
                `}
                onClick={() => setThaiText(!thaiText)}
              >
                TH
              </p>
            )}
            {thaiText && (
              <p
                className={css`
                  text-decoration: underline;
                `}
              >
                TH
              </p>
            )}
          </div>
          <p className={css`
            position: absolute;
            left: 25.15625vw;
            top: 66.31vh;
            font-family: Moderat;
            font-style: normal;
            font-weight: 500;
            font-size: 1.45vw;
            letter-spacing: 0.02em;
          `}>PDF ;)</p>
          <img
            src={CyberFemContent}
            className={css`
              position: absolute;
              width: 56.25vw;
              height: auto;
              left: 25.15625vw;
              top: 75.29vh;
            `}
            alt="content image"
          />
          <div className={css`            
            position: absolute;
            width:  49.375vw;
            height: fit-content;
            left: 25.3125vw;
            top: 229.03vh;
          `}>
            {!thaiText &&<p className="infoTxt txtcenter">
              We are the modern cunt <br></br>
              positive anti reason <br></br>
              unbounded unleashed unforgiving <br></br>
              we see art with our cunt we make art with our cunt <br></br>
              we believe in jouissance madness holiness and poetry <br></br>
              we are the virus of the new world disorder <br></br>
              rupturing the symbolic from within <br></br>
              saboteurs of big daddy mainframe <br></br>
              the clitoris is a direct line to the matrix <br></br>
              the VNS MATRIX <br></br>
              terminators of the moral codes <br></br>
              mercenaries of slime <br></br>
              go down on the altar of abjection <br></br>
              probing the visceral temple we speak in tongues <br></br>
              infiltrating disrupting disseminating <br></br>
              corrupting the discourse <br></br>
              we are the future cunt <br></br>
            </p>}
            {thaiText &&<p className="infoThTxt txtcenter">
              พวกเราหีโมเดิร์น <br></br>
              แน่นอน แอนตี้เหตุผล <br></br>
              ไม่จำกัด อัดไม่ยั้ง ไม่ปรานี <br></br>
              เสพศิลปะด้วยหี สร้างศิลปะด้วยหี<br></br>
              เราเชื่อในตัณหา ความคลั่ง ความขลัง และบทกวี <br></br>
              พวกเราคือไวรัสในระเบียบโลกใหม่<br></br>
              ทะลวงที่เป็นสัญลักษณ์จากภายใน <br></br>
              หนอนชอนไชป๋าเมนเฟรม <br></br>
              คลิตอริสคือสายตรงสู่เมทริกซ์<br></br>
              วีเอนเอส เมทริกซ์ <br></br>
              ผู้ทำลายศีลธรรม <br></br>
              ผู้รับจ้างสไลม์ <br></br>
              ลงเลียศาลแห่งความทราม <br></br>
              มือแหวกสถูปแห่งเนื้อหนัง ปากพึมพำคำผี <br></br>
              แทรกซึม ขัดขวาง เผยแพร่ <br></br>
              บ่อนแซะวาทกรรม<br></br>
              พวกเราคือหีแห่งอนาคต <br></br>
            </p>}
          </div>
          <div className={css`
            position: absolute;
            width: 100vw;
            height: fit-content;
            top: 311.61vh;
            display: flex;
            justify-content: center;
            font-family: Moderat;
            font-style: normal;
            font-weight: 500;
            font-size: 3.125vw;
            text-align: center;
            letter-spacing: 0.02em;
          `}>
          <a href="#top">Back to top</a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cyberfem;
