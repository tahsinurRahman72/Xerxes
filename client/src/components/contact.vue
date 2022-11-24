<template>
    <div>
        <section>
        <br>
        <br>
        <br>
        <br>
        <div class="container py-4">
            <div class="row">
            <div class="col-lg-7 mx-auto d-flex justify-content-center flex-column">
                <h3 class="text-white mb-4" style="text-align: center">Leave a Review</h3>
                <form @submit.prevent="submitReview()" role="form" id="contact-form" method="post" autocomplete="off">
                <div class="card-body">
                    <div class="row">
                    <div class="col-md-6">
                        <div class="input-group input-group-dynamic mb-4">
                        <label class="form-label">First Name</label>
                        <input v-model="firstname" class="form-control" aria-label="First Name..." type="text" >
                        </div>
                    </div>
                    <div class="col-md-6 ps-2">
                        <div class="input-group input-group-dynamic">
                        <label class="form-label">Last Name</label>
                        <input v-model="lastname"  type="text" class="form-control" placeholder="" aria-label="Last Name..." >
                        </div>
                    </div>
                    </div>
                    <div class="mb-4">
                    <div class="input-group input-group-dynamic">
                        <label class="form-label">Email Address</label>
                        <input v-model="email" type="email" class="form-control">
                    </div>
                    </div>
                    <div class="input-group mb-4 input-group-static">
                    <label>Your message</label>
                    <textarea v-model="message" name="message" class="form-control" id="message" rows="4"></textarea>
                    </div>
                    <div class="row">
                    <div class="col-md-12">
                        <button v-on:click="refreshPage()" type="submit" class="btn bg-gradient-dark w-100">Send</button>
                    </div>
                    </div>
                </div>
                </form>
            </div>
            </div>
        </div>
        </section>
    </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      userReview: [],
      firstname: '',
      lastname: '',
      email: '',
      message: ''
    }
  },
  methods: {
    submitReview () {
      axios.post('http://localhost:8081/leave-a-review/leave_review', {
        firstName: this.firstname,
        lastName: this.lastname,
        email: this.email,
        message: this.message
      })
        .then((response) => {
          this.userReview = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    refreshPage () {
      this.$router.go()
    },
    hideSuccessMessage () {
      document.getElementById('alert').style.display = 'none'
    }
  }
}
</script>
