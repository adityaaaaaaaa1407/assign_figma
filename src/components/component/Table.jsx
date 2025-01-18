/* eslint-disable react/prop-types */

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

const ShadcnTable = ({ data }) => {
  const headerClass = "text-[#0F172A] text-sm font-medium";
  return (
    <Table className="w-full mt-4">
      <TableHeader>
        <TableRow>
          {[
            "Date",
            "Status",
            "Clock In",
            "Clock Out",
            "Duration",
            "Action",
          ].map((header, index) => (
            <TableHead key={index} className={headerClass}>
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index} className=" h-[72px]">
            <TableCell className="text-[#0F172A] text-sm font-medium">
              {row.date}
            </TableCell>
            <TableCell className="text-[#334155] text-sm ">
              {row.status}
            </TableCell>
            <TableCell className="text-[#334155] text-sm ">
              {row.clockIn}
            </TableCell>
            <TableCell className="text-[#334155] text-sm">
              {row.clockOut}
            </TableCell>
            <TableCell className="text-[#334155] text-sm">
              {row.duration}
            </TableCell>
            <TableCell>
              <button className="text-[#0F172A] font-medium underline text-sm   underline-offset-4 ">
                {row.action}
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ShadcnTable;
