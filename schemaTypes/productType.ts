import {defineField, defineType} from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'price',
      type: 'number',
    }),
    defineField({
      name: 'enableSale',
      title: 'Enable Sale Price',
      type: 'boolean',
    }),
    defineField({
      name: 'salePricing',
      title: 'Sale Pricing',
      type: 'object',
      hidden: ({document}) => !document?.enableSale,
      fieldsets: [
        {
          name: 'saleDates',
          title: 'Sale Dates',
          options: {columns: 2},
        },
      ],
      fields: [
        defineField({
          name: 'salePrice',
          title: 'Sale Price',
          type: 'number',
        }),
        defineField({
          name: 'saleStartDate',
          title: 'Sale Start Date',
          type: 'datetime',
          fieldset: 'saleDates',
        }),
        defineField({
          name: 'saleEndDate',
          title: 'Sale End Date',
          type: 'datetime',
          fieldset: 'saleDates',
        }),
      ],
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'category',
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'stock',
      type: 'number',
    }),
    defineField({
      name: 'isFeatured',
      type: 'boolean',
    }),
  ],
})