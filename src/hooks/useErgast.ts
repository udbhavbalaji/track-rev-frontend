import { ErgastContext } from "@services/providers/ErgastProvider";
import { useContext } from "react";

const useErgast = () => {
  const context = useContext(ErgastContext);
  if (!context) {
    throw new Error("useErgast must be used within ErgastProvider.");
  }
  return context;
};

export default useErgast;
