interface AppTitleProps {
  marginBottom?: string;
  marginLeft?: string;
}

export function AppTitle({ marginBottom, marginLeft }: AppTitleProps) {
  return (
    <h1
      style={{
        marginBottom,
        marginLeft,
      }}
    >
      ZapRecall
    </h1>
  );
}
