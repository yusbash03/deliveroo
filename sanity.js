import sanityClient from './deliverooapp/node_modules/@sanity/client'
import imageUrlBuilder from './deliverooapp/node_modules/@sanity/image-url'
//import imageUrlBuilder from '@sanity/image-url'
//import {createClient} from '@sanity/client'

export const client =  sanityClient({
 useCdn: true,
 projectId: '6h25annt',
 dataset: 'production',
 apiVersion: '2021-08-31', // use a UTC date string
 //token: 'sanity-auth-token', // or leave blank for unauthenticated usage
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);