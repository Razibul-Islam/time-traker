import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Authcontext } from "./AuthProvider";

const Cardd = () => {
  const [datas, setDatas] = useState([]);
  const { user } = useContext(Authcontext);
  useEffect(() => {
    fetch(`http://localhost:4000/getWorkingTime?userEmail=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, [user?.email]);

  return (
    <div className="grid grid-cols-3 gap-5">
      {datas?.map((data) => (
        <Card className="mt-6 w-96 shadow-lg">
          <CardBody>
            <Typography variant="h3" color="black" className="mt-2 text-center">
              {data.workingHour} Hour
            </Typography>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {data.ProjectName}
            </Typography>
            <Typography>{data.Description}</Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Edit</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Cardd;
