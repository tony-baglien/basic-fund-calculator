const DetailCard = (props) => {
  const isNegative = props.value < 0 ? true : false;

  if (isNegative) {
    return (
      <>
        <span className="absolute -bottom-8 left-0 inline text-9xl line-height text-red-400  ">
          {props.value}
        </span>
        <span className="text-xl text-red-500 absolute inline right-4 bottom-4">
          {props.desc}
        </span>
      </>
    );
  } else {
    return (
      <>
        <span className="absolute -bottom-8 inline text-9xl line-height text-red-300  ">
          {props.value}
        </span>
        <span className="text-xl text-red-400 absolute inline right-4 bottom-4">
          {props.desc}
        </span>
      </>
    );
  }
};

export default DetailCard;
