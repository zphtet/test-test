"use client";

import { useEffect, useState } from "react";
import { msgType } from "../api/poll/route";

const DisplayMsgs = () => {
  const [messages, setMessages] = useState<[] | msgType[]>([]);

  let numOfTries = 0;
  const backOffTime = 5000;
  const fetchMsgs = async () => {
    try {
      const res = await fetch("/api/poll");
      if (res.status >= 400) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      numOfTries = 0;
      return data.data;
    } catch (e) {
      console.log("Error fetching new msgs", e);
      numOfTries++;
      return [];
    }
  };
  console.count("render display");
  // console.log("numofTries", numOfTries);
  //   FETCH USING RequestAnimationFame
  //   const interval = 3000;
  //   let timeToMakeNextRequest = 0;
  //   useEffect(() => {
  //     const fetchMsgAndStateUpdate = async (time: number) => {
  //       if (timeToMakeNextRequest <= time) {
  //         const data = await fetchMsgs();
  //         setMessages(data);
  //         timeToMakeNextRequest = time + interval;
  //       }

  //       requestAnimationFrame(fetchMsgAndStateUpdate);
  //     };
  //     requestAnimationFrame(fetchMsgAndStateUpdate);
  //   }, []);

  const interval = 3000;
  let timeToMakeNextRequest = 0;
  useEffect(() => {
    const fetchMsgAndStateUpdate = async (time: number) => {
      //   console.log("working");
      if (timeToMakeNextRequest <= time) {
        console.log("fetching");
        const data = await fetchMsgs();
        if (data.length > 0) {
          setMessages(data);
        }

        console.log("numofTries", numOfTries);
        timeToMakeNextRequest = time + interval + backOffTime * numOfTries;
      }

      requestAnimationFrame(fetchMsgAndStateUpdate);
    };
    requestAnimationFrame(fetchMsgAndStateUpdate);
  }, []);
  return (
    <div className="py-10 space-y-6">
      Display msgs
      {messages.map((msg, idx) => {
        return (
          <div
            key={idx}
            className="flex gap-20 py-2 border rounded-full border-blue-500 px-4"
          >
            <h3>{msg.name}</h3>
            <p>{msg.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayMsgs;
