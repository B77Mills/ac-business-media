const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const section = require('@ac-business-media/refresh-theme/templates/website-section');
const podcasts = require('@ac-business-media/refresh-theme/templates/website-section/podcasts');
const publishedVideos = require('@ac-business-media/refresh-theme/templates/website-section/published-videos');
const contactUs = require('@ac-business-media/refresh-theme/templates/website-section/contact-us');
const queryFragment = require('@ac-business-media/refresh-theme/graphql/fragments/website-section-page');
const leadersFragment = require('@ac-business-media/refresh-theme/graphql/fragments/leaders-section');
const leaders = require('@ac-business-media/refresh-theme/templates/website-section/leaders');

const directory = require('../templates/website-section/directory');

module.exports = (app) => {
  app.get('/:alias(leaders)', withWebsiteSection({
    template: leaders,
    queryFragment: leadersFragment,
  }));
  app.get('/:alias(directory)', withWebsiteSection({
    template: directory,
    queryFragment,
  }));
  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUs,
    queryFragment,
  }));
  app.get('/:alias(podcasts)', withWebsiteSection({
    template: podcasts,
    queryFragment,
  }));
  app.get('/:alias(videos)', withWebsiteSection({
    template: publishedVideos,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
