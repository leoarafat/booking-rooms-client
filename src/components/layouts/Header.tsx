/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React from "react";
import defaultUserImage from "../../../public/assets/user.png";
import LogoImage from "../../../public/assets/logo.png";
import Image from "next/image";
import { getUserInfo } from "@/services/auth.service";
import { useLoadUserQuery } from "@/redux/slices/user/userApi";
const Header = () => {
  const user = getUserInfo() as any;

  const { data, isLoading, error } = useLoadUserQuery(user?.userId);

  return (
    <>
      <div
        className=" z-40 w-full border-b  "
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(10,10,77,1) 85%, rgba(22,33,36,1) 100%)",
        }}
      >
        <div className="container m-auto px-2 md:px-12 lg:px-7">
          <div className="flex px-6 md:px-0 z-20 flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
            <input
              type="checkbox"
              name=""
              id="toggleNav"
              className="peer hidden"
            />
            <label
              htmlFor="toggleNav"
              role="overlaynav"
              className="fixed left-0 top-0 transition-all
                        md:peer-checked:hidden md:hidden opacity-0 hidden peer-checked:z-0
                        peer-checked:opacity-75 peer-checked:block w-full h-screen
                        bg-gray-200 bg-opacity-75 dark:bg-darker dark:opacity-80"
            ></label>
            <div className="relative z-40">
              <Link href="/" aria-label="logo">
                <Image
                  src={LogoImage}
                  className="w-20 sm:w-20 rounded-full "
                  alt="User logo"
                  width="144"
                  height="68"
                />
              </Link>
            </div>

            <div
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(10,10,77,1) 85%, rgba(22,33,36,1) 100%)",
              }}
              className=" fixed h-full w-4/5 max-w-sm top-0 -left-full peer-checked:-left-0 md:relative md:top-0 md:left-0 transition-all z-30 md:flex items-center p-8 md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent md:w-max"
            >
              <div className="z-20 flex gap-8 md:gap-0 flex-col md:flex-row md:items-center w-full">
                <ul className="pt-28 lg:pt-0 gap-8 tracking-wide font-medium flex-col flex md:flex-row md:gap-0 t">
                  <li className="max-w-max">
                    <a href="#" className="block md:px-3 group">
                      <div
                        className="relative text-white
                                                        before:absolute before:-bottom-2 md:before:-bottom-7 before:origin-left before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-cyan-800 dark:before:bg-cyan-400 before:transition before:scale-x-0 group-hover:before:scale-x-100"
                      >
                        <span className="transition group-hover:text-cyan-700 dark:group-hover:text-cyan-400">
                          Home
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="max-w-max">
                    <a href="#" className="block md:px-3 group">
                      <div
                        className="relative text-white
                                                        before:absolute before:-bottom-2 md:before:-bottom-7 before:origin-left before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-cyan-800 dark:before:bg-cyan-400 before:transition before:scale-x-0 group-hover:before:scale-x-100"
                      >
                        <span className="transition group-hover:text-cyan-700 dark:group-hover:text-cyan-400">
                          Services
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="max-w-max">
                    <a href="#" className="block md:px-3 group">
                      <div
                        className="relative text-white
                                                        before:absolute before:-bottom-2 md:before:-bottom-7 before:origin-left before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-cyan-800 dark:before:bg-cyan-400 before:transition before:scale-x-0 group-hover:before:scale-x-100"
                      >
                        <span className="transition group-hover:text-cyan-700 dark:group-hover:text-cyan-400">
                          About US
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="max-w-max">
                    <a href="#" className="block md:px-3 group">
                      <div
                        className="relative text-white
                                                        before:absolute before:-bottom-2 md:before:-bottom-7 before:origin-left before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-cyan-800 dark:before:bg-cyan-400 before:transition before:scale-x-0 group-hover:before:scale-x-100"
                      >
                        <span className="transition group-hover:text-cyan-700 dark:group-hover:text-cyan-400">
                          FAQ
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="max-w-max">
                    <a href="#" className="block md:px-3 group">
                      <div
                        className="relative text-white
                                                        before:absolute before:-bottom-2 md:before:-bottom-7 before:origin-left before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-cyan-800 dark:before:bg-cyan-400 before:transition before:scale-x-0 group-hover:before:scale-x-100"
                      >
                        <span className="transition group-hover:text-cyan-700 dark:group-hover:text-cyan-400">
                          Blogs
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
                {user?.role ? (
                  <div className="flex sm:hidden pt-4 w-full">
                    <Link href={"/profile"}>
                      {" "}
                      <button
                        type="button"
                        title="Start buying"
                        className="flex justify-center items-center w-full py-3 px-6 text-center rounded-full transition bg-gray-900 dark:bg-gray-700 hover:bg-cyan-500 active:bg-cyan-600 focus:bg-cyan-800"
                      >
                        <span className="block text-white text-sm">
                          {data?.name}
                        </span>
                      </button>
                    </Link>
                  </div>
                ) : (
                  <div className="flex sm:hidden pt-4 w-full">
                    <Link href={"/login"}>
                      {" "}
                      <button
                        type="button"
                        title="Start buying"
                        className="flex justify-center items-center w-full py-3 px-6 text-center rounded-full transition bg-gray-900 dark:bg-gray-700 hover:bg-cyan-500 active:bg-cyan-600 focus:bg-cyan-800"
                      >
                        <span className="block text-white text-sm">Login</span>
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
            {user?.role ? (
              <div className="block-endnav w-max flex items-center gap-4">
                <Link href={"/profile"}>
                  {" "}
                  <Image
                    width={45}
                    height={45}
                    className="w-[45px] h-[45px] rounded-full cursor-pointer"
                    src={defaultUserImage}
                    alt=""
                  />
                </Link>

                <div className="flex items-center md:hidden max-h-10">
                  <label
                    role="button"
                    htmlFor="toggleNav"
                    aria-label="hamburger"
                    id="hamburger"
                    className="relative p-6 -mr-6"
                  >
                    <div
                      role="hidden"
                      id="line"
                      className="m-auto h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-200 transition duration-300"
                    ></div>
                    <div
                      role="hidden"
                      id="line2"
                      className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-200 transition duration-300"
                    ></div>
                  </label>
                </div>
              </div>
            ) : (
              <div className="block-endnav w-max flex items-center gap-4">
                <Link href={"/login"}>
                  {" "}
                  <button
                    type="button"
                    title="Start buying"
                    className="hidden sm:block w-full py-3 px-6 text-center rounded-full transition bg-gray-900 dark:bg-gray-700 hover:bg-cyan-500 active:bg-cyan-600 focus:bg-cyan-800 sm:w-max"
                  >
                    <span className="block text-white text-sm">Login</span>
                  </button>
                </Link>

                <div className="flex items-center md:hidden max-h-10">
                  <label
                    role="button"
                    htmlFor="toggleNav"
                    aria-label="hamburger"
                    id="hamburger"
                    className="relative p-6 -mr-6"
                  >
                    <div
                      role="hidden"
                      id="line"
                      className="m-auto h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-200 transition duration-300"
                    ></div>
                    <div
                      role="hidden"
                      id="line2"
                      className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-200 transition duration-300"
                    ></div>
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
// "use client";
// import * as React from "react";
// import defaultUserImage from "../../../public/assets/user.png";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
// import { getUserInfo } from "@/services/auth.service";
// import { useLoadUserQuery } from "@/redux/slices/user/userApi";

// const pages = ["Products", "Pricing", "Blog"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
//     null
//   );
//   const user = getUserInfo() as any;

//   const { data, isLoading, error } = useLoadUserQuery(user?.userId);
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
//     null
//   );

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             LOGO
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: "flex", md: "none" },
//               flexGrow: 1,
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: "white", display: "block" }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: "45px" }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default ResponsiveAppBar;
