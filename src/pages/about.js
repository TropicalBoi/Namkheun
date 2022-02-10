import * as React from "react";
import { css } from "@emotion/css";
import Layout from "../component/layout";

const About = () => {
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
          height: 305.59vh;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        `}>
          <div className={css`
            width: 62.55vw;
            height: 106.54vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-family: moderat-meduim;
            font-style: normal;
            font-weight: 500;
            font-size: 3.125vw;
            letter-spacing: 0.02em;
          `}>
            <p>
              Namkheun is translated as ‘rising tides’,
              <span> (น้ำขึ้น) </span>
              is a literary collective based in Bangkok, Thailand.
            </p>
            <p>
              Namkheun is a product of disgruntled text exchanges and
              over-the-phone gossip sessions between two friends over the years.
              Together, we raged over the state of the world. Together,
              we shared memes, unfulfilled dreams, and personal insights. And so in 2020,
            </p>
            <p>
              Namkheun materialised as an extension of such activities, an open chat if you will.
            </p>
          </div>
          <p className={css`
            width: 62.55vw;
            font-family: BaiJamjuree-Regular;
            font-style: normal;
            font-weight: normal;
            font-size: 2.86vw;
            line-height: 8.23vh;
            letter-spacing: 0.02em;
          `}>
            น้ำขึ้นเป็นคอลเลคทีฟที่ทำงานกับตัวหนังสือ น้ำขึ้นก่อตัวจากการเม้ามอยโฟ่ฝอยระหว่าง
            เพื่อนสนิทสองคนตลอดระยะเวลาหลายปีที่ผ่านมา(และก็ยังคงเป็นอย่างนั้นแหละ) เราบ่น
            เราฉอด เราฟาดสารพัดสิ่งเพราะทุกเรื่องที่(ไม่)มีสาระเริ่มต้นด้วย “มึงง” และจบด้วย “อีดอก”
            เราส่งมีม ส่งต่อความคลังรักส์ ความในจัยและความฝันเพ้อพก ถึงน้ำขึ้นคอลเลคทีฟจะมีตัวตนขึ้นมาเมื่อปี
            2020 ที่ผ่านมา เท่านั้นเอง เราก็มองว่าน้ำขึ้นคือส่วนขยายของสารพัดสิ่งที่เราทำด้วยกันอยู่แล้ว
            เป็นเหมือนโอเพ่นแชทก็ได้
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About;