import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.itmgroup.appTainobay',
  appName: 'Taino Bay',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    url: 'https://porttainobay.com/es/home',
    cleartext: true
  }
};

export default config;
