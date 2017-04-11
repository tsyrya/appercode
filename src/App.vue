<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import 'metismenu/dist/metisMenu.min'
import 'pace/pace'
import 'jquery-slimscroll/jquery.slimscroll.min'
import 'jquery-ui/ui/widgets/tooltip'
import 'bootstrap-sass/assets/javascripts/bootstrap.min'
import './inspinia'

export default {
  name: 'app',
}
</script>

<style lang="scss">
  $icon-font-path: '~bootstrap-sass/assets/fonts/bootstrap/';
  $bootstrap-sass-asset-helper: true;
  @import "~bootstrap-sass/assets/stylesheets/_bootstrap.scss";
  $fa-font-path: "~font-awesome/fonts";
  @import "~font-awesome/scss/font-awesome";
  @import '~animate.css/animate.min.css';
  @import "~metismenu/dist/metisMenu.css";
</style>

<style lang="css">
  @import "~toastr/build/toastr.css";
  @import 'assets/style.min.css';
  @import 'assets/style_thema.css';
</style>
