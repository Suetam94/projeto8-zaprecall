import { Logo } from "../Generals/Logo";
import { AppTitle } from "../Generals/AppTitle";
import { Button } from "../Generals/Button";
import { HomeContainer, FormHome } from "./styles";

interface HomeProps {
  onRecallInit: (state: boolean) => void;
  onFlashcardGoal: (goal: number) => void;
  onDeckIsSelected: (deck: string) => void;
}

export function Home({ onRecallInit, onFlashcardGoal, onDeckIsSelected }: HomeProps) {
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
        <select id="deck">
          <option value="" disabled selected>
            Escolha seu deck
          </option>
          <option value="all">Todos</option>
          <option value="Code">Linguagens de Programação</option>
          <option value="Linux">Linux</option>
          <option value="SQL">SQL</option>
        </select>
      </FormHome>
      <Button
        onFlashcardGoal={onFlashcardGoal}
        onDeckIsSelected={onDeckIsSelected}
        onRecallInit={() => onRecallInit(true)}
      />
    </HomeContainer>
  );
}
