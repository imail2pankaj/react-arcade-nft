import React from 'react';
import Reveal from 'react-awesome-reveal';
import { blurIn } from '../../../keyframes';

export default function Heading3(props) {
  return <div>
    <Reveal keyframes={blurIn}>
      <div className={`headings3 ${props.headclass}`}>
        {
          props.number ?
            <div className="number">
              <h2>{props.number}</h2>
            </div>
            :
            ""
        }
        <div className={`h_text ${props.number ? "h_t_l" : "h_l"}`}>
          <h2 className="stroke">{props.title}</h2>
          <h2 className="no-stroke">{props.title}</h2>
          <h2 className="text-shadow">{props.title}</h2>
        </div>
        <div className={`heading_background ${props.backcolor}`}></div>
      </div>
    </Reveal>
  </div>
}
