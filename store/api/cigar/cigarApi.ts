import { baseApi } from "../baseApi";

const cigarApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllCigars: build.query({
            query: () => ({
                url: `/cigarData`,
                method: "GET",
            }),
            providesTags: ["Cigars"],
        }),

        createCigar: build.mutation({
            query: (data: any) => ({
                url: `/cigarData`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Cigars"],
        }),

        updateCigar: build.mutation({
            query: ({ data, id }: { data: any; id: string }) => ({
                url: `/cigarData/${id}`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Cigars"],
        }),

        getCigar: build.mutation({
            query: (id: string) => ({
                url: `/cigarData/${id}`,
                method: "GET",
            }),
            invalidatesTags: ["Cigars"],
        }),

        deleteCigar: build.mutation({
            query: (id: string) => ({
                url: `/cigarData/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Cigars"],
        }),
    }),
});

export const {
    useGetAllCigarsQuery,
    useCreateCigarMutation,
    useDeleteCigarMutation,
    useUpdateCigarMutation,
} = cigarApi;
