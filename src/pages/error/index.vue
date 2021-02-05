<template lang="pug">
    div(:class="$style.errorPage")
        h2(:class="$style.errorPageHead") 404
        p(:class="$style.errorPageDescription") Seems you're shouldn't be here
        router-link(:class="$style.errorPageBacklink" to="/") Back at mainpage
</template>
<style lang="scss" module src="./error.module.scss"></style>
