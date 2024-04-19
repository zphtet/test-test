import Image from "next/image";

const Page = () => {
  return (
    <div>
      Scoll View Pagae
      <section className="h-screen border flex items-center justify-center relative"></section>
      <section className="h-screen border flex items-center justify-center relative">
        <img
          className="w-[300px] aspect-auto animate-fadeIn [animation-timeline:view()] [animation-range:entry]"
          src="https://images.unsplash.com/photo-1713208176864-13e6c9d04eec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
        />
      </section>
      <section className="h-screen border flex items-center justify-center relative"></section>
    </div>
  );
};

export default Page;
