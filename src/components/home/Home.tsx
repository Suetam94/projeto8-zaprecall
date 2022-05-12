import { Logo } from "../generals/Logo";
import { AppTitle } from "../generals/AppTitle";
import { Button } from "../generals/Button";
import './style.css';

export function Home() {
  return (
    <div className={'home'}>
      <Logo marginBottom={'13px'} width={'136px'} height={'161px'} />
      <AppTitle marginBottom={'30px'} />
      <Button />
    </div>
  );
}
