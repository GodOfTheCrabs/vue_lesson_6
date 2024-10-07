<template>
    <div>
        <v-card variant="outlined" class="card">
            <v-card-title class="title">{{ comment.name }}</v-card-title>
            <v-card-title class="title">{{ comment.email }}</v-card-title>
            <v-card-text v-show="isVisible">{{ comment.body }}</v-card-text>

            <v-card-actions>
                <v-btn style="border: 1px solid black; margin: 0 auto" @click="toggleVisibility">Hide Text</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    export default {
        props: {
            comment: {
                type: Object,
                required: true,
            }
        },
        data() {
            return {
                isVisible: true,
            }
        },
        methods: {
            toggleVisibility() {
                this.isVisible = !this.isVisible;
            },
        }
    }
</script>

<style>
</style>