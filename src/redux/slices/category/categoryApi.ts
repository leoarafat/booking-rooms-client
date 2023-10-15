import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createCategory: build.mutation({
      query: (data) => ({
        url: `/category/create-category`,
        method: "POST",
        data: data,
      }),

      invalidatesTags: [tagTypes.user],
    }),
    //!
    // createAdmin: build.mutation({
    //   query: (adminData) => ({
    //     url: `/user/create-admin`,
    //     method: "POST",
    //     data: adminData,
    //   }),

    //   invalidatesTags: [tagTypes.user],
    // }),
    // //!
    // userLogin: build.mutation({
    //   query: (loginData) => ({
    //     url: `/auth/login`,
    //     method: "POST",
    //     data: loginData,
    //   }),
    //   invalidatesTags: [tagTypes.user],
    // }),
    // //!
    // loadUser: build.query({
    //   query: (id: string | string[] | undefined) => ({
    //     url: `/user/${id}`,
    //     method: "GET",
    //     credentials: "include" as const,
    //   }),
    //   providesTags: [tagTypes.user],
    // }),
    // //!

    // users: build.query({
    //   query: (arg: Record<string, any>) => {
    //     return {
    //       url: `/user`,
    //       method: "GET",
    //       params: arg,
    //     };
    //   },
    //   transformResponse: (response: any[], meta: any) => {
    //     return {
    //       users: response,
    //       meta,
    //     };
    //   },
    //   providesTags: [tagTypes.admin],
    // }),
    // //!
    // updateAvatar: build.mutation({
    //   query: (avatar) => ({
    //     url: "/user/update-user-avatar",
    //     method: "PUT",
    //     data: { avatar },
    //     credentials: "include" as const,
    //   }),
    // }),
    // //!
    // updateProfile: build.mutation({
    //   query: ({ id, name }) => ({
    //     url: `/user/update-my-profile/${id}`,
    //     method: "PATCH",
    //     data: { name },
    //   }),
    //   invalidatesTags: [tagTypes.user],
    // }),
    // //!
    // updatePassword: build.mutation({
    //   query: ({ oldPassword, newPassword }) => ({
    //     url: "/auth/change-password",
    //     method: "POST",
    //     data: { oldPassword, newPassword },
    //     credentials: "include" as const,
    //   }),
    //   invalidatesTags: [tagTypes.updatePassword],
    // }),
    // //!
    // updateAdmin: build.mutation({
    //   query: (data) => ({
    //     url: `/user/admin-profile/${data.id}`,
    //     method: "PATCH",
    //     data: data.body,
    //   }),
    //   invalidatesTags: [tagTypes.admin],
    // }),
    // //! delete student
    // deleteAdmin: build.mutation({
    //   query: (id) => ({
    //     url: `/user/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: [tagTypes.admin],
    // }),
    // //! delete student
    // deleteUser: build.mutation({
    //   query: (id) => ({
    //     url: `/user/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: [tagTypes.admin],
    // }),
    // //!
    // //!
    // updateProfileByIdmin: build.mutation({
    //   query: (data) => ({
    //     url: `/user/user-profile/${data.id}`,
    //     method: "PATCH",
    //     data: data.body,
    //   }),
    //   invalidatesTags: [tagTypes.user],
    // }),
  }),
});

export const { useCreateCategoryMutation } = categoryApi;
