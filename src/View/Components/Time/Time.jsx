import React, { useEffect, useState } from 'react';
import './Time.scss'

export default function Time(props) {

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const id = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });
  const timerComponents = Object.keys(timeLeft).map(interval => {

    // if (!timeLeft[interval]) {
    //   return;
    // }

    return (
      <div className="time" key={`time-${interval}`}>
        <div className="time_main">
          <h2>
            {timeLeft[interval] === 0 ? '00' : timeLeft[interval]}{""}
          </h2>
          <span>{interval}</span>
          {
            props.dots === "true" ?
              <div className="dots">
                <span></span>
                <span></span>
              </div>
              :
              ""
          }
        </div>
      </div>
    );
  });
  function calculateTimeLeft() {
    const year = new Date().getFullYear();
    const difference = +new Date(`${year}-${props.Month}-${props.Date}`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }
  return <>{timerComponents.length ? timerComponents : <span>Time's up!</span>}</>
}
