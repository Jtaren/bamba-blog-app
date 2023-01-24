import { createPreviewSubscriptionHook, createCurrentUserHook } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
import { client } from './client'

export const urlFor = ( source ) => createImageUrlBuilder(client).image(source)

export const usePreviewSubscription = createPreviewSubscriptionHook(client)

export const useCurrentUser = createCurrentUserHook(client)