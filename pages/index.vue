<template>
  <div>
    <Carousel/>
    <section class="container">
      <div class="row">
        <div class="col-sm-12 text-center">
          <h1 class="display-4">CLASSROOM COURSES</h1>
          <p
            class="lead"
          >Classroom courses for all stages, with equal focus on theory and implementation</p>
        </div>
      </div>
      <div class="row">
        <div 
          v-for="course in courses" 
          :key="course.id" 
          class="col-lg-4 my-2">
          <CourseCard :course="course"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import CourseCard from '@/components/cards/CourseCard'
import Logo from '~/components/Logo.vue'
import Carousel from '@/components/home/Carousel'
import CPPLogo from '@/assets/images/courses/color_cpp.svg'
import JavaLogo from '@/assets/images/courses/color_java.svg'
import CPLogo from '@/assets/images/courses/color_cp.svg'
import AlgoLogo from '@/assets/images/courses/color_algo.svg'

@Component({
  components: {
    Logo,
    Carousel,
    CourseCard
  }
})
export default class Index extends Vue {
  courses = [
    {
      name: 'C++ for beginners',
      markedPrice: 8000,
      logo: CPPLogo,
      tagline: 'Programming Fundamentals in C++'
    },
    {
      name: 'C++ for beginners',
      markedPrice: 8000,
      logo: CPLogo,
      tagline: 'Programming Fundamentals in C++'
    },
    {
      name: 'C++ for beginners',
      markedPrice: 8000,
      logo: JavaLogo,
      tagline: 'Programming Fundamentals in C++'
    },
    {
      name: 'C++ for beginners',
      markedPrice: 8000,
      logo: JavaLogo,
      tagline: 'Programming Fundamentals in C++'
    },
    {
      name: 'C++ for beginners',
      markedPrice: 8000,
      logo: AlgoLogo,
      tagline: 'Programming Fundamentals in C++'
    },
    {
      name: 'C++ for beginners',
      markedPrice: 8000,
      logo: CPPLogo,
      tagline: 'Programming Fundamentals in C++'
    }
  ]
}
</script>

<style>
</style>
