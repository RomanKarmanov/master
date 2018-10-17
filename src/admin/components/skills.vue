<template lang="pug">
    h1.title Обо мне
    skillsRow(
        v-for="type in types"
        :key="type.id"
        :type="type"
        :skills="skills"
    )
</template>
<script>
import skillsRow from './skillsRow';
export default {
    components: {
        skillsRow
    },
    props: {
        skills: {
            type:Array,
            default: () => []
        }
    },
    data() {
        return {
            types: [
                {id:0, name:"Frontend"},
                {id:1, name:"Backend"},
                {id:2, name:"Workflow"}
            ]
        }
    }
}
</script>

