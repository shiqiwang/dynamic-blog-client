// 可以省略后缀
import * as types from '../mutation-types'

const state = {
  selectPageId: 'stories'
}

const getters = {
  selectPageId: state => state.selectPageId
}

const actions = {
  changeSelectPage ({commit}, pageId) {
    commit(types.CHANGESELECTPAGE, {
      id: pageId
    })
  }
}

const mutations = {
  [types.CHANGESELECTPAGE] (state, id) {
    state.selectPageId = id
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
