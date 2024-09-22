import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/my-blog",
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
    sidebar:{
      "/FE/web/ui/":[
        { text: 'UI库',
          items:[
            {text:"首页",link:"/FE/web/ui/index"},
            {text:"首页2",link:"/FE/web/ui/index2"}
          ]
        },
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/huluwabawa' },
      {
        icon: {
          svg:'<svg t="1727024761341" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1586" width="200" height="200"><path d="M512 960c-246.4 0-448-201.6-448-448s201.6-448 448-448 448 201.6 448 448-201.6 448-448 448z" fill="#D81E06" p-id="1587"></path><path d="M721.664 467.968h-235.52a22.272 22.272 0 0 0-20.736 20.736v51.776c0 10.368 10.368 20.736 20.736 20.736H628.48c10.368 0 20.736 10.304 20.736 20.672v10.368c0 33.664-28.48 62.08-62.144 62.08H392.896a22.272 22.272 0 0 1-20.672-20.672V436.928c0-33.664 28.48-62.08 62.08-62.08h287.36a22.272 22.272 0 0 0 20.736-20.736v-51.84a22.272 22.272 0 0 0-20.736-20.672h-287.36A152.96 152.96 0 0 0 281.6 434.368v287.36c0 10.304 10.368 20.672 20.736 20.672h302.848c75.072 0 137.216-62.08 137.216-137.216v-116.48a22.272 22.272 0 0 0-20.736-20.736z" fill="#FFFFFF" p-id="1588"></path></svg>'
        },
        link:"https://gitee.com/punk-wei"}
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
        localeMatcher: "best fit",
        weekday: "long",
        timeZoneName: "long",
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
