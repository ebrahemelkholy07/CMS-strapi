import React from 'react';

import { Button } from '@strapi/design-system';

import { registerPreviewRoute } from './preview';

const config = {
  locales: ["ar", "en"],
};
const bootstrap = (app) => {
  document.documentElement.dir = "rtl";
  document.documentElement.classList.add("rtl");
  app.getPlugin('content-manager').injectComponent('editView', 'right-links', {
    name: 'PreviewButton',
    Component: () => (
      <Button onClick={() => window.alert('Not here, The preview is.')}>Preview</Button>
    ),
  });
};

export default {
  config,
  register: (app) => {
    registerPreviewRoute(app);
  },
  bootstrap,
};
