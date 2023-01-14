<template>
<div>
<h1 class="text-white mb-4" style="text-align: center">Drag and Drop your PDF to Scan</h1>
        <div class="parent-wrapper">
          <drop/>
        </div>
</div>
</template>
<script>
import axios from 'axios'
import drop from './dropFiles.vue'
import { slider, slideritem } from 'vue-concise-slider'
export default {
  mounted () {
    axios.get('http://localhost:8081/view-package/packages')
      .then((response) => {
        this.packages = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  data () {
    return {
      packages: [],
      style: {
        'background-image': 'url(' + 'https://secondcropcreative.com/perfectloops/images/Mount-Susana-Time-Lapse.gif' + ')',
        'background-size': '750px',
        'text-sadow': '0 10px 30px rgba(0, 0, 0, 0.1)',
        'box-shadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'width': '44.33%'
      },
      options: {
        effect: 'coverflow',
        currentPage: 0,
        thresholdDistance: 100,
        thresholdTime: 300,
        deviation: 200,
        widthScalingRatio: 0.8,
        heightScalingRatio: 0.8,
        slidesToScroll: 1,
        loop: true,
        pagination: true,
        grabCursor: true,
        speed: 300
      }
    }
  },
  methods: {
    goToTourPage () {
      this.$router.push('/')
      this.$router.go()
    }
  },
  components: {
    slider,
    slideritem,
    drop
  }
}
</script>
<style scoped>
.parent-wrapper{
  display: flex;
  margin-bottom:1rem;
  width:100%;
  height:100%; /* was 50% */
  justify-content: space-around;
}
</style>
