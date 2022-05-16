import loading from "../../assets/img/loader.svg";
import { Loader, LoaderContainer } from "./styles";

export function Loading() {
  return (
    <LoaderContainer>
      <Loader src={loading} alt="Carregando" />
    </LoaderContainer>
  );
}
