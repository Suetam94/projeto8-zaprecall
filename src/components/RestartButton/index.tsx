import { RestartButtonStyle } from "./styles";

interface RestartButton {
  onRecallInit: (init: boolean) => void;
}

export function RestartButton({ onRecallInit }: RestartButton) {
  function handleRestartRecall() {
    onRecallInit(false);
  }

  return (
    <RestartButtonStyle onClick={() => handleRestartRecall()} type={"button"}>
      Reiniciar Recall
    </RestartButtonStyle>
  );
}
