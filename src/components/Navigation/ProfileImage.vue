<template>
    <img :src="imageLink"
    class="h-12 w-12 rounded-3xl object-contain">
</template>

<script>
export default {
    name: 'ProfileImage',
    data: () => {
        return {
            imageLink: "https://images.nightcafe.studio/jobs/neo2PE2sJ3mo27Eczhij/neo2PE2sJ3mo27Eczhij--1--61xcy.jpg?tr=w-1600,c-at_max"
        }
    }
}
</script>