export const repeatedComponents = (n: number, Comp: React.ComponentType) => {
  return Array.from({ length: n }).map((_, i) => <Comp key={i} />);
};
