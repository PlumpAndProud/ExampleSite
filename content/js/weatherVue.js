new Vue({
    el: '#app',
    data: {
        location: 'Gliwice',
        items: [],
        historyCounter: 0,
        api: null,
        data: []
    },
    methods: {
        async apiCall() {
            try {
                let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=f38bf32f03504e5c822110641230507&q=${this.location}&aqi=no`)
                this.api = response.data;
                console.log(this.api);
            }
            catch (error) {
                alert("Incorrect name")
            }

            this.data = [
                `${this.api.current.temp_c}`,
                `${this.api.location.name}`,
                `${this.api.current.last_updated}`,
                `${this.api.current.condition.icon}`,
                `${this.api.current.condition.text}`,
                `${this.api.current.cloud}`,
                `${this.api.current.humidity}`,
                `${this.api.current.gust_kph}`,

            ]
        },

        addToHistory() {
            if (this.historyCounter < 5) {
                this.items.unshift({ title: this.location, id: Math.random() })
                this.historyCounter++
                this.location = ''
            } else {
                this.items.pop()
                this.items.unshift({ title: this.location, id: Math.random() })
                this.location = ''
            }

        },

        searchAgain(name) {
            this.location = name
        }
    }
})