interface AppTitleProps {
  marginBottom?: string;
}

export function AppTitle({ marginBottom }: AppTitleProps) {
  return (
    <h1
      style={{
        marginBottom,
      }}
    >
      ZapRecall
    </h1>
  );
}
