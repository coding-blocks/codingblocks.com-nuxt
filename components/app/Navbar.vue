<template>
  <b-navbar 
    toggleable="md" 
    type="light">
    <a href="#">
      <b-img 
        :src="Logo"
        fluid
        width="100%"
        alt="Logo"
        class="logo" />
    </a>

    <b-collapse 
      id="nav_collapse" 
      is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto mr-2">
        <b-nav-item href="#">Campus Ambassador</b-nav-item>
        <b-nav-item-dropdown 
          text="About Us" 
          right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown 
          text="Classroom Courses" 
          right>
          <b-dropdown-item 
            v-for="course in courses" 
            :key="course.id" 
            href="#">{{ course.name }}</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown 
          text="Online Courses" 
          right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown 
          text="Resources" 
          right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown 
          text="Competitions" 
          right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown 
          text="Contact Us" 
          right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>

    <b-navbar-toggle target="nav_collapse"/>
  </b-navbar>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator'
import course from '@/store/modules/course'
import Logo from '@/assets/images/logo-header.png'

@Component({
  components: {},
  props: {}
})
export default class Navbar extends Vue {
  Logo = Logo

  get courses() {
    return course.courses
  }
  created() {
    course.fetchCourses()
  }
}
</script>
<style>
</style>
