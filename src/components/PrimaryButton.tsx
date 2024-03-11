import { Button } from '@/components/ui/button';

interface PrimaryButtonProps {
  title: string;
  bgColor?: string; //make the color prop optional
  onClickFuntion?: () => void;
}

const PrimaryButton = ({
  title,
  bgColor,
  onClickFuntion,
}: PrimaryButtonProps) => {
  //   return <Button className="m-3 rounded-lg hover:bg-gray-700">{title}</Button>;

  return (
    <Button
      className={`m-3 rounded-lg ${
        bgColor
          ? `bg-${bgColor}-700 hover:bg-${bgColor}-800`
          : 'hover:bg-gray-700'
      }`}
      onClick={onClickFuntion}
    >
      {title}
    </Button>
  );
};

export default PrimaryButton;
