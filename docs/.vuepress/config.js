module.exports = {
  title: "notes",
  description: "A collection of notes",
  themeConfig: {
    sidebar: {
      '/comm-296/': [
        '05-product-strategy/',
        '06-pricing-strategy/',
        '07-distribution-strategy/',
        '08-promotion-strategy/',
        '09-ethics-sustainability/',
      ]
    },
    smoothScroll: true
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require("markdown-it-mark"))
      md.use(require("markdown-it-underline"))
    }
  },
  plugins: [
    'vuepress-plugin-mathjax',
    {
      target: 'svg'
    }
  ]
}