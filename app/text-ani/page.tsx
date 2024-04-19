import InfoText from "./components/info";
import MainText from "./components/main-text";
import VerticalLine from "./components/verline";

const PageAnimation = () => {
  return (
    <div className="px-10 py-10 w-full border bg-[#d5333e] *:text-white ">
      <p>Text Animation </p>
      <div className="flex gap-5  justify-center">
        <MainText />
        <VerticalLine />
        <InfoText />
      </div>
    </div>
  );
};
export default PageAnimation;
