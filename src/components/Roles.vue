<template>
  <div class="roles">
      <ul>
        <li v-for="role in roles">
          {{ role.id }}
        </li>
      </ul>
  </div>
</template>

<script>
  import auth from '../services/auth'
  import {http} from '../services/request'

  export default {
    name: 'roles',
    data() {
        return {
          roles: {}
        }
    },
    created() {
      http.get('roles', (data) => {
        this.roles = data.data
      }, (error) => {
          toastr.error('Something went wrong');
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
