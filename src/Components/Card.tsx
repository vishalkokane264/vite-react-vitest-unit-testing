export const Card = ({ title }) => {
  return (
    <div className="card-wrapper">
      <div className="icon-wrapper"></div>
      <div className="text-wrapper">
        <p className="text-content">{title}</p>
      </div>
    </div>
  );
};

export default Card;
