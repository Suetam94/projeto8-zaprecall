import { Logo } from "../Generals/Logo";
import { AppTitle } from "../Generals/AppTitle";

import "./style.css";
import { FlashcardFrontFace } from "../FlashcardFrontFace";
import { FlashcardBackFace } from "../FlashcardBackFace";

export function Card() {
  return (
    <div className="card">
      <header>
        <Logo width={"52px"} height={"60px"} />
        <AppTitle marginLeft={"15px"} />
      </header>
      <main>
        <FlashcardBackFace />
        {/*<FlashcardFrontFace questionIndex={1} />*/}
        {/*<FlashcardFrontFace questionIndex={2} />*/}
        {/*<FlashcardFrontFace questionIndex={3} />*/}
        {/*<FlashcardFrontFace questionIndex={4} />*/}
      </main>
    </div>
  );
}
