import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"my-blog",
  head:[
    ["link",{rel:"icon",href: "/logo.svg"}]
  ],
  title: "八娃博客",
  description: "记录一些博客和随想",
  outDir:"dist",
  srcDir:"src",
  themeConfig: {
    logo:"/logo.svg",
    nav: [
      {
        text: 'FE',
        items:[
          {
            text:"web端",
            items:[
              {text:"UI库",link:"/FE/web/ui/index"}
            ]
          }
        ]
      },
      { text: 'JAVA', link: '/JAVA/index' },
      { text: 'PYTHON', link: '/PYTHON/index' },
      { text: 'ANDROID', link: '/ANDROID/index' },
      { text: 'OTHER', link: '/OTHER/index' }
    ],

    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示

    socialLinks: [
      { icon: 'github', link: 'https://github.com/huluwabawa' }
    ],
    search:{
      provider: 'local',
      options:{
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "没有找到结果",
            resetButtonTitle: "清除搜索条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        }
      }
    },
    externalLinkIcon: true,
    // footer: {
    //   // message: `<a href="https://beian.miit.gov.cn/" target="_blank">京ICP备20016634号-2</a>`,
    //   // copyright: `版权所有 © 2019-${new Date().getFullYear()} 李少海`,
    // },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    // https://vitepress.dev/zh/reference/default-theme-config#outline
    outline: {
      level: [2, 6],
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        weekday: "short", // full
        timeZoneName: "short", // medium
      },
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
  vite:{
    publicDir: "public"
  }
})
