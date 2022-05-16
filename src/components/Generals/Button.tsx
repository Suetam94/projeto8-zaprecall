interface ButtonProps {
  onRecallInit: (state: boolean) => void;
  onFlashcardGoal: (goal: number) => void;
}

export function Button({ onRecallInit, onFlashcardGoal }: ButtonProps) {
  function handleButtonClickAction() {
    const inputValue = document.getElementById('goal') as HTMLInputElement;

    onFlashcardGoal(parseInt(inputValue.value));
    onRecallInit(true);
  }

  return (
    <button onClick={() => handleButtonClickAction()} type={"button"}>
      Iniciar Recall!
    </button>
  );
}
