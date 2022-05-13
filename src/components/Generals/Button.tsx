interface ButtonProps {
  onRecallInit: (state: boolean) => void;
}

export function Button({ onRecallInit }: ButtonProps) {
  return (
    <button onClick={() => onRecallInit(true)} type={"button"}>
      Iniciar Recall!
    </button>
  );
}
