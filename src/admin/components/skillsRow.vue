<template lang="pug">
    .skills
        .skills-title {{type.name}}
        table.skills-list
            skillitem(
                v-for="skill in skills"
                :key="skill.id"
                v-if="skill.category === type.id"
                :skill="skill"
            )
</template>
<script>
import skillitem from './skillitem';
export default {
    components: {
        skillitem
    },
    props: {
        type: {
            type: Object,
            default:() => {}
        },
    
    skills: {
        type: Array,
        default: () => []
        } 
    }
}
</script>

