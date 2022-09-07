'use strict'

import { getWeather } from '../services/getWeather.js'

const init = (app) => {
    app.get('/weather', getWeather)
}

export { init }