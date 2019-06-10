export interface TableData {
    id: string,
    type: string,
    attributes: {
      content: string
    },
    links: {
      self: string
    },
    relationships: {
      authors: {
        links: {
          self: string
        },
      },
      publishers: {
        links: {
          self: string
        },
      },
    }
  
}