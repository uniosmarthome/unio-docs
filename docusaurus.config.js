/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'UNIO Smart Home',
  tagline: 'UNIO Smart Home Documentation',
  url: 'https://uniosmarthome.github.io',
  baseUrl: '/unio-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'uniosmarthome',
  projectName: 'unio-docs',
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
    },
    navbar: {
      title: 'UNIO Smart Home',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Documentação',
          position: 'left',
        },
        {
          to: 'https://loja.uniosmarthome.com',
          label: 'Loja',
          position: 'left',
        },
        {
          to: 'https://hotmart.com',
          label: 'Cursos',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentação',
          items: [
            {
              label: 'Introdução',
              to: 'docs/',
            },
            {
              label: 'Começando do Zero',
              to: 'docs/installation',
            },
            {
              label: 'Privacidade',
              to: 'docs/privacy',
            },
          ],
        },
        {
          title: 'Comunidades',
          items: [
            {
              label: 'Instagram',
              href: 'https://instagram.com/uniosmarthome',
            },
            {
              label: 'Youtube',
              href: 'https://youtube.com/channel/UC9M9pjjiOanizoh55ntbSXw',
            },
            
          ],
        },
        {
          title: 'Desenvolvedores',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/uniosmarthome',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} UNIO Smart Home.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/uniosmarthome/unio-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
