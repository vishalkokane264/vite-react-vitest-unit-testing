import { pic1 } from "../utils/images";

export const Card = ({ title }) => {
  return (
    <div className="card-wrapper">
      <div className="icon-wrapper">
        <img src={pic1} alt="image" height={50} width={50} />
      </div>
      <div className="text-wrapper">
        <p className="text-content">{title}</p>
      </div>
    </div>
  );
};

export default Card;
