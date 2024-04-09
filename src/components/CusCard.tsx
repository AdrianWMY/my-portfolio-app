import PrimaryButton from './PrimaryButton';

interface CusCardProps {
  imageUrl: string;
  projectName: string;
  href?: string;
}

const CusCard = ({ imageUrl, projectName, href }: CusCardProps) => {
  return (
    <div className="max-w-[280px] pt-5 w-full border-2 border-slate-400 shadow-md shadow-slate-500/50 rounded-3xl m-auto">
      <img
        className="w-[200px] h-[300px] sm:h-[350px] rounded-xl  m-auto"
        src={imageUrl}
        alt=""
      />
      <div className="mt-2 text-slate-200 ">{projectName}</div>
      <div>
        <a href={href} target="_blank">
          <PrimaryButton title={'Live Demo'} />
        </a>
      </div>
    </div>
  );
};

export default CusCard;
