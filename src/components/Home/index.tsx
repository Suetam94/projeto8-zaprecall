import { Logo } from "../Generals/Logo";
import { AppTitle } from "../Generals/AppTitle";
import { Button } from "../Generals/Button";
import "./style.css";

interface HomeProps {
  onRecallInit: (state: boolean) => void;
}

export function Home({ onRecallInit }: HomeProps) {
  return (
    <div className={"home"}>
      <Logo marginBottom={"13px"} width={"136px"} height={"161px"} />
      <AppTitle marginBottom={"30px"} />
      <Button onRecallInit={() => onRecallInit(true)} />
    </div>
  );
}
