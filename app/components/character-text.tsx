type Props = { character: string };

export default function CharacterText({ character }: Props) {
  if (character !== " ") {
    return <p>{character}</p>;
  } else {
    return <p>&nbsp;</p>;
  }
}
