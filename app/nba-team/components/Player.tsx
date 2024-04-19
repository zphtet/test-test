import { useState } from "react";
import AddForm from "./add-form";
import Modal from "./modal";
import playerStore from "@/zustand/teams/players";

const PlayerRow = ({ planet }: { planet: any }) => {
  const [showModal, setShowModal] = useState(false);
  const players = playerStore((state) => state.players);
  const isInTeam = players.find((player) => {
    return player.name === planet.name && player.hasTeam;
  });

  return (
    <>
      <div
        key={planet.name}
        className="rounded-full flex items-center justify-between px-4 py-1 border border-blue-600"
      >
        <p className="text-base ">{planet.name}</p>
        <button
          onClick={() => setShowModal(true)}
          disabled={isInTeam ? true : false}
          className={`px-4 py-1 bg-blue-500 text-white rounded-full ${
            isInTeam && "opacity-10"
          }`}
        >
          Add
        </button>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddForm name={planet.name}></AddForm>
        </Modal>
      )}
    </>
  );
};

export default PlayerRow;
