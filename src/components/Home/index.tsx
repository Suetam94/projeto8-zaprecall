import { Logo } from "../Generals/Logo";
import { AppTitle } from "../Generals/AppTitle";
import { Button } from "../Generals/Button";
import { HomeContainer, FormHome } from "./styles";

interface HomeProps {
  onRecallInit: (state: boolean) => void;
  onFlashcardGoal: (goal: number) => void;
}

export function Home({ onRecallInit, onFlashcardGoal }: HomeProps) {
  return (
    <HomeContainer>
      <Logo marginBottom={"13px"} width={"136px"} height={"161px"} />
      <AppTitle marginBottom={"30px"} />
      <FormHome>
        <input
          id={"goal"}
          type="number"
          placeholder={"Digite sua meta de zaps..."}
        />
      </FormHome>
      <Button
        onFlashcardGoal={onFlashcardGoal}
        onRecallInit={() => onRecallInit(true)}
      />
    </HomeContainer>
  );
}
