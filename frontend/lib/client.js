import { createClient } from "next-sanity";


export const client = createClient({
    dataset: 'production',
    projectId: "ek734hes",
    apiVersion: '2021-10-14',
    useCdn: false,
})