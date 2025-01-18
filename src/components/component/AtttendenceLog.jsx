import ShadcnTable from "./Table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const data = [
  {
    date: "01-10-24",
    status: "Present",
    clockIn: "10:02 Am",
    clockOut: "7:00 Pm",
    duration: "9 hrs 2 min",
    action: "Get Approval",
  },
  {
    date: "30-09-24",
    status: "Present",
    clockIn: "10:45 Am (L)",
    clockOut: "7:15 Pm",
    duration: "9 hrs 2 min",
    action: "Get Approval",
  },
  {
    date: "29-09-24",
    status: "Absent",
    clockIn: "--",
    clockOut: "--",
    duration: "--",
    action: "Get Approval",
  },
  {
    date: "28-09-24",
    status: "Present",
    clockIn: "10:10 Am",
    clockOut: "7:30 Pm",
    duration: "9 hrs 2 min",
    action: "Get Approval",
  },
  {
    date: "27-09-24",
    status: "Weekly Off",
    clockIn: "--",
    clockOut: "--",
    duration: "--",
    action: "Get Approval",
  },
  {
    date: "26-09-24",
    status: "Anomaly",
    clockIn: "10:10 Am",
    clockOut: "AC",
    duration: "00:00",
    action: "Get Approval",
  },
  {
    date: "25-09-24",
    status: "Present",
    clockIn: "10:10 Am",
    clockOut: "7:00 Pm",
    duration: "9 hrs 2 min",
    action: "Get Approval",
  },
];
const AttendanceLog = () => {
  return (
    <div className="flex-grow bg-gray-100 p-6 rounded-md shadow">
      <Tabs defaultValue="attendance" className="">
        <TabsList className="flex flex-row justify-evenly w-full border-b">
          <TabsTrigger
            value="attendance"
            className="flex-1 text-[16px] font-medium pb-2 text-center 
                   text-[#475569] data-[state=active]:text-[#0F172A] 
                   data-[state=active]:border-b-2 data-[state=active]:border-black"
          >
            Attendance Log
          </TabsTrigger>
          <TabsTrigger
            value="leave"
            className="flex-1 text-[16px] font-medium pb-2 text-center 
                   text-[#475569] data-[state=active]:text-[#0F172A] 
                   data-[state=active]:border-b-2 data-[state=active]:border-black"
          >
            Leave Log
          </TabsTrigger>
        </TabsList>
        <TabsContent value="attendance">
          <h2 className="text-[#0F172A] font-medium text-lg mt-10  ml-4">
            Attendance Log
          </h2>
          <ShadcnTable data={data} />
          <div className="flex justify-end">
            <button className="underline text-black mt-4 px-8  underline-offset-4">
              View More
            </button>
          </div>
        </TabsContent>
        <TabsContent value="leave">
          <h2 className="text-[#0F172A] font-medium text-lg mt-10 mb-4 ml-4">
            Leave Log content
          </h2>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AttendanceLog;
