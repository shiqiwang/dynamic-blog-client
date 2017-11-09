const state = {
  sidebar: {
    blogName: 'Emi\'s Life',
    authorName: 'emiwang',
    pageList: [
      {pageName: 'New story', pageId: '0', icon: '\ue6b7'},
      {pageName: 'Stories', pageId: '1', icon: '\ue61b'},
      {pageName: 'Profile', pageId: '2', icon: '\ue642'},
      {pageName: 'Design', pageId: '3', icon: '\ue65c'}
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
