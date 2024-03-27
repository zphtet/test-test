"use client";

import { useInfiniteQuery } from "@tanstack/react-query";

const fetchData = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

const url = "https://swapi.dev/api/planets?page=1";

const Page = () => {
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
      Infinite Scroll
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
        {data?.pages.map((page) => {
          return page.results.map((planet: any) => {
            return (
              <p
                key={planet.name}
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  padding: "5px 0px",
                }}
              >
                {planet.name}
              </p>
            );
          });
        })}
      </div>
      {hasNextPage && !isFetching && (
        <button
          style={{
            padding: "10px",
            borderRadius: "5px",
          }}
          onClick={() => fetchNextPage()}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Page;
