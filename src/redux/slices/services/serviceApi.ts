import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createService: build.mutation({
      query: (data) => ({
        url: `/services/create-service`,
        method: "POST",
        data: data,
      }),

      invalidatesTags: [tagTypes.service],
    }),
    //!
    singleService: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/services/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.service],
    }),
    //!
    services: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `/services`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: any[], meta: any) => {
        return {
          services: response,
          meta,
        };
      },
      providesTags: [tagTypes.service],
    }),
    //!
    updateService: build.mutation({
      query: (data) => ({
        url: `/services/update-service/${data.id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.service],
    }),
    //!
    deleteService: build.mutation({
      query: (id) => ({
        url: `/services/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.service],
    }),
  }),
});

export const {
  useCreateServiceMutation,
  useDeleteServiceMutation,
  useServicesQuery,
  useSingleServiceQuery,
  useUpdateServiceMutation,
} = serviceApi;
