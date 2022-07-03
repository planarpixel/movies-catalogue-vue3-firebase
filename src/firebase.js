import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

/* eslint-disable */
const config = {
  apiKey: "AIzaSyDk2DNECiaGMg3mwLHcyefLMUxVGKOAGsY",
  authDomain: "vue-test-b58c6.firebaseapp.com",
  projectId: "vue-test-b58c6",
  storageBucket: "vue-test-b58c6.appspot.com",
  messagingSenderId: "564519690316",
  appId: "1:564519690316:web:11df529926920b09a694e9",
  measurementId: "G-ES2N7CL6NY"
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const moviesCollection = db.collection('movies')

export const createMovie = movie => {
  return moviesCollection.add(movie)
}

export const getMovie = async id => {
  const movie = await moviesCollection.doc(id).get()
  return movie.exists ? movie.data() : null
}

export const updateMovie = (id, movie) => {
  return moviesCollection.doc(id).update(movie)
}

export const deleteMovie = id => {
  return moviesCollection.doc(id).delete()
}

export const useLoadMovies = () => {
  const movies = ref([])
  const close = moviesCollection.onSnapshot(snapshot => {
    movies.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return movies
}
