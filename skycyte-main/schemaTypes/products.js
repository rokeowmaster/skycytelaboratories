import { defineField } from "sanity";

const product = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
        name: "name",
        title: "Name",
        type: "string",
        validation: (rule) => rule.required(),
      }),
    defineField({
        name: "stock",
        title: "Stock",
        type: "number",
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: "price",
        title: "Price",
        type: "number",
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: "image",
        title: "Image",
        type: "image",
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: "category",
        title: "Category",
        type: "string",
        validation: (rule) => rule.required(),
        options: {
            list: [
                { title: "All", value: "All" },
                { title: "Protection", value: "Protection" },
                { title: "Hygiene", value: "Hygiene" },
                { title: "Equipment", value: "Equipment" },
                { title: "Apparel", value: "Apparel" },
            
            ],
        },
    }),
  ],
};

export default product;