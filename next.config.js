const withMdxEnhanced = require('next-mdx-enhanced')
const mdxPrism = require('mdx-prism')

module.exports = withMdxEnhanced({
  layoutPath: 'src/layouts',
  defaultLayout: true,
  remarkPlugins: [
    require('remark-autolink-headings'),
    require('remark-slug'),
    require('remark-code-titles'),
  ],
  rehypePlugins: [mdxPrism],
  fileExtensions: ['mdx'],
  usesSrc: true,
})()
