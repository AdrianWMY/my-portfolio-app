import { BadgeCheck } from 'lucide-react';

interface BadgeProps {
  skillName: string;
}

const Badge = ({ skillName }: BadgeProps) => {
  return (
    <div className="text-white flex sm:w-40 w-32  ">
      <BadgeCheck />
      <span className=" ms-5 sm:text-xl text-md">{skillName}</span>
    </div>
  );
};

export default Badge;
