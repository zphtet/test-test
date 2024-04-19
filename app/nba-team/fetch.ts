import axios from "axios";
import { APIResponeType } from "./types";

const FetchPlayers = async (size: number): Promise<APIResponeType | null> => {
  try {
    const data = await axios.get(
      `http://api.balldontlie.io/v1/players?per_page=${size}`,
      {
        headers: {
          Authorization: "accae18c-3515-4690-8780-391225838106",
        },
      }
    );
    return data.data;
  } catch (e) {
    console.log("ERROR", e);
    return null;
  }
};

export default FetchPlayers;
