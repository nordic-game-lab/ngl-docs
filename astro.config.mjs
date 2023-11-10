import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Nordic Game Lab Software Documentation',
	logo: {
		src: './src/assets/nordicgamelab.webp',
		replacesTitle: true,
	},
	components: {
        // Override the default `SocialIcons` component.
        Pagination: './src/components/PrevNextLinks.astro',
      },
    sidebar: [{
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Example Guide',
        link: '/guides/example/'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  })]
});