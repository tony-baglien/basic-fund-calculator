import DetailCard from "../UI/DetailCard";

const InfoCards = (props) => {
  const cards = props.infoCardContent;
  const cardList = cards.map((card) => {
    return (
      <li
        key={Math.random()}
        className="relative w-full h-1/5 bg-slate-100 px-3 my-4 overflow-hidden rounded-2xl text-red"
      >
        <DetailCard value={card.value} desc={card.desc} />
      </li>
    );
  });

  return <ul className="overflow-y-auto scrollbar-thin ">{cardList}</ul>;
};

export default InfoCards;
