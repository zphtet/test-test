"use client";
import { useState } from "react";
import { data } from "./data";

const NonRecursiveComponent = ({ data }: { data: any }) => {
  return (
    <div className="p-10">
      {data.map((parent: any) => {
        return (
          <div key={parent.name}>
            <span className="bg-red-400 px-2">{parent.name}</span>
            {parent?.children?.map((child: any, idx: number) => {
              return (
                <div key={idx} className="pl-4">
                  <span className="bg-green-400 px-2">{child.name}</span>
                  {child.children && // rendering great-children
                    child.children.map((greatGrandChild: any) => {
                      return (
                        <div key={greatGrandChild.name} className="pl-4">
                          <span className="bg-orange-400 px-2">
                            {greatGrandChild.name}
                          </span>
                        </div>
                      );
                    })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

const RecursiveComponent = ({ orgData }: { orgData: any }) => {
  const [comments, setComments] = useState(orgData);
  console.log("data", data);
  const onChange = (name: string) => {
    const findOne: any = comments.find((data: any) => data.name === name);
    if (findOne) {
      const newComments = comments.map((parent: any) => {
        if (parent.name === findOne.name) {
          return {
            ...parent,
            name: "HELLO ",
          };
        }
        return parent;
      });
      setComments(newComments);
      console.log("new Comments", newComments);
    }
  };
  return (
    <div>
      {comments.map((parent: any, idx: number) => {
        return (
          <div key={idx} className="pl-4">
            <span>{parent.name}</span>
            <button
              onClick={() => onChange(parent.name)}
              className="px-2 bg-blue-400"
            >
              change
            </button>
            <div>
              {parent.children && (
                <RecursiveComponent orgData={parent.children} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Page = () => {
  return (
    <div>
      <h1>No recursive page</h1>
      <div className="space-y-10">
        <NonRecursiveComponent data={data}></NonRecursiveComponent>
        <RecursiveComponent orgData={data}></RecursiveComponent>
      </div>
    </div>
  );
};

export default Page;
