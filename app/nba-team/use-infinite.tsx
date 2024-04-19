import { useEffect, useRef, useState } from "react";
import { APIResponeType, Player } from "./types";

const useInfinteHook = (fetchFun: () => Promise<APIResponeType | null>) => {
  const ref = useRef<HTMLDivElement>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Player[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoading(true);
          fetchFun()
            .then((newData) => {
              if (newData !== null) {
                setData([...data, ...newData.data]);
              }
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
        }
      },
      { threshold: 1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, fetchFun]);
  return {
    ref,
    error,
    loading,
    data,
  };
};

export default useInfinteHook;
