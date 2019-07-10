module.exports = {
  title: 'Still looking for a name',
  description: 'Web representation of mgh87',
  base: '/',
  dest: 'dist/',
  evergreen: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: 'mgh87 <martin@thehuters.at>' }],
//    ['meta', { name: 'copyright', content: '网站内容版权所有，转载请注明出处' }],
//    ['meta', { name: "keywords", content: "m-less, less, mixins, 常用 mixins 文件, mixins 总结, mixins 整理, less 总结整理, less 技巧, css 简写, ououe, 雨无声, tolking, 前端技巧, 前端总结, 前端分享, ououe.com" }]
  ],
  theme: 'ououe',
  themeConfig: {
    defaultTheme: 'dark',
    cover: '/img/cover.jpg',
    //logo: '/img/logo.png',
    //needs config
    useVssue: false,
    postTime: {
      createTime: 'Creation time',
      lastUpdated: 'Last Reviewed'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/posts/' },
//      { text: 'Doc', link: '/lib/' },
      { text: 'Tags', link: '/tag/' },
      { text: 'Categories', link: '/category/'},
      { text: 'About', link: '/about/' }
    ],
    footer: [
      { text: 'Github', link: 'https://github.com/mgh87' }
    ]
  },
  postcss: {
    plugins: [
      require('postcss-propro'),
      require('postcss-flex-alias'),
      require('css-prefers-color-scheme/postcss'),
      require('autoprefixer')
    ]
  },
  plugins: [
    // Preventing sitemap errors
    ['@vuepress/last-updated', {
      transformer: (timestamp, lang) => {
        return new Date(timestamp).toISOString()
      }
    }],
    // permalink for posts
    ['blog-multidir', {
      postsDir: {
        posts: 'posts/:year/:month/:day/:slug'
      }
    }],
    // add vuepress-plugin-reading-progress
    ['reading-progress', {
      readingDir: ['posts', 'lib']
    }],
    // add vuepress-plugin-container
    ['container', {
      type: 'right',
      defaultTitle: ''
    }],
    ['container', {
      type: 'tip',
      before: info => `<div class="tip"><p class="title">${info}</p>`,
      after: '</div>'
    }],
    ['container', {
      type: 'warning',
      before: info => `<div class="warning"><p class="title">${info}</p>`,
      after: '</div>'
    }],
    ['container', {
      type: 'danger',
      before: info => `<div class="danger"><p class="title">${info}</p>`,
      after: '</div>'
    }],
    // add @vssue/vuepress-plugin-vssue
/*    ['@vssue/vuepress-plugin-vssue', {
      platform: 'github',
      owner: 'mgh87',
      repo: 'blog',
      clientId: '32058bd2babe34bdc824',
      clientSecret: '9ce6c5a88c8e23fead191752511009827c4319d0'
    }],*/
    // add vuepress-plugin-sitemap
/*    ['sitemap', {
      hostname: 'https://ououe.com',
      changefreq: 'weekly'
    }],
*/    // add pwa
    ['@vuepress/pwa', {
      updatePopup: {
        message: 'Content Updated',
        buttonText: 'Refresh'
      }
    }]
  ]
}
