import { LetterStatus } from "@/app/types";
import clsx from "clsx";

type Props = { character: string; letterStatus: LetterStatus };

export default function CharacterText({ character, letterStatus }: Props) {
  if (character !== " ") {
    return (
      <p
        className={clsx("", {
          "text-destructive": letterStatus === LetterStatus.ERROR,
          "text-green-400": letterStatus === LetterStatus.TYPED,
        })}
      >
        {character}
      </p>
    );
  } else {
    return (
      <p
        className={clsx("", {
          "bg-red-500": letterStatus === LetterStatus.ERROR,
        })}
      >
        &nbsp;
      </p>
    );
  }
}
