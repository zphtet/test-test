"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Loader } from "lucide-react";
import Modal from "./components/modal";
import CreateForm from "./components/create-form";
import PlayerRow from "./components/Player";
const fetchData = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

const url = "https://swapi.dev/api/planets?page=1";

const Page = () => {
  const { inView, ref } = useInView();
  // @ts-ignore
  const { data, fetchNextPage, isLoading, isFetching, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["planets"],
      // refetchInterval: 500,

      queryFn: ({ pageParam }) => fetchData(pageParam),
      initialPageParam: url,
      getNextPageParam: (lastPage) => {
        console.log("last page", lastPage);
        return lastPage.next;
      },
      staleTime: 0,
    });

  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    console.log("USE EFFECT");
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  console.log(
    "planets",
    data,
    "hasNextPage",
    hasNextPage,
    "isFetching",
    isFetching
  );
  return (
    <div
      style={{
        padding: "50px",
      }}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-3xl">Players</h1>
        <button
          className="px-4 py-1 bg-blue-500 text-white rounded-full"
          onClick={() => setShowModal((prev) => !prev)}
        >
          Create Team
        </button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <CreateForm />
          </Modal>
        )}
      </div>
      {isFetching && (
        <div
          style={{
            position: "fixed",
            right: "50px",
            top: "50px",
          }}
        >
          {" "}
          fetching ...{" "}
        </div>
      )}
      <div
        style={{
          padding: "30px 0px",
        }}
      >
        <div className="space-y-2">
          {data?.pages.map((page) => {
            return page.results.map((planet: any) => {
              return <PlayerRow planet={planet} />;
            });
          })}
        </div>
      </div>
      <div ref={ref} className=" bg-blue-500">
        {/* FETCH NEXT DATA WHEN YOU SEE ME */}
      </div>
      {(hasNextPage || isLoading) && (
        <div className="flex items-center justify-center">
          <Loader className="animate-spin" />
        </div>
      )}

      {!hasNextPage && !isFetching && <div>No Data to laod</div>}

      {/* {hasNextPage && !isFetching && (
        <button
          style={{
            padding: "10px",
            borderRadius: "5px",
          }}
          onClick={() => fetchNextPage()}
        >
          Load More
        </button>
      )} */}
    </div>
  );
};

export default Page;
