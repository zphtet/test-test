"use client";
import Box from "./components/box";
import { LayoutGroup, motion } from "framer-motion";
import Notifications from "./components/notification";
import SelectableList from "./components/select-list";
export default function Page() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "50px",
      }}
    >
      Layout Animation Page
      <Box />
      <Notifications />
      <LayoutGroup id="1">
        <SelectableList />
      </LayoutGroup>
      <LayoutGroup id="2">
        <SelectableList />
      </LayoutGroup>
    </div>
  );
}
