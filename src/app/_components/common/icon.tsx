export const Icon = ({
  icon: IconComponent,
  className,
}: {
  icon: React.ElementType;
  className: string;
}) => {
  return <IconComponent className={className} />;
};
