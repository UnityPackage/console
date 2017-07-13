import router from '../../router'

var state = {
  host: null,
  port: null,
  clientId: 0,
  isConnect: false
}

var getters = {
    authorizd(state){
      return state.host != "" &&
              state.host != null
    },
    url(state){
        return "http://" + state.host + ":" + state.port;
    },
    isConnect(state){
        return state.isConnect
    }
}

var mutations = {
    changeHost(state , payload){
        var result = payload.split(':')
        state.host = result[0];
        state.port = result.length > 1 ? result[1] : "9478"
        window.localStorage.setItem("baseUrl",state.host + ":" + state.port)
        router.push({ path:'/' })
    },
    reClientId(state){
        state.clientId = Math.floor(Math.random() * 65535);
    },
    changeConnectStatu(state, payload){
        state.isConnect = payload;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
}