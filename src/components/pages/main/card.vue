<template lang="pug">
    div(:class="$style.tasksCard" :style="{backgroundColor:statuses.find(item=>item.id===card.status).color}")
        h3(:class="$style.tasksCardTitle") {{card.title}}
        p(:class="$style.tasksCardDescription") {{card.description}}
</template>

<script>
    import {STATUSES} from "@assets/statuses";

    export default {
        props: {
            card: {
                type: Object,
                required: true,
            }
        },
        created() {
            this.statuses = STATUSES;
        },
    }

</script>
<style lang="scss" module src="./card.module.scss"></style>
