import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/users" }),

  endpoints(builder) {
    return {
      fetchUser: builder.query({
        query: (name) => {
          return {
            url: `/${name}`,
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchUserQuery } = usersApi;
export { usersApi };
