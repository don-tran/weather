'use strict'

import axios from 'axios'

const getTempCondition = (temp) => {
    let condition = ''

    if (temp > 80) condition = 'hot'
    else if (temp > 50 && temp <= 80) condition = 'moderate'
    else condition = 'cold'

    return condition
}

const getWeather = async (req, res) => {
    try {
        const { lat, lon } = req.body

        const APIKEY = process.env.APIKEY

        const host = `https://api.openweathermap.org`

        const url = `${host}/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKEY}`

        const { data } = await axios.get(url)

        let { current, alerts } = data

        let { temp, weather, humidity, wind_speed } = current

        weather = weather.map(({main, description}) => ({main, description}))

        alerts = alerts.map(({sender_name, event, description, tags}) => ({sender_name, event, description, tags}))

        const tempCondition = getTempCondition(temp)

        const info = {
            current: {
                temp,
                tempCondition,
                weather,
                humidity,
                windSpeed: wind_speed,
                alerts
            }
        }

        return res.status(200).json({ success: true, data: info })
    }
    catch(e) {
        console.log(e)

        return res.status(500).json({ success: false, message: e.message })
    }
}

export { getWeather }