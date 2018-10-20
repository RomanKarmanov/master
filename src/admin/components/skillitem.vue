<template lang="pug">
div
    tr(v-if="editmode === false")
        td {{skill.title}}
        td {{skill.percent}} %
        td 
            button(type="button") Удалить

    tr(v-else)
        td
            input(
                type="text",
                placeholder="skill"
            )
        td
            input(
                type="text",
                placeholder="percent"
            )
            span %
        td
            button(
                type="button"
            ) Добавить
</template>
<script>
export default {
  props: {
    skill: {
      type: Object,
      default: () => {}
    },
editmode: {
    type: Boolean,
    default: false
    }
}
};
</script>