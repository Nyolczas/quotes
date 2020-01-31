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
export default {
    data() {
        return {
           quoteContent: ""
        }
    },
    methods: {
        onSubmitted() {

        }
    }
}
</script>
