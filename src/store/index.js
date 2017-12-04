import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        tasks: []
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
        populate(state, data) {
            state.tasks = data
        }
    },
    actions: {
        getTask(context) {
            axios.get('http://127.0.0.1:8000/api/list-task')
                .then(function (response) {
                    context.commit('populate', response.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        setFinished(context, userId) {
            axios.post('http://127.0.0.1:8000/api/update-task/', {
                id: userId
            }, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                .then(function (response) {
                    context.commit('finish', userId)
                })
                .catch(function (error) {
                    console.log(error);
                });

        }
    }
})
