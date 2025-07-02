import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const Tags = {
    ADMIN: "ADMIN"
}

export const apis = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/api`,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("access_token");
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: [Tags.ADMIN],
    endpoints: (builder) => ({
        adminLogin: builder.mutation({
            query: (userData) => ({
                url: '/admin/admin-login',
                method: 'POST',
                body: userData,
            }),
        }),
        adminDetails: builder.query({
            query: () => ({
                url: '/admin',
                method: 'GET',
            }),
            providesTags:[Tags.ADMIN]
        }),
        adminSignout: builder.mutation({
            query: () => ({
                url: '/admin/sign-out',
                method: 'POST'
            }),
            invalidatesTags:[Tags.ADMIN]
        }),

    }),
});

export const {
    useAdminLoginMutation,
    useAdminDetailsQuery,
    useAdminSignoutMutation
} = apis;
