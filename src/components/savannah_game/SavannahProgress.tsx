import React from "react";
import { Tooltip, Progress} from 'antd';

export default function ProgressBar({data}: any) {
return (
 <>
 <Tooltip title={`${data[0]} success / ${data[1]} fail`}>
      <Progress strokeColor={{'0%': '#f61c1c',
        '100%': '#f61c1c',}} percent={(data[0] + data[1]) * 10} success={{ percent: data[0] * 10 }} />
        1
      </Tooltip>
 </>
)
}