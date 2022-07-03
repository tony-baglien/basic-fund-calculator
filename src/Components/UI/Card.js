const Card = (props) => {
  return (
    <div className="w-11/12 h-5/6 bg-red-300 rounded-lg grid grid-rows-1 grid-cols-3 ">
      {props.children}
    </div>
  );
};

export default Card;
