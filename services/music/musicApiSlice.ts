import { songsModel } from "@/types/dataType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
interface musicsType {
  data: songsModel[];
}
export const musicsApi = createApi({
  reducerPath: "musics",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  endpoints: (builder) => ({
    getMusics: builder.query<musicsType, void>({
      query: () => "/music",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMusicsQuery } = musicsApi;
