const UserInputs = (props) => {
  return (
    <form
      className="h-full w-full flex flex-col items-center justify-evenly"
      onSubmit={(event) => props.onTotal(event)}
    >
      <div className="border-b-2 border-b-red-400">
        <input
          className="border-none bg-transparent text-red-500 placeholder:text-red-500 placeholder:text-2xl py-1 px-2 leading-tight focus:outline-none focus:placeholder:text-transparent"
          type="text"
          id="cost"
          placeholder="cost (+/-)"
          onChange={(event) => props.onProfit(event.target.value)}
        ></input>
      </div>
      <div className="border-b-2 border-b-red-400">
        <input
          className="border-none bg-transparent text-red-500 placeholder:text-red-500 placeholder:text-2xl py-1 px-2 leading-tight focus:outline-none focus:placeholder:text-transparent"
          type="text"
          id="description"
          placeholder="description"
          onChange={(event) => props.onDesc(event.target.value)}
        ></input>
      </div>
      <button
        className="text-2xl text-red-500 border-2 border-red-500 rounded-lg py-4 px-6"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default UserInputs;
