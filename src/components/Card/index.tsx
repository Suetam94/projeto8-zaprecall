import { Logo } from "../Generals/Logo";
import { AppTitle } from "../Generals/AppTitle";

import { FlashcardFrontFace } from "../FlashcardFrontFace";
import { FlashcardBackFace } from "../FlashcardBackFace";
import { CardHeader, CardMain } from "./styles";
import {FlashcardSummary} from "../FlashcardSummary";

export function Card() {
  return (
    <>
      <CardHeader>
        <Logo width={"52px"} height={"60px"} />
        <AppTitle marginLeft={"15px"} />
      </CardHeader>
      <CardMain>
          <FlashcardSummary />
        {/*<FlashcardBackFace />*/}
        {/*<FlashcardFrontFace />*/}
      </CardMain>
    </>
  );
}
