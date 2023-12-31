import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { Dialog, DialogTitle, IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { AddItemForm } from "./Form";

interface Props {
  title: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const CreateItemDialog = ({ title, isOpen, setIsOpen }: Props): ReactNode => {
  const handleClose = () => setIsOpen(false);

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <IconButton
        size="large"
        onClick={handleClose}
        style={{ position: "absolute", top: 8, right: 8 }}
      >
        <CloseIcon />
      </IconButton>
      <AddItemForm closeDialog={handleClose} />
    </Dialog>
  );
};

export { CreateItemDialog };
