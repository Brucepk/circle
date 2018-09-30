import React from 'react';

export default {
  'zh-cn': {
    brand: {
      brandName: '专注于开发技术的研究与知识分享',
      briefIntroduction: '本站内容仅供观摩学习交流之用，将不对任何资源负法律责任',
      buttons: [
        {
          text: '立即开始',
          link: '/zh-cn/docs/demo1.html',
          type: 'primary',
        },
        {
          text: '查看Github',
          link: '',
          type: 'normal',
        },
      ],
    },
   /* introduction: {
      title: '知识共享',
      desc: '除非另有声明，本网站采用知识共享“署名 3.0 中国大陆”许可协议授权',
        link: 'http://creativecommons.org/licenses/by/3.0/cn/',
      img: '/img/architecture.png',
    },*/
    features: {
      title: '本站包含',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: '源码',
          content: '高质量的源码',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: '图书',
          content: '高质量的图书',
        },
        {
          img: '/img/feature_service.png',
          title: '软件',
          content: '好用的开发软件',
        },
        {
          img: '/img/feature_hogh.png',
          title: 'API',
          content: '常用API文档',
        },
        {
          img: '/img/feature_runtime.png',
          title: '文档',
          content: '高质量的技术文档',
        },
        {
          img: '/img/feature_maintenance.png',
          title: '视频',
          content: '高质量的技术视频',
        },
      ],
    },
    start: {
      title: '知识共享',
      desc: '除非另有声明，本网站采用知识共享“署名 3.0 中国大陆”许可协议授权',
      img: '/img/quick_start.png',
      button: {
        text: '阅读许可协议',
        link: 'http://creativecommons.org/licenses/by/3.0/cn/',
      },
    },
    users: {
      title: '我们团队',
      desc: <span>主要贡献成员</span>,
      list: [
        '/img/team_img_1.jpg',
        '/img/team_img_2.jpg',
        '/img/team_img_3.jpg',
        '/img/team_img_4.jpg',
        '/img/team_img_5.jpg',
        '/img/team_img_6.jpg',
        '/img/team_img_7.jpg',
        '/img/team_img_8.jpg'
      ],
    },
  },
  'en-us': {
    brand: {
      brandName: 'Focus on research and knowledge sharing in development technology',
      briefIntroduction: 'The content of this site is for observation and exchange, and will not be legally responsible for any resources.',
      buttons: [
        {
          text: 'Quick Start',
          link: '/en-us/docs/demo1.html',
          type: 'primary',
        },
        {
          text: 'View on Github',
          link: '',
          type: 'normal',
        },
      ],
    },
  /*  introduction: {
      title: 'Creative Commons',
      desc: 'This website is licensed under the Creative Commons Attribution 3.0 China License Agreement.',
        link: 'http://creativecommons.org/licenses/by/3.0/cn/',
      img: '/img/architecture.png',
    },*/
      features: {
          title: 'This site contains',
          list: [
              {
                  img: '/img/feature_transpart.png',
                  title: 'Source code',
                  content: 'High quality source code',
              },
              {
                  img: '/img/feature_loadbalances.png',
                  title: 'Books',
                  content: 'High quality books',
              },
              {
                  img: '/img/feature_service.png',
                  title: 'Software',
                  content: 'Easy to use development software',
              },
              {
                  img: '/img/feature_hogh.png',
                  title: 'API',
                  content: 'Common API documentation',
              },
              {
                  img: '/img/feature_runtime.png',
                  title: 'Document',
                  content: 'High quality technical documentation',
              },
              {
                  img: '/img/feature_maintenance.png',
                  title: 'Video',
                  content: 'High quality technical video',
              },
          ],
      },
    start: {
      title: 'Creative Commons',
      desc: 'This website is licensed under the Creative Commons Attribution 3.0 China License Agreement.',
      img: '/img/quick_start.png',
      button: {
        text: 'READ PROTOCOL',
        link: '/en-us/docs/demo1.html',
      },
    },
    users: {
        title: 'Our team',
        desc: <span>Main contributor</span>,
      list: [
          '/img/team_img_1.jpg',
          '/img/team_img_2.jpg',
          '/img/team_img_3.jpg',
          '/img/team_img_4.jpg',
          '/img/team_img_5.jpg',
          '/img/team_img_6.jpg',
          '/img/team_img_7.jpg',
          '/img/team_img_8.jpg'
      ],
    },
  },
};
