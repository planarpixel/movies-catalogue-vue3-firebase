<template>
  <div class="card card-body mt-4">
    <h3>Edit Movie</h3>
    <form @submit.prevent="update">
      <div class="form-group">
        <label>Title</label>
        <input v-model="form.title" class="form-control" required />
      </div>

      <div class="form-group">
        <label>Original title</label>
        <input v-model="form.originalTitle" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Year</label>
        <input
          v-model="form.year"
          class="form-control"
          type="text"
          required
        />
      </div>

      <div class="form-group mt-3">
        <label>Category</label>
        <input
          v-model="form.category"
          class="form-control"
          type="text"
          required
        />
      </div>

      <div class="form-group mt-3">
        <label>Cover</label>
        <input
          v-model="form.cover"
          class="form-control"
          type="text"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary  mt-3">
        Update
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getMovie, updateMovie } from '@/firebase'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const movieId = computed(() => route.params.id)

    const form = reactive({ title: '', originalTitle: '', year: '', category: '', cover: '' })
    onMounted(async () => {
      const movie = await getMovie(movieId.value)
      console.log(movie, movieId.value)
      form.title = movie.title
      form.originalTitle = movie.originalTitle
      form.year = movie.year
      form.category = movie.category
      form.cover = movie.cover
    })

    const update = async () => {
      await updateMovie(movieId.value, { ...form })
      router.push('/')
      form.title = ''
      form.originalTitle = ''
      form.year = ''
      form.category = ''
      form.cover = ''
    }

    return { form, update }
  }
}
</script>
