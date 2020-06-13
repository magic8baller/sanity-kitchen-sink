export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ee53bbcd18e74322f8e1d1d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-6bd3551x',
                  apiId: '1617fc3e-531e-4998-8868-a4c84d398f82'
                },
                {
                  buildHookId: '5ee53bbcf21c88c6afd0112f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-4hopgm53',
                  apiId: 'ad057252-3ec8-4d08-875d-18dbfdec7d00'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magic8baller/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-4hopgm53.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
