import Character from "./char";
import Word from "./word";

const Page = () => {
  return (
    <div>
      <div
        style={{
          minHeight: "100vh",
        }}
      ></div>
      <Word text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English" />
      <Character text="vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" />
      <div
        style={{
          minHeight: "100vh",
        }}
      ></div>
    </div>
  );
};

export default Page;
