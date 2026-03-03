import {defineField, defineType} from 'sanity'

export const venueType = defineType({
  name: 'venue',
  title: 'Venue',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'city',
      type: 'string',
    }),
    defineField({
      name: 'country',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'geopoint',
      description: 'Pick the venue location on the map or enter latitude/longitude.',
    }),
  ],
})