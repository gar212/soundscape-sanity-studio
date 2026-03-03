import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {googleMapsInput} from '@sanity/google-maps-input'
import {schemaTypes} from './schemaTypes'

const googleMapsApiKey =
  process.env.SANITY_STUDIO_GOOGLE_MAPS_API_KEY ||
  (import.meta as any).env?.SANITY_STUDIO_GOOGLE_MAPS_API_KEY ||
  ''
const hasGoogleMapsApiKey =
  googleMapsApiKey.trim().length > 0 && googleMapsApiKey !== 'your_google_maps_api_key_here'

export default defineConfig({
  name: 'default',
  title: 'sanity-ecommerce',

  projectId: 'uoibksb5',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    ...(hasGoogleMapsApiKey ? [googleMapsInput({apiKey: googleMapsApiKey})] : []),
  ],

  schema: {
    types: schemaTypes,
  },
})
