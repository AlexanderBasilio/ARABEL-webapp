
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/ARABEL-webapp/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/ARABEL-webapp"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Program%20Files/Git/ARABEL-webapp",
    "route": "/Program%20Files/Git/ARABEL-webapp/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 729, hash: '5bcbd1aead81159a40590be988102bf211ab8932abcbb6d224e7b6b09ca8a63c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1039, hash: '6c20b51d0940f5fb96d1af607d94c6f44afd9d3498053ec8dbfa0bd069d50917', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-SJASMUUX.css': {size: 93, hash: 'rb7s3/mpGkk', text: () => import('./assets-chunks/styles-SJASMUUX_css.mjs').then(m => m.default)}
  },
};
