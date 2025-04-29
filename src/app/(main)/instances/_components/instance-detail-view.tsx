export type InstanceDetailViewProps = {
  title: string;
  description: string;
};

export default function InstanceDetailView({ title, description }: InstanceDetailViewProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
