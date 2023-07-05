new Vue({
    el: '#app',
    data: {
        location: 'Gliwice',
        items: [],
        historyCounter: 0
    },
    methods: {
        addToHistory() {
            if (this.historyCounter < 5) {
                this.items.unshift({ title: this.location, id: Math.random() })
                this.historyCounter++
            } else {
                this.items.pop()
                this.items.unshift({ title: this.location, id: Math.random() })
            }

        }
    }
})