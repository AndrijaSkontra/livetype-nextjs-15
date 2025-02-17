"use client";
import CharacterText from "@/app/components/character-text";
import { useState } from "react";

type Props = {};

export default function MainText({}: Props) {
  const [mainText, setMainText] = useState("write this as fast as possible");
  const mainTextList = mainText.split("");
  return (
    <>
      {mainTextList.map((character: string, index: number) => {
        if (character !== " ") {
          return (
            <CharacterText key={index + character} character={character} />
          );
        } else {
          return (
            <CharacterText key={index + character} character={character} />
          );
        }
      })}
    </>
  );
}
