<template lang="pug">
    .taks
        button(:class="$style.addTaskButton" type="button" @click="goToAddTask") Add new task
        .preloader(v-if="tasks.length===0&&preload")
            div
            div
            div
            div
        task-card(v-else-if="tasks.length>0&&!preload" v-for="(card, i) of tasks" :key="i" :card="card" @dblclick.native="goToTask(card.id)")
        p(v-else)
            | Haven't tasks

</template>

<script>
    import taskCard from '@components/pages/main/card'

    export default {
        data: ()=>({
            tasks: [],
            preload: true
        }),
        components: {
            taskCard,
        },
        methods: {
            goToTask(id){
                this.$router.push('/tasks/'+id)
            },
            goToAddTask(){
                this.$router.push('/tasks/add');
            }
        },
        created() {
            const vm = this;
            setTimeout(()=>{
                this.axios.get(`${this.baseURL}/tasks`).then(r=>{
                    vm.tasks = r.data;
                    vm.preload = false
                });
            }, 1000)

        },
    }
</script>
<style lang="scss" module src="./main.module.scss"></style>
