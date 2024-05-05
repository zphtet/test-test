"use client";
import React, { useState } from "react";
import { msgType } from "../api/poll/route";

interface FormData {
  name: string;
  message: string;
}
const postMsg = async (data: msgType) => {
  try {
    const res = await fetch("/api/poll", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  } catch (e: any) {
    console.log("error postiong message: " + e.message);
  }
};

const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    message: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Do something with the formData, like sending it to a server
    console.log(formData);

    postMsg({ name: formData.name, text: formData.message }).then((data) =>
      console.log("successfully posted messatge")
    );
    // You can also reset the fields here
    setFormData({
      name: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="border text-blue-500"
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          className="border text-blue-500"
        />
      </div>
      <button
        type="submit"
        className="border py-2 px-6 text-white rounded-md bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
