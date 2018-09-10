export const allMenu = [
  {
    name: 'Home',
    url: 'index',
    icon: 'home',
  }, {
    name: 'Music',
    url: 'music',
    icon: 'bars',
    children: [
      { name: 'Music', url: 'music' }, 
    ]
  }, {
    name: 'Tools',
    url: 'tool',
    icon: 'tool',
    children: [
      { name: 'Apps', url: 'tools' },
      { name: 'Rich Editor', url: 'editor' },
      { name: 'TODOS', url: 'todoList' },
    ],
  }, {
    name: 'Gallery',
    url: 'pic',
    icon: 'edit',
    children: [
      { name: 'Photos', url: 'album' },
    ],
  }, {
    name: 'Search',
    url: 'search',
    icon: 'search',
    children: [
      { name: 'Search Engine', url: 'searchEngine' },
    ],
  }]