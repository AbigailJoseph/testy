import React, { useState, Fragment,  useEffect } from "react";
import {
  Grid,
  Card,
  Avatar,
  Divider,
  Button,
  Icon,
  Fab,
  Hidden,
  TablePagination,
} from "@material-ui/core";
import { Breadcrumb } from "matx";
import Axios from "axios";
import ProfileCard1 from "./ProfileCard1";
import DailyChallenge1 from "../list/DailyChallenge1";
import DailyChallenge2 from "../list/DailyChallenge2";
import WeeklyChallenge1 from "../list/WeeklyChallenge1";
import WeeklyChallenge2 from "../list/WeeklyChallenge2";

const ChallengesPage = () => {
  const [isAlive, setIsAlive] = useState(true);
  const [userList, setUserList] = useState([]);

  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    Axios.get("/api/user/all").then(({ data }) => {
      if (isAlive) setUserList(data);
    });
    return () => setIsAlive(false);
  }, []);

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        {/*<Breadcrumb
          routeSegments={[
            { name: "Pages", path: "/pages" },
            { name: "User List 3" },
          ]}
        />*/}
        <div className="  text-black  text-40 font-medium">
          Daily Challenges
        </div>
      </div>
      <DailyChallenge1/>
      <DailyChallenge2/>
   <div className="mb-sm-30">  
    <div className="  text-black  text-40 font-medium">
          Weekly Challenges
        </div>
        </div>
        <WeeklyChallenge1/>
        <WeeklyChallenge2/>
    </div>
  );
};

export default ChallengesPage;
