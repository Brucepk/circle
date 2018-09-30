export default {
    'en-us': {
        sidemenu: [
            {
                title: 'Recommended document',
                children: [
                    {
                        title: 'Disclaimer',
                        link: '/en-us/docs/disclaimer.html',
                    },
                    {
                        title: 'Server',
                        opened: true,
                        children: [
                            {
                                title: 'Python tutorial',
                                link: '/en-us/docs/python-tutorial.html',
                            },
                            {
                                title: 'Docker tutorial',
                                link: '/en-us/docs/docker-tutorial.html',
                            },
                        ],
                    },
                    {
                        title: 'Database',
                        opened: true,
                        children: [
                            {
                                title: 'MySQL tutorial',
                                link: '/en-us/docs/mysql-tutorial.html',
                            },
                        ],
                    },

                ],
            },
        ],
        barText: 'Documentation',
    },
    'zh-cn': {
        sidemenu: [
            {
                title: '推荐文档',
                children: [
                    {
                        title: '免责声明',
                        link: '/zh-cn/docs/disclaimer.html',
                    },
                    {
                        title: '服务端',
                        opened: true,
                        children: [
                            {
                                title: 'Python 教程',
                                link: '/zh-cn/docs/python-tutorial.html',
                            },
                            {
                                title: 'Docker 教程',
                                link: '/zh-cn/docs/docker-tutorial.html',
                            },
                        ],
                    },
                    {
                        title: '数据库',
                        opened: true,
                        children: [
                            {
                                title: 'MySQL 教程',
                                link: '/zh-cn/docs/mysql-tutorial.html',
                            },
                        ],
                    },

                ],
            },
        ],
        barText: '文档',
    },
};
