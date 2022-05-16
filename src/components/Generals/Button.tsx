interface ButtonProps {
  onRecallInit: (state: boolean) => void;
  onFlashcardGoal: (goal: number) => void;
  onDeckIsSelected: (deck: string) => void;
}

export function Button({
  onRecallInit,
  onFlashcardGoal,
  onDeckIsSelected,
}: ButtonProps) {
  function handleButtonClickAction() {
    const inputValue = document.getElementById("goal") as HTMLInputElement;
    const selectValue = document.getElementById("deck") as HTMLSelectElement;

    onDeckIsSelected(selectValue.value);
    onFlashcardGoal(parseInt(inputValue.value));
    onRecallInit(true);
  }

  return (
    <button onClick={() => handleButtonClickAction()} type={"button"}>
      Iniciar Recall!
    </button>
  );
}
