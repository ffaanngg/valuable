import Wrapper from "../components/Wrapper.jsx";
function Loading() {
  return (
    <Wrapper>
      <div className="flex items-center justify-center w-full h-full">
        <div className="font-bold font-heading">
          <h1 className="text-5xl text-neutral-200">Loading...</h1>
          <h6 className="text-xl text-neutral-400">Good luck</h6>
        </div>
      </div>
    </Wrapper>
  );
}

export default Loading;
