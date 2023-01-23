export default {
    name: 'blockContent',
    type: 'object',
    title: "Block title",
    fields: [
      {
        name: 'blocks',
        type: 'array',
        of: [
          {
            type: 'block',
            styles: [
          {title: "Normal", value: "normal"},
          {title: "H1", value: "h1"},
          {title: "H2", value: "h2"},
          {title: "H3", value: "h3"},
          {title: "H4", value: "h4"},
          {title: "Quote", value: "blockquote"},
            ],
            lists: [
                {title: "Bullet", value: "bullet"}
            ],
            marks:{
                decorators:[
                {title: "Strong", value: "strong"},
                {title: "Emphasis", value: "em"},
                ],
                annotations:[
                    {
                    title: 'URL',
                    name: 'link',
                    type: 'object',
                    fields:[
                    {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                    },
                    ],
                    },
                    ],
            },
                
            // Allow other block types to be inserted inside this block type
            of: [
              {
                type: 'block',
                styles: [],
                lists: [],
                of: [{ type: 'text' }],
              },
              { type: 'image' },
            
            ],
          },
        ],
      },
    ],
  }
  