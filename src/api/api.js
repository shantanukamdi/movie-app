import axios from 'axios';

/** Exporting an axios config object */
export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: 'e366d974f73ae203397850eadc7bce1f'
    },
    transformRequest: [function(data, headers) {
        /** Like HTTP Interceptor */
    }],
    transformResponse: [function(data) {
        /** Transform data before doing anything else with it. */
    }]
});