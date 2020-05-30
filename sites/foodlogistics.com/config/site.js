const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');

module.exports = {
  gam,
  nativeX,
  navigation,
  company: 'AC Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://p1-cms-assets-acbm.imgix.net/files/base/acbm/fl/image/static/logo/site_logo_large.png?h=45',
      srcset: [
        'https://p1-cms-assets-acbm.imgix.net/files/base/acbm/fl/image/static/logo/site_logo_large.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://p1-cms-assets-acbm.imgix.net/files/base/acbm/fl/image/static/logo/site_logo_large.png?h=60',
      srcset: [
        'https://p1-cms-assets-acbm.imgix.net/files/base/acbm/fl/image/static/logo/site_logo_large.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/FoodLogistics', target: '_blank' },
    { provider: 'twitter', href: 'https://www.twitter.com/FoodLogistics', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/food-logistics-magazine/', target: '_blank' },
  ],
  radix: {
    enabled: true,
    appId: 'e81ec2b6-d2c7-496f-8923-c2f7e2cd05e7',
    submissionFieldIds: [
      { name: 'comments', id: '5a0db6553bab46b3436cd382' },
    ],
  },
  gtm: {
    containerId: 'GTM-MQ68SRH',
  },
  mediaFuse: {
    id: 6061,
  },
  gcse: {
    id: '017383739850048358259:-mlkn4aclei',
  },
  wufoo: {
    userName: 'acbm',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#1a93f9',
      logo: 'https://p1-cms-assets-acbm.imgix.net/files/base/acbm/fl/image/static/logo/site_logo_large.png?h=60',
    },
    to: 'jsage@acbusinessmedia.com',
  },
  inquiry: {
    enabled: false,
    directSend: true,
    sendTo: 'jsage@acbusinessmedia.com',
    sendFrom: 'Food Logistics <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://p1-cms-assets-acbm.imgix.net/files/base/acbm/fl/image/static/logo/site_logo_large.png?h=60',
    bgColor: '#1a93f9',
  },
  leaders: {
    enabled: true,
    title: 'Food Logistics Leaders',
    alias: 'leaders/2020',
    calloutValue: 'Leading Providers',
    header: {
      imgSrc: 'https://p1-cms-assets-acbm.imgix.net/files/base/acbm/sdce/image/static/sdc-leaders.png?h=85',
    },
  },
};
