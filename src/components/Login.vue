<template>
  <div id="wrapper" class="login">
    <div class="text-center loginscreen animated fadeInDown">
      <div>
        <div>
          <h1 class="logo-name"><i class="fa fa-cogs"></i></h1>
        </div>
        <h3 class="text-muted m-t-sm">Appercode Web Admin Panel</h3>

        <div class="col-lg-2 col-md-4 col-sm-6 col-lg-offset-5 col-md-offset-4  col-sm-offset-3">

          <form class="m-t-xl" role="form" v-on:submit.prevent="submit">
            <div class="form-group">
              <input name="login" v-validate="'required'" type="text"  v-model="credentials.username" class="form-control" placeholder="Username">
            </div>
            <div class="form-group">
              <input name="password" v-validate="'required'" v-model="credentials.password" type="password" class="form-control" placeholder="Password">
            </div>
            <div class="form-group has-error">
              <p v-show="errors.has('login')" class="help-block">{{ errors.first('login') }}</p>
              <p v-show="errors.has('password')" class="help-block">{{ errors.first('password') }}</p>
              <p v-show="error" class="help-block">{{ error }}</p>
            </div>
            <button class="btn btn-primary block full-width m-b">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import auth from '../services/auth'

  export default {
    name: 'login',
    data() {
      return {
        // We need to initialize the component with any
        // properties that will be used in it
        credentials: {
          username: '',
          password: ''
        },
        error: ''
      }
    },
    methods: {
      submit() {
        this.$validator.validateAll()
          .then(() => {
            auth.login(this.credentials.username, this.credentials.password, '/')
          })
          .catch(() => {
            // console.log(this.$validator.errorBag)
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
