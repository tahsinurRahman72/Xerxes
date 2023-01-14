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
import drop from './dropFiles.vue'
import heading from './heading.vue'
import getStarted from './getStartedMessage.vue'
import contentBody from './tourContentBody.vue'
import contact from './contact.vue'
export default {
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
