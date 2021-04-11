import { SoundOutlined } from "@ant-design/icons";
import { Button, Space, Tooltip } from "antd";
import React, { useState } from "react";
import { soundWord } from "../../sound/sound";
import { URL } from "../../api/Api";
import Paragraph from "antd/lib/typography/Paragraph";

interface Props {
  text: string;
  textTranslate: string;
  audio: string;
}
export default function Text({ text, textTranslate, audio }: Props) {
  const [isEn, setEn] = useState(true);
  return (
    <>
      <Space>
        <Tooltip title="Кликните чтобы перевести текст">
          <h2
            onClick={() => setEn(!isEn)}
            dangerouslySetInnerHTML={{ __html: isEn ? text : textTranslate }}
          />
        </Tooltip>

        <Button
          size="small"
          type="primary"
          shape="circle"
          icon={<SoundOutlined />}
          onClick={() => soundWord(URL + audio)}
        />
      </Space>
    </>
  );
}
