import React, { useContext } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { Authcontext } from "./AuthProvider";

const Modal = ({ text, resetStopwatch, time }) => {
  const [open, setOpen] = React.useState(false);
  const [projectDetails, setProjectDetails] = React.useState({
    ProjectName: "",
    Description: "",
  });
  const { user } = useContext(Authcontext);

  const handleSubmit = () => {
    const fullProject = {
      ...projectDetails,
      workingHour: time,
      userEmail: user?.email,
    };
    fetch("https://time-backend.vercel.app/workingTimePost", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(fullProject),
    })
      .then((res) => res.json())
      .then((data) => alert("Your Working Hour Added!"));
  };

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient" color="blue-gray">
        {text}
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Total Work Hour {time}</DialogHeader>
        <div className="p-5 space-y-5">
          <Input
            label="Project Name"
            onChange={(e) =>
              setProjectDetails({
                ...projectDetails,
                ProjectName: e.target.value,
              })
            }
          />
          <Textarea
            label="Message"
            onChange={(e) =>
              setProjectDetails({
                ...projectDetails,
                Description: e.target.value,
              })
            }
          />
        </div>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => {
              handleOpen();
              resetStopwatch();
              handleSubmit();
            }}
          >
            <span>Save</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default Modal;
