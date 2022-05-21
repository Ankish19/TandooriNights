module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  pwa: {
    manifestOptions: {
      name: 'Tandoori Nights',
      short_name: 'Tandoori Nights',
      start_url: './',
      display: 'standalone',
      theme_color: '#ED8633',
      icons: [
        {
          src: './img/icons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: './img/icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: './img/icons/android-chrome-maskable-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable'
        },
        {
          src: './img/icons/android-chrome-maskable-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ]
    },

    themeColor: '#ED8633',
    msTileColor: '#ffff',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconPaths: {
      maskicon: null,
      favicon60: './img/icons/favicon60.png',
      favicon32: './img/icons/favicon32.png',
      favicon16: './img/icons/favicon16.png',
      appleTouchIcon: null,
      msTileImage: null
    },
    // configure the workbox plugin
    workboxPluginMode: 'GenerateSW'
  }
}
