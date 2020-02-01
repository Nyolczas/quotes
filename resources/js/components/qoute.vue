<template>
    <div class="panel panel-default">
        <div class="panel-body">
            {{ qt.content }}
        </div>
        <div class="panel-footer">
            <div>
                <input type="text">
                <a href="" @click="onUpdate">Mentés</a>
                <a href="" @click="onCancel">Mégse</a>
            </div>
            <div>
                <a href="" @click="onEdit">Szerkesztés</a>
                <a href="" @click="onDelete">Törlés</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['key']
}
</script>
