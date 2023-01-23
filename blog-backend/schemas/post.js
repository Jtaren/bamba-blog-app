export default{
    name: "name",
    type: "document",
    title: "Blog post",
    fields:[
        {
            name: "title",
            type: "string",
            title: "Title",
        },
        {
            name: "slug",
            type: "slug",
            title: "Slug",
            options:{
                source: "title",
                maxLength: 96,
            },
        },
        {
            name: "author",
            type: "reference",
            title: "Author",
            to:{type: "author"},
        },
        {
            name: "mainImage",
            type: "image",
            title: "Main Image",
            options:{
                hotspot: true,
            },

        },
        {
            name: "publishedAt",
            type: "datetime",
            title: "Published At",
        },
        {
            name: "body",
            type: "blockContent",
            title: "Body",
        },
    ]
}