"use client";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import ActionBar from "@/components/ui/ActionBar";
import Button from "@mui/material/Button";

import { FcCancel } from "react-icons/fc";

import Swal from "sweetalert2";
import { format } from "timeago.js";

import {
  useBlogsQuery,
  useDeleteBlogMutation,
} from "@/redux/slices/blog/blogApi";
//!

//!
const BookingList = () => {
  //@ts-ignore
  const { data: blogData } = useBlogsQuery({});

  const [deleteBlog] = useDeleteBlogMutation();
  //!
  const handleDelete = async (item: any) => {
    try {
      const result = await Swal.fire({
        title: "Delete Item",
        text: "Are you sure you want to cancel booking?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
      });

      if (result.isConfirmed) {
        const res = await deleteBlog(item.id);
        //@ts-ignore
        if (res?.data?.title) {
          Swal.fire("Deleted!", "Blog has been deleted.", "success");
        }
      }
    } catch (error) {
      Swal.fire("Error", "An error occurred while deleting the item.");
    }
  };

  //!
  const columns = [
    { field: "id", headerName: "ID", flex: 0.3 },
    { field: "startDate", headerName: "Start Date", flex: 0.5 },
    { field: "endDate", headerName: "End Date", flex: 0.5 },
    { field: "totalPrice", headerName: "Total Price", flex: 0.5 },
    { field: "status", headerName: "Status", flex: 0.5 },
    { field: "created_at", headerName: "Created At", flex: 0.5 },

    {
      field: " ",
      headerName: "Cancel",
      flex: 0.2,
      renderCell: (params: any) => {
        return (
          <Button onClick={() => handleDelete(params)}>
            <FcCancel size={20} />
          </Button>
        );
      },
    },
  ];
  //!
  //!
  const rows: any[] = [];
  if (blogData) {
    //@ts-ignore
    blogData?.blogs?.data?.forEach((item: any) => {
      rows.push({
        id: item.id,
        startDate: item.title,
        endDate: item.description,
        totalPrice: item.avatar,
        status: item.avatar,
        created_at: format(item.createdAt),
      });
    });
  }
  //!

  return (
    <div>
      <ActionBar title="Booking List">
        <input
          type="text"
          placeholder="Search..."
          className={`w-[150px] text-white bg-transparent border rounded h-[40px] px-2 outline-none mt-[10px] font-Poppins`}
        />
      </ActionBar>
      <div className="bg-white" style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default BookingList;