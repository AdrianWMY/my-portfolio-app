import { Button } from '@/components/ui/button';

interface PrimaryButtonProps {
  title: string;
  bgColor?: string; //make the color prop optional
  additionStyle?: string;
  disable?: boolean;
  onClickFuntion?: (e: React.MouseEvent) => void;
}

const PrimaryButton = ({
  title,
  bgColor,
  additionStyle,
  disable,
  onClickFuntion,
}: PrimaryButtonProps) => {
  //   return <Button className="m-3 rounded-lg hover:bg-gray-700">{title}</Button>;

  return (
    <Button
      className={`m-3 ${additionStyle} rounded-lg ${
        bgColor
          ? `bg-${bgColor}-700 hover:bg-${bgColor}-800`
          : 'hover:bg-gray-700'
      }`}
      onClick={onClickFuntion}
      disabled={disable}
    >
      {title}
    </Button>
  );
};

export default PrimaryButton;
