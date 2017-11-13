const state = {
  sidebar: {
    blogName: 'Emi\'s Life',
    authorName: 'emiwang',
    pageList: [
      {pageName: 'New story', pageId: 'newStory', icon: '\ue6b7'},
      {pageName: 'Stories', pageId: 'stories', icon: '\ue61b'},
      {pageName: 'Profile', pageId: 'profile', icon: '\ue642'},
      {pageName: 'Design', pageId: 'design', icon: '\ue65c'}
    ],
    footer: 'View site',
    blogUrl: 'https://www.baidu.com/'
  }
}

const getters = {
  sidebar: state => state.sidebar
}

const actions = {

}

const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
}
