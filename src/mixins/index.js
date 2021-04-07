 
import { mapGetters, mapActions } from "vuex";

export default {
    data() {
    },
    computed: {

      },
      methods:{
        handleRequest(action, service, reqPayload ) {
            return new Promise((resolve, reject) => {
                this.$store
                    .dispatch(action, {
                        service: service,
                        reqPayload: reqPayload
                    })
                    .then(res => {
                        resolve(res)
                    })
                    .catch(messages => {
                        reject(false)
                    })
            })
        },
      }
}