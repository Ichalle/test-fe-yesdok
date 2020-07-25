import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		articles: [],
		currentDetailArticle: []
	},
	mutations: {
		addData(state, data) {
			state.articles.push({ data })
		},
		addDetailArticle(state, data) {
			state.currentDetailArticle.push({ data })
		},
	},
	actions: {
		//
	}
})
