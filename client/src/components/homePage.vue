<template>
    <div>
        <heading/>
        <get-started/>
        <div class="content">
          <contentBody/>
        </div>
    </div>
</template>

<script>
import heading from './heading.vue'
import getStarted from './getStartedMessage.vue'
import contentBody from './ContentBody.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    heading,
    getStarted,
    contentBody
  }
}
</script>
