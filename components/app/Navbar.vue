<template>
  <b-navbar 
    toggleable="md" 
    type="light">
    <nuxt-link to="/">
      <b-img 
        :src="Logo"
        fluid
        width="100%"
        alt="Logo"
        class="logo" />
    </nuxt-link>

    <b-collapse 
      id="nav_collapse" 
      is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto mr-2">
        <b-nav-item to="#">Campus Ambassador</b-nav-item>
        <b-nav-item-dropdown 
          text="About Us" 
          right>
          <b-dropdown-item to="/about">Introduction</b-dropdown-item>
          <b-dropdown-item to="/team">Our Team</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown 
          text="Classroom Courses" 
          right>
          <b-dropdown-item 
            v-for="course in offlineCourses" 
            :key="course.id" 
            :to="`/classroom-courses/${course.slug}`">{{ course.name }}</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown 
          text="Online Courses" 
          right>
          <b-dropdown-item 
            v-for="course in onlineCourses"
            :key="course.id"
            :href="`https://online.codingblocks.com/courses/${course.slug}`"
            target="_blank">{{ course.name }}</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown 
          text="Resources"
          right>
          <b-dropdown-item href="https://hack.codingblocks.com">Hacker Blocks</b-dropdown-item>
          <b-dropdown-item href="https://cb.lk/yt">Youtube</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown 
          text="Competitions" 
          right>
          <b-dropdown-item href="https://hack.codingblocks.com">HackerBlocks</b-dropdown-item>
          <b-dropdown-item href="https://boss.codingblocks.com">BOSS</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown 
          text="Contact Us" 
          right>
          <b-dropdown-item to="#">Pitampura</b-dropdown-item>
          <b-dropdown-item to="#">Noida</b-dropdown-item>
          <b-dropdown-item to="#">Dwarks</b-dropdown-item>
          <b-dropdown-item to="#">Dehradun</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>

    <b-navbar-toggle target="nav_collapse"/>
  </b-navbar>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator'
// import course from '@/store/course'
import Logo from '@/assets/images/logo-header.png'

@Component({
  components: {},
  props: {}
})
export default class Navbar extends Vue {
  Logo = Logo

  get offlineCourses() {
    return this.$store.state.course.offlineCourses
  }

  get onlineCourses() {
    return this.$store.state.course.onlineCourses
  }
}
</script>
<style>
</style>
