new Vue({
    el: '#app',
    data: {
        location: '',
        items: [],
        historyCounter: 0,
        api: null,
        data: [],
        dataForecast: [
            { date: '', icon: '', maxtemp: '', mintemp: '' },
            { date: '', icon: '', maxtemp: '', mintemp: '' },
            { date: '', icon: '', maxtemp: '', mintemp: '' }
        ],
    },
    methods: {
        async apiCall() {
            if (this.location != '') {
                try {
                    let response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=f38bf32f03504e5c822110641230507&q=${this.location}&days=3&aqi=no`)
                    this.api = response.data
                } catch (e) {
                    alert(e.message + ' ' + e.code)
                }

                this.data = [
                    `${this.api.current.temp_c}`,
                    `${this.api.location.name}`,
                    `${this.api.current.last_updated}`,
                    `${this.api.current.condition.icon}`,
                    `${this.api.current.condition.text}`,
                    `${this.api.current.cloud}`,
                    `${this.api.current.humidity}`,
                    `${this.api.current.gust_kph}`
                ]

                for (let i = 0; i < 3; i++) {
                    let forecastDay = this.api.forecast.forecastday[i]

                    this.dataForecast[i].date = forecastDay.date.substring(5)
                    this.dataForecast[i].icon = forecastDay.day.condition.icon
                    this.dataForecast[i].maxtemp = forecastDay.day.maxtemp_c
                    this.dataForecast[i].mintemp = forecastDay.day.mintemp_c
                }
            }
        },

        addToHistory() {
            if (this.location != '') {
                if (this.historyCounter < 5) {
                    this.items.unshift({ title: this.location, id: Math.random() })
                    this.historyCounter++
                    this.location = ''
                } else {
                    this.items.pop()
                    this.items.unshift({ title: this.location, id: Math.random() })
                    this.location = ''
                }
            }
        },

        searchAgain(name) {
            this.location = name
        }
    },
    mounted: async function () {

        try {
            let response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=f38bf32f03504e5c822110641230507&q=Gliwice&days=3&aqi=no`)
            this.api = response.data
        } catch (e) {
            alert(e.message + ' ' + e.code)
        }

        this.data = [
            `${this.api.current.temp_c}`,
            `${this.api.location.name}`,
            `${this.api.current.last_updated}`,
            `${this.api.current.condition.icon}`,
            `${this.api.current.condition.text}`,
            `${this.api.current.cloud}`,
            `${this.api.current.humidity}`,
            `${this.api.current.gust_kph}`
        ]

        for (let i = 0; i < 3; i++) {
            let forecastDay = this.api.forecast.forecastday[i]

            this.dataForecast[i].date = forecastDay.date.substring(5)
            this.dataForecast[i].icon = forecastDay.day.condition.icon
            this.dataForecast[i].maxtemp = forecastDay.day.maxtemp_c
            this.dataForecast[i].mintemp = forecastDay.day.mintemp_c
        }
    },
})