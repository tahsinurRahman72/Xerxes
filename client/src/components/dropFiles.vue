<template>
  <div class="mainboy">
    <div
      class="dropzone-container"
      @dragover="dragover"
      @dragleave="dragleave"
      @drop="drop"
    >
      <input
        type="file"
        multiple
        name="file"
        id="fileInput"
        class="hidden-input"
        @change="onChange"
        ref="file"
        accept=".pdf,.jpg,.jpeg,.png"
      />

      <label for="fileInput" class="file-label">
        <div v-if="isDragging">Release to drop files here.</div>
        <div v-else>Drop files here or <u>click here</u> to upload.</div>
      </label>
      <div class="preview-container mt-4" v-if="files.length">
        <div v-for="file in files" :key="file.name" class="preview-card">
          <div>
            <p>
              {{ file.name }} -
              {{ Math.round(file.size / 1000) + "kb" }}
            </p>
          </div>
          <div>
            <button
              class="ml-2"
              type="button"
              @click="remove(files.indexOf(file))"
              title="Remove file"
            >
              <b>×</b>
            </button>
          </div>
        </div>
      </div>
      <div class="buttonClass">
        <button v-on:click="uploadFiles()" class="carousel-button">
          Scan
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      isDragging: false,
      files: []
    }
  },
  methods: {
    async uploadFiles () {
      const files = this.files
      // console.log(files)
      const formData = new FormData()
      files.forEach((file) => {
        formData.append('file', file)
        formData.append('fileName', file.name)
        console.log(file)
        console.log(file.name)
        console.log('success')
      })
      axios.post('http://localhost:8081/pdf/scan_pdf', formData)
        .then((response) => {
          console.log('success hoise')
          console.log(response.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    onChange () {
      this.files = [...this.$refs.file.files]
    },
    dragover (e) {
      e.preventDefault()
      this.isDragging = true
    },
    dragleave () {
      this.isDragging = false
    },
    remove (i) {
      this.files.splice(i, 1)
    },
    drop (e) {
      e.preventDefault()
      this.$refs.file.files = e.dataTransfer.files
      this.onChange()
      this.isDragging = false
    }
  }
}
</script>

<style scoped>
.carousel-button{
  background-color: rgba(255, 255, 255, 0);
  border-color: rgb(255, 255, 255);
  border-radius: 5px;
  color: rgb(255, 255, 255);
  padding-inline: 2rem;
  padding-block: .5rem;
}
.mainboy {
    display: flex;
    flex-grow: 1;
    align-items: center;
    height: 60vh;
    justify-content: center;
    text-align: center;
}
.buttonClass {
    display: flex;
    flex-grow: 1;
    align-items: flex-end;
    height: 20vh;
    justify-content: space-around;
}
.dropzone-container {
    padding: 3rem;
    padding-inline: 7rem;
    background: #f7fafc00;
    border: 1px solid #e2e8f000;
}

.hidden-input {
    opacity: 0;
    overflow: hidden;
    position: absolute;
    width: 1px;
    height: 1px;
}

.file-label {
    font-size: 20px;
    display: block;
    cursor: pointer;
}

.preview-container {
    display: flex;
    margin-top: 2rem;
}

.preview-card {
    display: flex;
    border: 1px solid #a2a2a2;
    padding: 1vw;
    margin-left: 0vw;
}

.preview-img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #a2a2a2;
    background-color: #a2a2a2;
}
</style>
