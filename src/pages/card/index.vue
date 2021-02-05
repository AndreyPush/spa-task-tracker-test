<template lang="pug">
    .task
        .preloader(v-if="!task")
            div
            div
            div
            div
        div.task_wrapper(v-else)
            div(:class="$style.taskTitle")
                | Title:
                i(:class="$style.taskTitleContent") {{task.title}}
            div(:class="$style.taskDescription")
                | Description:
                i(:class="$style.taskDescriptionContent") {{task.description}}
            div(:class="$style.taskDate")
                | Created at: {{task.created_date}}
            div(:class="$style.taskStatus")
                span(:class="$style.taskStatusTitle") Status:
                select(:class="$style.taskStatusSelect")(@change="updateTaskStatus")
                    option(v-for="(status, i) in statuses" :key="i" :selected="task.status===status.id" :value="status.id") {{status.title}}
            button(type="button" :class="$style.taskDelete" @click="deleteTask") delete task
</template>
<script>
    import {STATUSES} from "@assets/statuses";

    export default {
        data: ()=>({
            task: undefined
        }),
        methods: {
            updateTaskStatus(){
                const vm = this;

                let obj = vm.task;

                obj.status = Number(event.target.value)

                vm.axios.put(`${vm.baseURL}/tasks/${vm.$route.params.id}`, obj);
            },
            deleteTask(){
                const vm = this;
                vm.axios.delete(`${vm.baseURL}/tasks/${vm.$route.params.id}`).then(r=>{
                    if(r.statusText==='OK') vm.$router.push('/')
                })
            }
        },
        created(){
            const vm = this;
            vm.statuses = STATUSES;

            vm.axios.get(`${vm.baseURL}/tasks/${vm.$route.params.id}`)
                .then(r=>{
                    setTimeout(()=>{
                        vm.task = r.data;
                    }, 1000);
                });
        }
    }

</script>

<style lang="scss" module src="./card.module.scss"></style>
