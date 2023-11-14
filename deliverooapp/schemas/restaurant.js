import {defineField, defineType} from 'sanity'

export default ({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_desc',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'lat',
      title: 'Restaurant latitude',
      type: 'number',
    },
    {
      name: 'lng',
      title: 'Restaurant longitude',
      type: 'number',
    },
    {
      name: 'address',
      title: 'Restaurant address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'enter a rating from (1 - 5 stars)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5).error('Please eanter a number between 1 - 5'),
    },
    {
      name: 'type',
      title: 'Category',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: [{type: 'category'}]
    },
    {
      name: 'state',
      title: 'State',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: [{type: 'state'}]
    },
    {
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of:[{type: "reference", to: [{type: "dishes"}]}]
    },
    {
      name: 'isDeleted',
      title: 'Restaurant Activeness',
      type: 'boolean',
    },
  ],

  // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author.name',
  //     media: 'mainImage',
  //   },
  //   prepare(selection) {
  //     const {author} = selection
  //     return {...selection, subtitle: author && `by ${author}`}
  //   },
  // },
})
