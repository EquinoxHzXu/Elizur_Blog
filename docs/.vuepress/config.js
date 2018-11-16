module.exports = {
  dest: 'Elizur_Blog',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Elizur_Blog',
      description: '一个不善表达的闷骚前端的个人小空间'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  themeConfig: {
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '编辑此页',
        lastUpdated: '上次更新',
        nav: [
          {
            text: '前端',
            items: [
              { text: 'TypeScript', link: '/frontend/typescript/' },
              { text: 'React', link: '/frontend/react/' },
              { text: 'Vue', link: '/frontend/vue/' },
              { text: '微信小程序', link: '/frontend/wx/mpvue-wx-mini-app-first-look' }
            ]
          },
          {
            text: '后端',
            items: [
              { text: 'Node.js', link: '/backend/node/' },
              { text: 'Koa', link: '/backend/koa/' },
              { text: 'MongoDB', link: '/backend/mongodb/' }
            ]
          },
          {
            text: 'AI',
            items: [
              { text: '机器学习', link: '/ai/machine-learning/' },
              { text: '数据挖掘', link: '/ai/data-mining/' },
            ]
          },
          {
            text: '运维/部署',
            link: '/ops/'
          }
        ],
        sidebar: {
          '/frontend/wx/': genWXSidebarConfig('微信小程序'),
          '/frontend/typescript/': genTSSidebarConfig('TypeScript'),
          '/ops/': genOpsSidebarConfig('运维/部署'),
        }
      }
    }
  }
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@static': 'path/to/some/dir'
  //     }
  //   }
  // }
}

function genWXSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        'mpvue-wx-mini-app-first-look'
      ]
    }
  ]
}

function genTSSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        'typescript-for-jser'
      ]
    }
  ]
}


function genOpsSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'c-s-ops',
        'docker-ops',
        'remote-private-git-first-look',
        'domain-and-website-approve.md'
      ]
    }
  ]
}
