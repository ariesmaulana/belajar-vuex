import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        tasks: [{
            id: 1,
            task: 'Nafas',
            status: true
        },
        {
            id: 2,
            task: 'Makan',
            status: false
        },
        {
            id: 3,
            task: 'Mandi',
            status: false
        }
        ]
    },
    getters: {
        getTask(state) {
            return state.tasks.filter(task => {
                return !task.status
            })
        },
        getFinished(state) {
            return state.tasks.filter(task => {
                return task.status
            })
        }
    },
    mutations: {
        finish(state, userId) {
            var task = state.tasks.find(o => o.id == userId)
            var index = state.tasks.indexOf(task)
            state.tasks[index].status = true
        },
    }
})
