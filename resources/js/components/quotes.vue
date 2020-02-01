<template>
    <div>
        <button class="btn btn-primary" @click="onGetQuotes">Bejegyzések lekérdezése</button>
        <hr>
        <app-quote v-for="quote in quotes" v-bind:key="quote"></app-quote>
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
                        console.log(response);
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
