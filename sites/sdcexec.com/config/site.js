const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const dragonForms = require('./dragon-forms');

module.exports = {
  gam,
  nativeX,
  dragonForms,
  navigation,
  company: 'AC Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.sdcexec.com/files/base/acbm/sdce/image/static/logo/site_logo_og.png?h=45',
      srcset: [
        'https://img.sdcexec.com/files/base/acbm/sdce/image/static/logo/site_logo_og.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.sdcexec.com/files/base/acbm/sdce/image/static/logo/site_logo_og.png?h=60',
      srcset: [
        'https://img.sdcexec.com/files/base/acbm/sdce/image/static/logo/site_logo_og.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'http://www.facebook.com/sdcexec', target: '_blank' },
    { provider: 'twitter', href: 'http://www.twitter.com/sdcexec', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/supply-demand-chain-executive/', target: '_blank' },
  ],
  radix: {
    enabled: true,
    appId: '8d348e1f-b6d0-4065-8260-e1ffd63c7ab9',
    submissionFieldIds: [
      { name: 'comments', id: '5a0dccab3bab46eb316cd352' },
    ],
  },
  gtm: {
    containerId: 'GTM-KK6K97N',
  },
  mediaFuse: {
    id: 6064,
  },
  gcse: {
    id: '017383739850048358259:xbexltkrwbk',
  },
  wufoo: {
    userName: 'acbm',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#ec131c',
      logo: 'https://img.sdcexec.com/files/base/acbm/sdce/image/static/logo/site_logo_og.png?h=60',
    },
    to: 'jsage@acbusinessmedia.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'jsage@acbusinessmedia.com',
    sendFrom: 'Supply & Demand Chain Executive <noreply@baseplatform.io>',
    logo: 'https://img.sdcexec.com/files/base/acbm/sdce/image/static/logo/site_logo_og.png?h=60',
    bgColor: '#ec131c',
  },
  leaders: {
    enabled: true,
    title: 'Supply Chain Leaders',
    alias: 'leaders/2020',
    calloutValue: 'Leading Companies',
    header: {
      imgSrc: 'https://img.sdcexec.com/files/base/acbm/sdce/image/static/sdc-leaders.png?h=85',
    },
  },
};
