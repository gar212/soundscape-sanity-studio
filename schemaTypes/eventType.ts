import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  orderings: [
    {
      title: 'Newest Events',
      name: 'dateDesc',
      by: [{field: 'date', direction: 'desc'}],
    },
    {
      title: 'Oldest Events',
      name: 'dateAsc',
      by: [{field: 'date', direction: 'asc'}],
    },
  ],
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
    }),
    defineField({
      name: 'eventType',
      type: 'string',
    }),    
    defineField({
      name: 'date',
      type: 'datetime',
    }),
    defineField({
      name: 'doorsOpen',
      type: 'number',
    }),
    defineField({
      name: 'venue',
      type: 'reference',
      to: [{type: 'venue'}],
    }),
    defineField({
      name: 'headline',
      type: 'reference',
      to: [{type: 'artist'}],
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'details',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'tickets',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      date: 'date',
      media: 'image',
    },
    prepare(selection) {
      const {title, date, media} = selection
      const subtitle = date
        ? new Date(date).toLocaleString(undefined, {
            dateStyle: 'medium',
            timeStyle: 'short',
          })
        : 'No date set'

      return {
        title,
        subtitle,
        media,
      }
    },
  },
})