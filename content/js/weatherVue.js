new Vue({
    el: '#app',
    data: {
        location: 'Gliwice',
        items: [],
        historyCounter: 0,
        api: null,
    },
    methods: {
        apiCall() {
            axios
                .get(`http://api.weatherapi.com/v1/current.json?key=f38bf32f03504e5c822110641230507&q=${this.location}&aqi=no`)
                .then(response => this.api = response)
                .catch(error => console.log(error));
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