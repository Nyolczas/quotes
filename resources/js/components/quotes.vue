<template>
    <div>
        <div class="container">
            <div class="card col-md-8 mx-auto mb-5">
                <div class="card-body">
                    <app-quote v-for="quote in quotes"
                        :qt="quote"
                        @quoteDeleted="onQuoteDeleted($event)"></app-quote>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Quote from './qoute';
import axios from 'axios';
export default {
    data() {
        return {
            quotes: []
        }
    },
    methods: {
        onGetQuotes() {
            axios.get('http://quotes.test/api/quotes')
                .then(
                    response => {
                        this.quotes = response.data.quotes;
                    }
                )
                .catch(error => console.log(error));
        },
        onQuoteDeleted(id) {
            const position = this.quotes.findIndex((element) => {
                return element.id == id;
            });
            this.quotes.splice(position, 1);
        }
    },
    beforeMount(){
        this.onGetQuotes()
    },
    components: {
        'app-quote': Quote
    }
}
</script>
