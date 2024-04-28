import Content from "./components/content";
import Footer from "./components/footer";
import Header from "./components/header";

const Page = () => {
  return (
    <div>
      {/* header */}
      <div className="mb-[25rem] relative z-30">
        <Header />
        {/* content */}
        <Content />
      </div>

      {/* footer */}
      <Footer className="fixed bottom-0 left-0 w-full z-10" />
    </div>
  );
};

export default Page;
