const InfiniteCarousel = () => {
  return (
    <div>
      <div className="scroller max-w-[900px] overflow-hidden  px-4 py-4 mx-auto border border-red-500">
        <div className="inner_scroller animate-scroll overflow-auto w-max flex gap-4 *:w-[40px] *:h-[40px] *:bg-green-500 *:flex *:items-center *:justify-center">
          <div>A</div>
          <div>B</div>
          <div>C</div>
          <div>D</div>
          <div>E</div>
          <div aria-hidden className="bg-red-500">
            A
          </div>
          <div aria-hidden>B</div>
          <div aria-hidden>C</div>
          <div aria-hidden>D</div>
          <div aria-hidden>E</div>
        </div>

        {/* <marquee behavior="alternate" >This text will bounce</marquee> */}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
