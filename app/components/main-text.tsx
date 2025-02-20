"use client";
import CharacterText from "@/app/components/character-text";
import { LetterStatus } from "@/app/types";
import { Dispatch, KeyboardEvent, SetStateAction, useState } from "react";

type Props = {};
type LettersAndStatusType = { character: string; letterStatus: LetterStatus };

export default function MainText({}: Props) {
  const [mainText, setMainText] = useState<string | null>(
    "write this as fast as possible",
  );

  const mainTextList = mainText ? mainText.split("") : [];

  const [letterPosition, setLetterPosition] = useState(0);
  const [lettersAndStatuses, setLettersAndStatuses] = useState<
    LettersAndStatusType[]
  >(
    mainTextList.map((character) => {
      return { character: character, letterStatus: LetterStatus.WAITING };
    }),
  );
  if (mainText) {
    return (
      <div
        tabIndex={0}
        onKeyDown={(event) =>
          pressKeyEvent(
            event,
            letterPosition,
            mainTextList,
            setLetterPosition,
            setLettersAndStatuses,
          )
        }
        className="flex text-4xl space-x-1 focus:outline-none"
      >
        {lettersAndStatuses.map(
          (letterAndStatus: LettersAndStatusType, index: number) => {
            return (
              <CharacterText
                key={String(
                  index +
                    letterAndStatus.character +
                    letterAndStatus.letterStatus,
                )}
                character={letterAndStatus.character}
                letterStatus={letterAndStatus.letterStatus}
              />
            );
          },
        )}
      </div>
    );
  } else {
    return <p>Waiting for text</p>;
  }
}

function pressKeyEvent(
  event: KeyboardEvent<HTMLDivElement>,
  letterPosition: number,
  mainTextList: string[],
  setLetterPosition: (val: number) => void,
  setLettersAndStatuses: Dispatch<SetStateAction<LettersAndStatusType[]>>,
): void {
  if (event.key === mainTextList[letterPosition]) {
    setLettersAndStatuses((prev: LettersAndStatusType[]) => {
      const copyPrev = prev.map((lns, index) => {
        if (letterPosition === index) {
          return { character: lns.character, letterStatus: LetterStatus.TYPED };
        } else {
          return { character: lns.character, letterStatus: lns.letterStatus };
        }
      });
      prev[letterPosition].letterStatus = LetterStatus.ERROR;
      return copyPrev;
    });
    setLetterPosition(letterPosition + 1);
  } else {
    setLettersAndStatuses((prev: LettersAndStatusType[]) => {
      const copyPrev = prev.map((lns, index) => {
        if (letterPosition === index) {
          return { character: lns.character, letterStatus: LetterStatus.ERROR };
        } else {
          return { character: lns.character, letterStatus: lns.letterStatus };
        }
      });
      prev[letterPosition].letterStatus = LetterStatus.ERROR;
      return copyPrev;
    });
  }
}
