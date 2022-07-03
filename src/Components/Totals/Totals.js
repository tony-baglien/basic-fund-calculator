import { useEffect, useState } from "react";

const Totals = (props) => {
  const [animation, setAnimation] = useState(false);

  const totalClasses = `text-9xl pt-1 pl-2 text-red-300 ${
    animation ? "animate-bounce" : ""
  }`;

  useEffect(() => {
    if (props.total === 0) {
      return;
    }
    setAnimation(true);

    const timer = setTimeout(() => {
      setAnimation(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [props.total]);

  return (
    <div className="h-full w-full flex flex-col pl-6">
      <div className="relative w-full h-full bg-slate-100 px-3 my-4 overflow-hidden rounded-2xl rounded-tr-none rounded-br-none text-red py-3 flex flex-col justify-evenly">
        <h1 className="text-9xl tracking-widest text-red-300 ">Total</h1>
        <p className={totalClasses}>{props.total}</p>
      </div>
    </div>
  );
};

export default Totals;
