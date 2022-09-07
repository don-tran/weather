# How to run the application
- replace YOUR_API_KEY in weather/.env with your api key which is a key obtain from PAID subscription
to access One call API 3.0

- cd weather
- npm install
- npm start

# endpoint
GET http://localhost:3000/weather
json payload: 
{
   "lat":"37.335480",
   "lon":"-121.893028"
}

json response:
{
    "success": true,
    "data": {
        "current": {
            "temp": 100.87,
            "tempCondition": "hot",
            "weather": [
                {
                    "main": "Clouds",
                    "description": "few clouds"
                }
            ],
            "humidity": 24,
            "windSpeed": 11.5,
            "alerts": [
                {
                    "sender_name": "AIRNow Program, US Environmental Protection Agency",
                    "event": "Ozone is forecast to reach 126 AQI - Unhealthy for Sensitive Groups on Tue 09/06/2022. ",
                    "description": "Ozone is forecast to reach 126 AQI - Unhealthy for Sensitive Groups on Tue 09/06/2022. ",
                    "tags": [
                        "Air quality"
                    ]
                },
                {
                    "sender_name": "AIRNow Program, US Environmental Protection Agency",
                    "event": "Ozone is forecast to reach 126 AQI - Unhealthy for Sensitive Groups on Tue 09/06/2022. Ozone is forecast to reach 104 AQI - Unhealthy for Sensitive Groups on Wed 09/07/2022. ",
                    "description": "Ozone is forecast to reach 126 AQI - Unhealthy for Sensitive Groups on Tue 09/06/2022. Ozone is forecast to reach 104 AQI - Unhealthy for Sensitive Groups on Wed 09/07/2022. ",
                    "tags": [
                        "Air quality"
                    ]
                },
                {
                    "sender_name": "NWS Monterey (The San Francisco area)",
                    "event": "Excessive Heat Watch",
                    "description": "...EXCESSIVE HEAT WATCH REMAINS IN EFFECT FROM SATURDAY MORNING\nTHROUGH TUESDAY EVENING...\n* WHAT...Dangerously hot conditions with temperatures up to 105\npossible.\n* WHERE...The entire San Francisco Bay Area and Central Coast.\n* WHEN...From Saturday morning through Tuesday evening.\n* IMPACTS...Extreme heat will significantly increase the\npotential for heat related illnesses, particularly for those\nworking or participating in outdoor activities.\n* ADDITIONAL DETAILS...The hottest temperatures will occur across\nthe region`s interior and in the higher terrain each afternoon\nwith mild to warm overnight temperatures providing little relief\nfrom the heat. Onshore winds and marine influences from the\nPacific Ocean may limit daytime heating near the coast with\nafternoon highs in the 70s to 80s, ultimately reducing heat\nrelated risks. Coastal and bay shoreline regions are the areas\nof uncertainty for this event as the interaction between the\nhigh pressure and the marine layer are difficult to determine\nthis early on.",
                    "tags": [
                        "Extreme temperature value"
                    ]
                },
                {
                    "sender_name": "NWS Monterey (The San Francisco area)",
                    "event": "Excessive Heat Warning",
                    "description": "...EXCESSIVE HEAT WARNING REMAINS IN EFFECT UNTIL 8 PM PDT\nTHURSDAY...\n* WHAT...Dangerously hot conditions with temperatures up to 115\nexpected.\n* WHERE...Interior portions of the San Francisco Bay Area\nincluding the North Bay, East Bay and Santa Clara valleys.\n* WHEN...Until 8 PM PDT Thursday.\n* IMPACTS...Extreme heat will significantly increase the\npotential for heat related illnesses, particularly for those\nworking or participating in outdoor activities.",
                    "tags": [
                        "Extreme temperature value"
                    ]
                }
            ]
        }
    }
}

# api response
current: current weather
current.temp: temperature with Fahrenheit unit
current.tempCondition: current temparature condition which hot, cold, moderate
current.weather: 
    current.weather.main: group of weather paramenters(rain, clouds, snow,...)
    current.weather.description: weather condition within the group

current.humidity: humidity %
current.windSpeed: wind speed mph
alerts: national alerts from major weather warning systems