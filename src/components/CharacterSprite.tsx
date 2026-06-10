import { Character } from "../data/characters";

type CharacterSpriteProps = {
  character: Character;
};

export function CharacterSprite({ character }: CharacterSpriteProps) {
  return (
    <>
      <div
        className="characterMarker"
        aria-label={character.name}
        style={
          {
            "--x": `${character.x}%`,
            "--y": `${character.y}%`,
            "--bubble-x": `${character.bubbleX ?? 0}px`,
            "--delay": character.delay ?? "0ms",
          } as React.CSSProperties
        }
      >
        <span className="speechBubble">{character.message}</span>
      </div>
    </>
  );
}
