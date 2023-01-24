import { createClient } from 'next-sanity'
import { config } from './config'

export const sanityClient = createClient(config)

export const previewClient = createClient({
    ...config,
    useCdn: true,
    token: "skHJu2kLNmLu6HvPn4ejRmTxLTbjABSShR45amOJYpBwPtHBqWGW0tVL68AFsOHZJyXopMNEjE1bA1YZjh7vjvYD1kSt54aOy3LJtu8P4TmMJWZ2KyrK4TBRaP6Xpr7JF6MMd9cmiHjTydjVmkfAAPhRtApz6fl5Vxzemjqy4AcWBmdQFxdD"
})

export const getClient = ( usePreview ) => usePreview ? previewClient : sanityClient