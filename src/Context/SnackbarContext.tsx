"use client";
import React, {
  createContext,
  useState,
  ReactNode,
  useCallback,
  useContext,
} from "react";
import SnackbarComponent from "@/components/Shared/SnackbarComponent";

interface IDefaultValues {
  isOpen: boolean;
  message: string;
  type: "success" | "error" | "warning" | "info";
}

interface SnackbarContextType {
  showSnackbar: (
    message: string,
    type?: "success" | "error" | "warning" | "info"
  ) => void;
}

const defaultValues: IDefaultValues = {
  isOpen: false,
  message: "",
  type: "success",
};

const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined
);

const SnackbarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [snackbarState, setSnackbarState] =
    useState<IDefaultValues>(defaultValues);

  const showSnackbar = useCallback(
    (
      message: string,
      type: "success" | "error" | "warning" | "info" = "success"
    ) => {
      setSnackbarState({ isOpen: true, message, type });
    },
    []
  );

  const handleClose = () => {
    setSnackbarState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <SnackbarComponent
        open={snackbarState.isOpen}
        message={snackbarState.message}
        onClose={handleClose}
        type={snackbarState.type}
      />
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = (): SnackbarContextType => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};

export default SnackbarProvider;
