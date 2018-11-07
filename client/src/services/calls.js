import axios from 'axios'

class CallsResource {
    load(onSuccess) {
        axios
            .get( "/api/calls/")
            .then(response => {
                onSuccess(response.status, response.data)
            })
            .catch(exc => {
                console.log(exc)
            });
    }
}

export default new CallsResource()