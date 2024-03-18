import PrimaryButton from './PrimaryButton';

interface CusCardProps {
  imageUrl: string;
  projectName: string;
  href?: string;
}

const CusCard = ({ imageUrl, projectName, href }: CusCardProps) => {
  return (
    <div className="w-[300px] pt-4 border rounded-3xl">
      <img
        className="w-[200px] h-[350px] rounded-xl  m-auto"
        src={imageUrl}
        alt=""
      />
      <div className="mt-2 text-white ">{projectName}</div>
      <div>
        <a href={href}>
          <PrimaryButton title={'Live Demo'} />
        </a>
      </div>
    </div>
  );
};

export default CusCard;
