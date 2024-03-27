import { useRef, useEffect } from "react";

function usePrevious(value: any) {
  const ref = useRef(null);

  // Store the current value in the ref on every render
  useEffect(() => {
    ref.current = value;
  }, [value]); // This array ensures the effect runs only if 'value' changes

  // Return the previous value (stored in the ref)
  return ref.current;
}

export default usePrevious;
