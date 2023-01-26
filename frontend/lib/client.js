import { createClient } from "next-sanity";


export const client = createClient({
    dataset: 'production',
    projectId: "ek734hes",
    apiVersion: '2021-10-21',
    useCdn: true,
    // token: "skHJu2kLNmLu6HvPn4ejRmTxLTbjABSShR45amOJYpBwPtHBqWGW0tVL68AFsOHZJyXopMNEjE1bA1YZjh7vjvYD1kSt54aOy3LJtu8P4TmMJWZ2KyrK4TBRaP6Xpr7JF6MMd9cmiHjTydjVmkfAAPhRtApz6fl5Vxzemjqy4AcWBmdQFxdD"
})