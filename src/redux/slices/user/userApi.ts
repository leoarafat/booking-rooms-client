import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userCreate: build.mutation({
      query: (userData) => ({
        url: `/user/create-user`,
        method: "POST",
        data: userData,
      }),

      //   providesTags: tagTypes.user,
    }),
    //!
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `/auth/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    //!
    loadUser: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/user/${id}`,
        method: "GET",
        credentials: "include" as const,
      }),
      // providesTags: [tagTypes.],
    }),
    //!
    updateAvatar: build.mutation({
      query: (avatar) => ({
        url: "/user/update-user-avatar",
        method: "PUT",
        data: { avatar },
        credentials: "include" as const,
      }),
    }),
    //!
    updateProfile: build.mutation({
      query: ({ id, name }) => ({
        url: `/user/update-my-profile/${id}`,
        method: "PATCH",
        data: { name },
      }),
      invalidatesTags: [tagTypes.user],
    }),
    //!
    updatePassword: build.mutation({
      query: ({ oldPassword, newPassword }) => ({
        url: "/auth/change-password",
        method: "POST",
        data: { oldPassword, newPassword },
        credentials: "include" as const,
      }),
      invalidatesTags: [tagTypes.updatePassword],
    }),
    //!

    //!
  }),
});

export const {
  useUserCreateMutation,
  useUserLoginMutation,
  useLoadUserQuery,
  useUpdateAvatarMutation,
  useUpdateProfileMutation,
  useUpdatePasswordMutation,
} = userApi;
