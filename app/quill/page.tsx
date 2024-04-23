"use client";
import { ReactNode, useState } from "react";
import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";
import parse from "html-react-parser";
const QuillPage = () => {
  const [value, setValue] = useState("");
  const parser = new DOMParser();
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
        <div className="ql-editor">{parse(value)}</div>
        {/* {parser.parseFromString(value, "text/html") as unknown as ReactNode} */}
      </div>
    </div>
  );
};

export default QuillPage;
