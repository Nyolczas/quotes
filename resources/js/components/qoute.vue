<template>
    <div class="card card-default my-3">
        <div class="card-body">
            <div v-if="editing">
                <!-- <input type="text" v-model="editValue" class="w-100"/> -->
                <textarea v-model="editValue" class="form-control" id="exampleTextarea" rows="3"></textarea>
            </div>
            <h5 v-if="!editing">{{ qt.content }}</h5>
        </div>
        <div class="card-footer">
            <div v-if="editing" class="d-flex justify-content-around">
                <!-- <input type="text" v-model="editValue"/> -->
                <button class="btn btn-success" @click="onUpdate">Mentés</button>
                <button class="btn btn-secondary" @click="onCancel">Mégse</button>
            </div>
            <div v-if="!editing" class="d-flex justify-content-around">
                <button class="btn btn-warning" @click="onEdit">Szerkesztés</button>
                <button class="btn btn-danger" @click="onDelete">Törlés</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    props: ['qt'],
    data() {
        return {
            editing: false,
            editValue: this.qt.content
        }
    },
    methods: {
        onEdit() {
            this.editing = true;
            this.editValue = this.qt.content
        },
        onDelete() {
            this.$emit('quoteDeleted', this.qt.id);
            axios.delete('http://quotes.test/api/quote/' + this.qt.id)
            .then(
                response => console.log(response)
            ).catch(
                error => console.log(response)
            )
        },
        onUpdate() {
            this.editing = false;
            this.qt.content = this.editValue;
            axios.put('http://quotes.test/api/quote/' + this.qt.id,
                {content: this.editValue})
                .then(
                    response => console.log(response)
                ).catch(
                    error => console.log(error)
                )
        },
        onCancel() {
            this.editing = false;
        }
    }
}
</script>
