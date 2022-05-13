import { Logo } from "../Generals/Logo";
import { AppTitle } from "../Generals/AppTitle";

import "./style.css";

export function Card() {
  return (
    <div className="card">
      <header>
        <Logo width={"52px"} height={"60px"} />
        <AppTitle marginLeft={"15px"} />
      </header>
    </div>
  );
}
