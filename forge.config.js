module.exports = {
  packagerConfig: {
    icon: 'src/icon',
    name: 'NW Thetimer'
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'thetimer',
        iconUrl: 'https://respaw.nz/res/img/icon.ico',
        win32icon: 'src/icon.ico',
        setupIcon: 'src/icon.ico'
      }
    }
  ]
};