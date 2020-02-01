<template>
    <div>
        <div class="container">
            <div class="card col-md-8 mx-auto">
                <div class="card-body">
                    <button class="btn btn-primary btn-block" @click="onGetQuotes">Bejegyzések lekérdezése</button>
                    <hr>
                    <app-quote v-for="quote in quotes" :qt="quote"></app-quote>
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
        }
    },
    components: {
        'app-quote': Quote
    }
}
</script>
