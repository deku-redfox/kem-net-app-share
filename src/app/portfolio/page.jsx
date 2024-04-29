import React from 'react'

async function getDocs() {
    const NodeParse = require('parse/node')
    const PARSE_HOST_URL = 'https://appsshare.b4a.io/';

    NodeParse.initialize('nXh5R3BpfoA8XgTy8UDFDK9A3PLZQjRnjeQxcLJv', 'Y32qQkoFccyI1zaUmsUQiZqLtzJj8pvfxhzMdnxY')
    NodeParse.serverURL = PARSE_HOST_URL

    const blogQuery = new NodeParse.Query('AppModel')
    const blog = await blogQuery.first()

    return blog.toJSON()
}


const page = async () => {
  const results = await getDocs();

  return (
    <div>page</div>
  )
}

export default page