type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const FeatureCard = ({ title, description, icon }: Props) => {
  return (
    <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      {icon}
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-center text-gray-500">{description}</p>
    </div>
  );
};

export default FeatureCard;
