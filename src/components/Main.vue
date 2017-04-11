<template>
  <div id="wrapper" class="main">
    <!--<button @click="logout()">L</button>-->
    <nav class="navbar-default navbar-static-side" role="navigation">
      <div class="sidebar-collapse">
        <ul class="nav metismenu" id="side-menu">
          <li class="nav-header">
            <div class="profile-element">
              <h2>Test project</h2>
            </div>
          </li>
          <li>
            <router-link to="/">
              <i class="fa fa-dashboard"></i><span class="nav-label">Dashboard</span>
            </router-link>
          </li>
          <li>
            <a>
              <i class="fa fa-table"></i><span class="nav-label">Collections</span>
              <span class="fa arrow"></span>
            </a>
            <ul class="nav nav-second-level" aria-expanded="false">
            </ul>
          </li>
          <li>
            <a>
              <i class="fa fa-user"></i><span class="nav-label">Users</span>
              <span class="fa arrow"></span>
            </a>
            <ul class="nav nav-second-level" aria-expanded="false">
              <li>
                <router-link to="/users">
                  <i class="fa fa-user"></i><span class="nav-label">Users</span>
                </router-link>
              </li>
              <li>
                <router-link to="/roles">
                  <i class="fa fa-users"></i><span class="nav-label">Roles</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/" class="disabled">
              <i class="fa fa-cog"></i> <span class="nav-label">Settings</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div id="page-wrapper" class="gray-bg">
      <div class="row border-bottom">
        <nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0">
          <div class="navbar-header">

            <span><span class="navbar-minimalize minimalize-styl-2 btn btn-primary"><i class="fa fa-bars"></i></span></span>

            <!--form role="search" class="navbar-form-custom" method="post" action="">
                <div class="form-group">
                    <input type="text" placeholder="Search for something..." class="form-control" name="top-search" id="top-search">
                </div>
            </form-->
          </div>
          <div class="nav navbar-top-links navbar-right">
            <div class="dropdown">
              <a class="count-info dropdown-toggle" href="" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown">
                <strong class="font-bold ng-binding">admin</strong>
                <span class="text-xs ng-binding">(Administrator)<b class="caret"></b></span>
              </a>
              <ul class="animated fadeInRight m-t-xs dropdown-menu">
                <li><a @click="logout()"><i class="fa fa-sign-out"></i> Logout</a></li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
      <div class="row wrapper border-bottom white-bg page-heading">
        <div class="col-lg-10">
          <h2>Project settings</h2>
        </div>
      </div>
      <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row">
          <div class="col-lg-12">
            <div class="ibox">
              <div class="ibox-title">
                <h5>General settings</h5>
              </div>
              <div class="ibox-content">
                <transition name="fade">
                  <router-view></router-view>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="pull-left">
          <div>
            <strong>Copyright</strong> Appercode © 2017
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import auth from '../services/auth'

  export default {
    name: 'main',
    methods: {
      logout() {
        auth.logout()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
