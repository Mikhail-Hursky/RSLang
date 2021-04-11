import { DeleteOutlined, StarOutlined, StarFilled } from "@ant-design/icons";
import { Button, message, Tooltip } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Api } from "../../api/Api";
import { setUserWords } from "../../redux/action/userAction";
import { State } from "../../redux/reducer/rootReducer";

interface Props {
  wordId: string;
  setIdWord(id: string): void;
  isHard: boolean;
}

export default function Buttons({ isHard, wordId, setIdWord }: Props) {
  const dispatch = useDispatch();
  const [isLoadingDelete, setLoadingDelete] = useState(false);
  const [isLoadingHard, setLoadingHard] = useState(false);
  const [hard, setHard] = useState(isHard);
  const { token, userId } = useSelector((state: State) => state.user);
  const { btnDelete, btnHard } = useSelector((state: State) => state.setting);

  return (
    <>
      {btnHard ? (
        hard ? (
          <Tooltip title="Убрать из сложных">
            <Button
              type="primary"
              size="large"
              onClick={() => {
                setLoadingHard(true);
                Api.setUserWord(token, userId, wordId, "LEARNED")
                  .then(() => {
                    message.success("Слово убрано из сложных");
                    setHard(false);
                  })
                  .catch(() => {
                    Api.updateUserWord(token, userId, wordId, "LEARNED")
                      .then(() => {
                        message.success("Слово убрано из сложных");
                        setHard(false);
                      })
                      .catch(() => message.error("Ой, что-то пошло не так..."));
                  })
                  .finally(() => {
                    setLoadingHard(false);
                    dispatch(setUserWords(token, userId));
                  });
              }}
              className="add-to-hard"
              icon={<StarFilled style={{ color: "yellow" }} />}
              shape="circle"
              disabled={isLoadingDelete}
              loading={isLoadingHard}
            />
          </Tooltip>
        ) : (
          <Tooltip title="Отметить как сложное">
            <Button
              type="primary"
              size="large"
              onClick={() => {
                setLoadingHard(true);
                Api.setUserWord(token, userId, wordId, "HARD")
                  .then(() => {
                    message.success("Слово добавлено в сложные");
                    setHard(true);
                  })
                  .catch(() => {
                    Api.updateUserWord(token, userId, wordId, "HARD")
                      .then(() => {
                        message.success("Слово добавлено в сложные");
                        setHard(true);
                      })
                      .catch(() => message.error("Ой, что-то пошло не так..."));
                  })
                  .finally(() => {
                    setLoadingHard(false);
                    dispatch(setUserWords(token, userId));
                  });
              }}
              className="add-to-hard"
              icon={<StarOutlined />}
              shape="circle"
              disabled={isLoadingDelete}
              loading={isLoadingHard}
            />
          </Tooltip>
        )
      ) : (
        <></>
      )}

      {btnDelete ? (
        <Tooltip title="Удалить из изучаемых">
          <Button
            loading={isLoadingDelete}
            type="primary"
            danger
            size="large"
            onClick={() => {
              setLoadingDelete(true);
              Api.setUserWord(token, userId, wordId, "DELETED")
                .then(() => {
                  setIdWord(wordId);
                  message.success("Слово добавлено в удаленные");
                })
                .catch(() => {
                  Api.updateUserWord(token, userId, wordId, "DELETED")
                    .then(() => {
                      setIdWord(wordId);
                      message.success("Слово добавлено в удаленные");
                    })
                    .catch(() => message.error("Ой, что-то пошло не так..."));
                })
                .finally(() => {
                  setLoadingDelete(true);
                  dispatch(setUserWords(token, userId));
                });
            }}
            className="add-to-delete"
            title="удалить из изучаемых"
            icon={<DeleteOutlined />}
            shape="circle"
          />
        </Tooltip>
      ) : (
        <></>
      )}
    </>
  );
}
