import { Logo } from "../Generals/Logo";
import { AppTitle } from "../Generals/AppTitle";

import { FlashcardFrontFace } from "../FlashcardFrontFace";
import { CardHeader, CardMain } from "./styles";
import {useEffect, useState} from "react";
import {request} from "../../libs/app";

export function Card() {
  return (
    <>
      <CardHeader>
        <Logo width={"52px"} height={"60px"} />
        <AppTitle marginLeft={"15px"} />
      </CardHeader>
      <CardMain>
        <FlashcardFrontFace />
      </CardMain>
    </>
  );
}
