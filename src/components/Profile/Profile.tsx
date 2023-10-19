// /* eslint-disable @next/next/no-img-element */
// import Link from "next/link";
// import React from "react";
// import avatarIcon from "../../../public/assets/user.png";
// type Props = {
//   avatar: any;
//   user: any;
// };
// const UserProfile = ({ user, avatar }: Props) => {
//   return (
//     <div className="max-w-md mx-auto p-6  rounded-lg shadow-lg border hover:shadow-xl">
//       <div className="text-center">
//         <img
//           src={
//             user?.avatar || avatar ? user?.avatar?.url || avatar : avatarIcon
//           }
//           alt="Profile Picture"
//           className="w-full h-[300px] mx-auto mb-4 object-cover"
//         />
//         <h2 className="text-3xl font-semibold text-gray-100">{user?.name}</h2>
//         <p className="text-gray-100 text-lg">Role: {user?.role}</p>
//       </div>
//       <div className="mt-4 text-center ">
//         <p className="text-gray-100">Hey dear {user?.name} ! Welcome back</p>
//       </div>
//       <div className="mt-4">
//         <Link
//           href={`/profile/update/${user?._id}`}
//           className="text-blue-500 hover:underline"
//         >
//           Edit Profile
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;
import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const userContainerStyle = {
  maxWidth: "400px",
  margin: "auto",
  padding: "16px",
  borderRadius: "16px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#09082E",
  color: "#fff",
  textAlign: "center",
};

const avatarStyle = {
  width: "150px",
  height: "150px",
  margin: "0 auto",
  borderRadius: "50%",
  objectFit: "cover",
};

const titleStyle = {
  fontSize: "24px",
  fontWeight: "bold",
};

const roleStyle = {
  fontSize: "18px",
  marginTop: "8px",
};

const welcomeStyle = {
  fontSize: "16px",
  marginTop: "16px",
};

const editButtonStyle = {
  marginTop: "16px",
};

const UserProfile = ({ user, avatar }: any) => {
  return (
    //@ts-ignore
    <div style={userContainerStyle}>
      <Avatar
        src={user?.avatar?.url || avatar}
        alt="Profile Picture"
        //@ts-ignore
        style={avatarStyle}
      />
      <Typography variant="h4" style={titleStyle}>
        {user?.name}
      </Typography>
      <Typography variant="h6" style={roleStyle}>
        Role: {user?.role}
      </Typography>
      <Typography variant="body1" style={welcomeStyle}>
        Hey dear {user?.name}! Welcome back.
      </Typography>
      <Button
        href={`/profile/update/${user?._id}`}
        variant="contained"
        style={editButtonStyle}
      >
        Edit Profile
      </Button>
    </div>
  );
};

export default UserProfile;
