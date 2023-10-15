// import React, { ReactNode } from "react";

// interface ActionBarProps {
//   title?: string;
//   children?: ReactNode;
// }

// const ActionBar: React.FC<ActionBarProps> = ({ title, children }) => {
//   return (
//     <div
//       style={{
//         backgroundImage:
//           "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(10,10,77,1) 85%, rgba(22,33,36,1) 100%)",
//       }}
//       className="w-full   p-4 shadow-lg flex justify-between items-center"
//     >
//       <div className="text-2xl font-bold text-gray-100">{title}</div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           margin: "10px 0px",
//         }}
//         className="space-x-4"
//       >
//         {children}
//       </div>
//     </div>
//   );
// };

// export default ActionBar;
type ActionBarProps = {
  title?: string;
  children?: React.ReactElement | React.ReactNode;
};

const ActionBar = ({ title, children }: ActionBarProps) => {
  return (
    <div
      style={{
        margin: "10px 0",
      }}
    >
      <h1>{title}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "10px 0px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ActionBar;
