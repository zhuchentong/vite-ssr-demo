import App from './App.vue';
import { routes } from './router';
declare const aaa: string;

import createSSR from 'vite-ssr';

export default createSSR(App, { routes }, (context) => {
  /* Vite SSR main hook for custom logic */
  const { app, router, initialState } = context;
  console.log(initialState, aaa);
});
