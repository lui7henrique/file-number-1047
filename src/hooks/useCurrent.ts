import { ref, get, set } from "firebase/database";
import { db } from "../services/firebase";

export const useCurrent = () => {
  const getValue = async () => {
    const snapshot = await get(ref(db, "/current/"));
    const value = snapshot.val();

    return value;
  };

  const handleUpdateCurrent = async () => {
    const newValue = (await getValue()) + 1;
    await set(ref(db, "current/"), newValue);
  };

  return { getValue, handleUpdateCurrent };
};
