import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dishes',
  title: 'Dishes',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of dish',
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
      name: 'image',
      title: 'Image of dish',
      type: 'image',
    }),
    defineField({
      name: 'price',
      title: 'Price of dish',
      type: 'number',
    }),
  ],
})
