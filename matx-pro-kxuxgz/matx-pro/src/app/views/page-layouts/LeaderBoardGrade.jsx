import React from "react";
import SimpleTableGrade from "./SimpleTableGrade";
import PaginationTable from "../material-kit/tables/PaginationTable";
import { Breadcrumb, SimpleCard } from "matx";
import SimpleMenu from "../material-kit/menu/SimpleMenu";
import {Grid, TextField, MenuItem} from "@material-ui/core"

const LeaderBoardGrade = ({
    orderBy,
    handleChange,
  }) => {
  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
       {/* <Breadcrumb
          routeSegments={[
            { name: "Material", path: "/material" },
            { name: "Table" }
          ]}
        />*/}
      </div>
      <div className=" justify-center text-black text-40 font-medium">
           Leader Board: Most Studied < SimpleMenu/>  
      </div>
      <SimpleCard>
       <SimpleTableGrade/>
      </SimpleCard>
    

     <div className="py-3" />
     {/* <SimpleCard title="Pagination Table">
        <PaginationTable />
      </SimpleCard>*/}
      </div> 
  );
};

export default LeaderBoardGrade;

