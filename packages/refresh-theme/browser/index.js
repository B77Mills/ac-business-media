import DefaultTheme from '@parameter1/base-cms-marko-web-theme-default/browser';
import GTM from '@parameter1/base-cms-marko-web-gtm/browser';
import GAM from '@parameter1/base-cms-marko-web-gam/browser';
import GCSE from '@parameter1/base-cms-marko-web-gcse/browser';
import Inquiry from '@parameter1/base-cms-marko-web-inquiry/browser';
import Leaders from '@ac-business-media/package-leaders/browser';
import Common from '@ac-business-media/package-common/browser';
import SocialSharing from '@parameter1/base-cms-marko-web-social-sharing/browser';
import PhotoSwipe from '@parameter1/base-cms-marko-web-photoswipe/browser';
import RevealAd from '@parameter1/base-cms-marko-web-reveal-ad/browser';
import Radix from '@parameter1/base-cms-marko-web-radix/browser';

export default (Browser) => {
  DefaultTheme(Browser);
  Leaders(Browser);
  GTM(Browser);
  GAM(Browser);
  GCSE(Browser);
  Common(Browser);
  Inquiry(Browser);
  SocialSharing(Browser);
  PhotoSwipe(Browser);
  RevealAd(Browser);
  Radix(Browser);
};
