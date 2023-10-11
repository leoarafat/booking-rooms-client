import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";

const USER_URL = "/user";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userCreate: build.mutation({
      query: (userData) => ({
        url: `${USER_URL}/signup`,
        method: "POST",
        data: userData,
      }),

      //   providesTags: tagTypes.user,
    }),
  }),
});

export const { useUserCreateMutation } = userApi;
