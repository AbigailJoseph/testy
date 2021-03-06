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
import SimpleMenu from "../menu/SimpleMenu";

const subscribarList = [
  {
    rank: "#1",
    name: "Lilly",
    school: "Oakton HS",
    grade: "10th"
  },
  {
    rank: "#2",
    name: "Max",
    school: "Westfield HS",
    grade: "11th"
  },
  {
    rank: "#3",
    name: "Clara",
    school: "Oakton HS",
    grade: "9th"
  },
  {
    rank: "#4",
    name: "Callie",
    school: "Chantilly HS",
    grade: "12th"
  },
  {
    rank: "#5",
    name: "Daniel",
    school: "Chantilly HS",
    grade: "10th"
  },
  {
    rank: "#6",
    name: "Jacob",
    school: "Franklin MS",
    grade: "8th"
  },
  {
    rank: "#7",
    name: "Sara",
    school: "Oakton HS",
    grade: "10th"
  },
  {
    rank: "#8",
    name: "Emma",
    school: "Westfield HS",
    grade: "10th"
  },
  {
    rank: "#9",
    name: "Craig",
    school: "Robinson HS",
    grade: "12th"
  },
  {
    rank: "#10",
    name: "Dean",
    school: "Oakton HS",
    grade: "11th"
  }
];

const SimpleTable = () => {
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

export default SimpleTable;
