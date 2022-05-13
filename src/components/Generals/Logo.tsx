import logo from "../../assets/img/logo.png";

interface LogoProps {
  width: string;
  height: string;
  marginBottom?: string;
}

export function Logo({ width, height, marginBottom }: LogoProps) {
  return (
    <div
      style={{
        width,
        height,
        marginBottom,
      }}
    >
      <img style={{ width: "100%" }} src={logo} alt="ZapRecall" />
    </div>
  );
}
