import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Featured category name',
      type: 'string',
      validation: (Rule)=> Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Description',
      type: 'string',
      validation: (Rule)=> Rule.max(300),
    }),
    defineField({
        name: 'restaurant',
        title: 'Restaurants',
        type: 'array',
        validation: (Rule) => Rule.required(),
        of:[{ type: "reference", to: [{type: "restaurant"}]}]
      }),
  ],
})
