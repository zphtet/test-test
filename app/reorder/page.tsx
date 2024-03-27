"use client";

import { Reorder } from "framer-motion";
import { useState } from "react";

const datas = [
  {
    title: "Item 1",
    id: 1,
    text: "ITEM ONE",
  },
  {
    title: "Item 2",
    id: 2,
    text: "ITEM TWO",
  },
  {
    title: "Item 3",
    id: 3,
    text: "ITEM THREE",
  },
  {
    title: "Item 4",
    id: 4,
    text: "ITEM FOUR",
  },
  {
    title: "Item 5",
    id: 5,
    text: "ITEM FIVE",
  },
];

const TextContainer = ({ text }: { text?: string }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#efefef",
        padding: "50px",
      }}
    >
      <p>{text}</p>
    </div>
  );
};
const Tab = ({ title }: { title?: string }) => {
  return (
    <div
      style={{
        border: "1px solid blue",
        cursor: "pointer",
      }}
    >
      {title}
      <button
        style={{
          cursor: "pointer",
        }}
      >
        X
      </button>
    </div>
  );
};
const ReorderPage = () => {
  const [items, setItems] = useState(datas);
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "500px",
          border: "2px solid red",
          padding: "50px",
        }}
      >
        <Reorder.Group
          as="div"
          values={items}
          onReorder={setItems}
          className="tabs"
          style={{
            padding: "20px",
            display: "flex",
            gap: "10px",
          }}
          axis="x"
        >
          {items.map((item) => (
            <Reorder.Item layout value={item} key={item.id}>
              {/* <Tab title={item.title} /> */}
              <p
                style={{
                  border: "1px solid red",
                }}
              >
                {item.title}
              </p>
            </Reorder.Item>
          ))}
        </Reorder.Group>
        <TextContainer text="something" />
      </div>
    </div>
  );
};

export default ReorderPage;
