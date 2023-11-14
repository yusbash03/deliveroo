import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Category name',
      type: 'string',
    }),
    defineField({
      name: 'Image',
      title: 'Category Image',
      type: 'image',
    }),
  ],
})
