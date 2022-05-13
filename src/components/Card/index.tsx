import { Logo } from "../Generals/Logo";
import { AppTitle } from "../Generals/AppTitle";

import "./style.css";
import { FlashCard } from "../FlashCard";

export function Card() {
  return (
    <div className="card">
      <header>
        <Logo width={"52px"} height={"60px"} />
        <AppTitle marginLeft={"15px"} />
      </header>
      <main>
        <FlashCard questionIndex={1} />
        <FlashCard questionIndex={2} />
        <FlashCard questionIndex={3} />
        <FlashCard questionIndex={4} />
      </main>
    </div>
  );
}
