import play from "../../assets/img/play.svg";
import "./style.css";

interface FlashcardFrontFaceProps {
  questionIndex: number;
}

export function FlashcardFrontFace({ questionIndex }: FlashcardFrontFaceProps) {
  return (
    <div className="flashcard">
      <span>Pergunta {questionIndex}</span>
      <img src={play} alt="Play" />
    </div>
  );
}
