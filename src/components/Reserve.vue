<template>
    <h3 style="margin-bottom:15px">Reserve Date</h3>
    <form @submit.prevent="submitForm">
        <Datepicker v-model="date" :disabledDates="disabledDates" :enableTimePicker="false" required/>
        <button type="submit" @click="submitDate">Submit form</button>
    </form>
</template>

<script>
    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'
    
    export default {
        name : 'ReserveVue',
        components: { Datepicker },
        data() {
            return {
                date: null,
                disabledDates: [new Date()],
            };
        },

        methods: {
            submitDate() {
                if (this.date != null) {
                    alert('제출되었습니다!');
                }
            }
        },

    }
</script>

<style>



</style>