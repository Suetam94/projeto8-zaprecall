import { Logo } from "../Generals/Logo";
import { AppTitle } from "../Generals/AppTitle";
import { Button } from "../Generals/Button";
import { HomeContainer } from "./styles";

interface HomeProps {
  onRecallInit: (state: boolean) => void;
}

export function Home({ onRecallInit }: HomeProps) {
  return (
    <HomeContainer>
      <Logo marginBottom={"13px"} width={"136px"} height={"161px"} />
      <AppTitle marginBottom={"30px"} />
      <Button onRecallInit={() => onRecallInit(true)} />
    </HomeContainer>
  );
}
