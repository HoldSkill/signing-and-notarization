const builder = require('electron-builder');

builder
  .build({
    config: {
      appId: 'jp.nishigami.signing-and-notarization',
      productName: 'signing-and-notarization',
      copyright: 'Copyright (C) 2020 Kiyokazu Nishigami.',
      artifactName: '${productName}.${ext}',
      files: ['dist/**/*'],
      directories: {
        output: 'release',
      },
      mac: {
        category: 'public.app-category.developer-tools',
        target: 'dmg',
        icon: 'dist/icon.icns',
        hardenedRuntime: true,
        gatekeeperAssess: false,
        entitlements: 'scripts/entitlements.plist',
        entitlementsInherit: 'scripts/entitlements.plist',
      },
      dmg: {
        sign: false,
      },
      afterSign: 'scripts/notarize.js',
    },
  })
  .catch((err) => console.log(err));
