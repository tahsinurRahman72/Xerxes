<template>
    <div class="main">
        <heading/>
        <get-started/>
        <div class="content">
          <contentBody/>
        </div>
    </div>
</template>

<script>
import drop from './dropFiles.vue'
import heading from './header.vue'
import getStarted from './getStartedMessage.vue'
import contentBody from './tourContentBody.vue'
import contact from './contact.vue'
export default {
  name: 'main',
  data () {
    return {

    }
  },
  components: {
    heading,
    getStarted,
    contentBody,
    drop,
    contact
  }
}
</script>

<style scoped>

</style>
