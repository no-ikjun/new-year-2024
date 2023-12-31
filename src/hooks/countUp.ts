import { useEffect, useState } from "react";

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export default function useCountNum(end: number, start = 0, duration = 2500) {
  const [count, setCount] = useState(start);
  const frameRate = 1000 / 60;
  const totalFrame = Math.round(duration / frameRate);

  useEffect(() => {
    let frame = 0;
    const frameRate = 1000 / 60;
    const totalFrame = Math.round(duration / frameRate);
    let currentNumber = start;

    const counter = setInterval(() => {
      frame++;
      const progress = easeOutExpo(frame / totalFrame);
      setCount(Math.round(end * progress));

      if (frame === totalFrame) {
        clearInterval(counter);
      }
    }, frameRate);

    // 이전 setInterval 정리
    return () => clearInterval(counter);
  }, [end, start, duration]);

  return count;
}
