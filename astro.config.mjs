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
      label: 'Projects',
      autogenerate: {
        directory: 'projects'
      }
    },{
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  })]
});