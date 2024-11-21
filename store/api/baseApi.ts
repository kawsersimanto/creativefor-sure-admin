import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `https://creative-for-sure-backend-one.vercel.app/api/v1`,
        credentials: "include",
        prepareHeaders: (headers: any) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set("authorization", ` ${token}`);
            }
            return headers;
        },
    }),
    endpoints: () => ({}),
    tagTypes: ["Auth", "Cigars", "Brands"],
});
