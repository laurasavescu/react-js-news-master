import * as request from 'request-promise'


/* FREE JSON API EXAMPLE */

/* NEWS: https://newsapi.org/ */

export const NEWS_API_KEY = 'eed927cfd03040e19535d5052dea445f'

export const ENDPOINTS = {

    NEWS_API_URL: 'https://newsapi.org/v1/articles'

}

/* REQUEST (Promise) DOCUMENTATION */
/* https://github.com/request/request-promise */

export function get(url, queryParameters) {

    //returns a Promise which can be used with the async - await syntax

    return request.get({
        json: true,
        uri: url,
        qs: queryParameters
    })
}