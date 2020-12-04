<template>
  <div id="dashboard">
    <h1 class="h1">Love Pizza, Vote for Pizza</h1>
    <b-alert :show="error.length === 0 && !isLogged" variant="warning">Please login in order to be able to vote.</b-alert>
    <b-alert :show="error.length > 0" variant="danger">{{ error }}</b-alert>
    <b-alert :show="loading" variant="info">Loading...</b-alert>
    <div class="main">
      <div class="positive">
        <b-badge v-if="userRecords" v-show="userRecords.value > 0" variant="success" class="count">{{ userRecords.value }}</b-badge>
        <b-btn v-show="!loading && isLogged" type="submit" variant="success"
               @click.prevent="addVote(loggedInUser.email, VOTES.UP)">
          I love it
        </b-btn>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  .count {
    margin: 1em;
  }
}
.positive {
  display: flex;
  flex-direction: column;
}
.negative {
  display: flex;
  flex-direction: column;
}
</style>

<script>
import api from '@/TrackerService';
export default {
  components: {  },
  props: { user: Object },
  watch: {
    user: async function(newVal) {
      if (newVal) {
        this.loggedInUser = newVal
        this.userRecords = await this.getById(newVal.email)
      }
    }
  },
  data() {
    return {
      loading: false,
      userRecords: {},
      error: "",
      isLogged: false,
      VOTES: {
        UP: 'UP',
        DOWN: 'DOWN'
      },
      loggedInUser: this.user,
      pizzaLovers: []
    }
  },
  async created() {
    this.pizzaLovers = await api.getAll()
  },
  methods: {
    async getById(id) {
      this.loading = true
      try {
        this.isLogged = true
        return await api.getById(id)
      } catch (error) {
        if (error && error.response && error.response.status === 401) {
          this.isLogged = false
        } else {
          this.error = error.message
        }
      } finally {
        this.loading = false
      }
    },
  }
}
</script>