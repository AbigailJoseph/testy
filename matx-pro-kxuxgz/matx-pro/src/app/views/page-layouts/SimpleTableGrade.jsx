import React from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  IconButton,
  Icon,
  TableRow
} from "@material-ui/core";
import SimpleMenu from "../material-kit/menu/SimpleMenu";

const subscribarList = [
  {
    rank: "#1",
    name: "Lilly",
    school: "Oakton HS",
    grade: "10th"
  },
  {
    rank: "#2",
    name: "Daniel",
    school: "Chantilly HS",
    grade: "10th"
  },
  {
    rank: "#3",
    name: "Sara",
    school: "Oakton HS",
    grade: "10th"
  },
  {
    rank: "#4",
    name: "Emma",
    school: "Westfield HS",
    grade: "10th"
  }
];

const SimpleTableGrade = () => {
  return (
    <div className="w-full overflow-auto">
      <Table className="whitespace-pre">
        <TableHead>
          <TableRow>
            <TableCell className="px-0 bg-light-error">Ranking</TableCell>
            <TableCell className="px-0 bg-light-error">Name</TableCell>
            <TableCell className="px-0 bg-light-error">School</TableCell>
            <TableCell className="px-0 bg-light-error">Grade </TableCell>
             
          </TableRow>
        </TableHead>
        <TableBody>
          {subscribarList.map((subscriber, index) => (
            <TableRow key={index}>
              <TableCell className="px-0 capitalize" align="left">
                {subscriber.rank}
              </TableCell>
              <TableCell className="px-0 capitalize" align="left">
                {subscriber.name}
              </TableCell>
              <TableCell className="px-0 capitalize" align="left">
                {subscriber.school}
              </TableCell>
              <TableCell className="px-0 capitalize">
                {subscriber.grade}
              </TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SimpleTableGrade;

