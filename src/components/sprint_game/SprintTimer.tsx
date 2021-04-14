import React, { useEffect, useState } from "react";
import { Progress } from "antd";

export default function SprintTimer({ timeout }: any) {
  const [timer, setTimer] = useState<number>(60);

  useEffect(() => {
    let time = setTimeout(() => setTimer(timer - 1), 1000);
    if (timer === 0) {
      clearTimeout(time);
      timeout(true);
    }
    return () => clearTimeout(time);
  }, [timer]);

  return (
    <>
      <Progress
        strokeColor={{
          "0%": "#e66465",
          "100%": "#9198e5",
        }}
        type="circle"
        percent={(timer / 60) * 100}
        format={(percent) => timer}
      />
    </>
  );
}
