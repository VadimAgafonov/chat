import Vue from 'vue';
import VueSocketIo from 'vue-socket.io';

export default function({store}) {
    Vue.use(new VueSocketIo({
        debug: false,
        connection: 'http://localhost:3000',
          vuex: {
              store,
              actionPrefix: 'SOCKET_',
              mutationPrefix: 'SOCKET_'
          }
    }))
}


