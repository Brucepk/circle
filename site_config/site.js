// 全局的一些配置
export default {
    rootPath: '/product', // 发布到服务器的根目录，需以/开头但不能有尾/，如果只有/，请填写空字符串
    port: 8080, // 本地开发服务器的启动端口
    domain: 'tech.souyunku.com', // 站点部署域名，无需协议和path等
    defaultSearch: 'google', // 默认搜索引擎，baidu或者google
    defaultLanguage: 'zh-cn',
    'en-us': {
        pageMenu: [
            {
                key: 'home', // 用作顶部菜单的选中
                text: 'HOME',
                link: '/en-us/index.html',
            },
            {
                key: 'docs',
                text: 'DOCS',
                link: '/en-us/docs/disclaimer.html',
            },
            {
                key: 'blog',
                text: 'BLOG',
                link: '/en-us/blog/index.html',
            },
            {
                key: 'community',
                text: 'COMMUNITY',
                link: '/en-us/community/index.html',
            },
        ],
        disclaimer: {
            title: 'Disclaimer',
            content: 'All works on the website are updated by online collection, only for readers to preview and learn to use. Please download within 24 hours after downloading. If you like, please purchase genuine resources! If the original author believes that this site infringes your copyright, please inform QQ. We will delete it immediately!',
        },
        documentation: {
            title: 'Documentation',
            list: [
                {
                    text: 'Recommended document',
                    link: '/en-us/docs/disclaimer.html',
                },
            ],
        },
        resources: {
            title: 'Resources',
            list: [
                {
                    text: 'Github',
                    link: 'https://github.com/souyunkutech',
                },
                {
                    text: 'Community',
                    link: '/zh-cn/community/index.html',
                },
                {
                    text: 'This site is built using Docsite',
                    link: 'https://docsite.js.org/en-us/docs/installation.html',
                },
            ],
        },
        copyright: 'Copyright © 2018 搜云库技术团队 All rights reserved.',
    },
    'zh-cn': {
        pageMenu: [
            {
                key: '搜云库技术团队',
                text: '首页',
                link: '/zh-cn/index.html',
            },
            {
                key: 'docs',
                text: '文档',
                link: '/zh-cn/docs/disclaimer.html',
            },
            {
                key: 'blog',
                text: '博客',
                link: '/zh-cn/blog/index.html',
            },
            {
                key: 'community',
                text: '社区',
                link: '/zh-cn/community/index.html',
            },
        ],
        disclaimer: {
            title: '免责声明',
            content: '网站所有作品均由网上搜集共同更新，仅供读者预览及学习交流使用，下载后请24小时内删除，如果喜欢请购买正版资源!原作者如果认为本站侵犯了您的版权,请QQ告知,我们会立即删除!',
        },
        documentation: {
            title: '文档',
            list: [
                {
                    text: '推荐文档',
                    link: '/zh-cn/docs/disclaimer.html',
                }
            ],
        },
        resources: {
            title: '资源',
            list: [
                {
                    text: 'Github',
                    link: 'https://github.com/souyunkutech',
                },
                {
                    text: '社区',
                    link: '/zh-cn/community/index.html',
                },
                {
                    text: '本站使用 Docsite 构建',
                    link: 'https://docsite.js.org/en-us/docs/installation.html',
                },
            ],
        },
        copyright: 'Copyright © 2018 搜云库技术团队 All rights reserved.',
    },
};
