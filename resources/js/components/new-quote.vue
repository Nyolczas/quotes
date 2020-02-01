<template>
    <div class="container">
        <div class="card col-md-8 mx-auto">
            <div class="card-body">
                <form @submit.prevent="onSubmitted">
                    <div class="form-group">
                        <label for="content">Content</label>
                        <input
                            type="text"
                            id="content"
                            class="form-control"
                            v-model="quoteContent">
                    </div>
                    <button class="btn btn-primary btn-block" type="submit">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
           quoteContent: ""
        }
    },
    methods: {
        onSubmitted() {
            axios.post('http://quotes.test/api/quote',
                 {content: this.quoteContent})
                 .then(
                     (response) => console.log(response)
                 ).catch(
                     (error) => console.log(error)
                 );
        }
    }
}
</script>
