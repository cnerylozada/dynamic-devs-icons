import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'dynamic-devs-icons',
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      copy: [
        {
          src: './svg/*.svg',
          dest: './assets/svg/',
        },
        {
          src: './svg/techs/*.svg',
          dest: './assets/svg/logos/',
        },
        {
          src: './svg/clients/*.svg',
          dest: './assets/svg/logos/',
        },
        {
          src: './data/*.json',
          dest: './assets/data/',
        },
      ],
      serviceWorker: null, // disable service workers
    },
  ],
};
