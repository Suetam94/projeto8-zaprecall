import play from "../../assets/img/play.svg";
import "./style.css";

interface FlashCardProps {
  questionIndex: number;
}

export function FlashCard({ questionIndex }: FlashCardProps) {
  return (
    <div className="flashcard">
      <span>Pergunta {questionIndex}</span>
      <img src={play} alt="Play" />
    </div>
  );
}
