"use client";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const QuillEditor = dynamic(() => import("react-quill"), {
  loading: () => <p>Loading...</p>,
});
const QuillPage = () => {
  const [value, setValue] = useState("");
  const changeHandler = (string: string) => {
    setValue(string);
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "clean",
    "align",
  ];

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "blockquote"],
        [{ color: [] }],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        [
          { align: "" },
          { align: "center" },
          { align: "right" },
          { align: "justify" },
        ],
        // ["link", "image"],
        ["link"],
        ["clean"],
      ],
    },
    clipboard: {
      matchVisual: true,
    },
  };

  return (
    typeof window !== "undefined" &&
    typeof document !== "undefined" && (
      <div>
        Quill Page
        <div className="py-10 px-10 prose">
          <QuillEditor
            formats={formats}
            modules={modules}
            value={value}
            onChange={changeHandler}
            theme="snow"
          />
          <button
            className="px-4 py-2 border border-violet-600 rounded-full mt-10 ml-auto block"
            onClick={() => console.log(value)}
          >
            Submit Button
          </button>
        </div>
        <div className="py-10 px-10 prose  border border-red-600 w-full !max-w-screen mx-auto p">
          {/* add parser for quill output */}
        </div>
      </div>
    )
  );
};

export default QuillPage;
