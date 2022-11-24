<template>
<div>
<heading/>
<section class="py-9">
  <div class="container">
    <div class="headline">
      <h1 style="text-align: center; color: white">Tour Destinations</h1>
    </div>
    <div class="row" v-for="items in packages" :key="items" style="padding: 10px">
      <div class="col-lg-6 my-auto">
        <img :src="items.image" style="width: 650px; height: 350px; padding: 10px">
      </div>
      <div class="col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0">
        <div class="p-3 info-horizontal">
          <div class="description ps-3">
            <p class="mb-0" style="font-size: 3vh"><b>Tour Destination:</b> {{items.namOfPlace}}</p>
          </div>
        </div>

        <div class="p-3 info-horizontal">
          <div class="description ps-3">
            <p class="mb-0"><b>Duration:</b> {{items.duration}} days<br>Est. Date: {{items.startDay}} - {{items.endDay}}</p>
          </div>
        </div>
        <div class="p-3 info-horizontal">
          <div class="description ps-3">
            <p class="mb-0"><b>Tour Highlights:</b> <i>{{items.tourDescription}}</i> <br><br> <b>Tour Price: </b> {{items.priceOfPackage}} /- </p>
          </div>
        </div>
      </div>
      <div class="btn" style="float: right">
      <button v-on:click="fillupForm(items.packageId)" class="btn btn-primary w-auto me-2">
        Book this Tour
      </button>
      </div>
      <div class="form">
      <fillform id="new-form" style="display: none"/>
    </div>
    </div>
  </div>
</section>
</div>
</template>

<script>
import axios from 'axios'
import heading from './header.vue'
import fillform from './formFillup.vue'
export default {
  name: 'individualPackage',
  data () {
    return {
      packages: [],
      index: false
    }
  },
  mounted () {
    axios.get('http://localhost:8081/view-package/packages')
      .then((response) => {
        this.packages = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    fillupForm (event) {
      document.getElementById('new-form').style.display = 'block'
    }
  },
  components: {
    heading,
    fillform
  }
}
</script>

<style scoped>

</style>
