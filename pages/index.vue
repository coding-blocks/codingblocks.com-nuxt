<template>
  <div>
    <Carousel/>
    <section class="container p-4">
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
    <ReviewHolder :reviews="reviews"/>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import CourseCard from '@/components/cards/CourseCard'
import ReviewHolder from '@/components/review/ReviewHolder'
import manmohanGupta from '@/assets/images/team/manmohan-gupta.jpg'
import Carousel from '@/components/home/Carousel'
import CPPLogo from '@/assets/images/courses/color_cpp.svg'
import JavaLogo from '@/assets/images/courses/color_java.svg'
import CPLogo from '@/assets/images/courses/color_cp.svg'
import AlgoLogo from '@/assets/images/courses/color_algo.svg'

@Component({
  components: {
    Carousel,
    CourseCard,
    ReviewHolder
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

  reviews = [
    {
      imageSrc: manmohanGupta,
      name: 'Manmohan Gupta',
      course: 'Python',
      review:
        'If you want to become a brilliant programmer, and are willing to put in the hours and dedicate yourself to acquiring great skills, then there is no better place for you than Coding Blocks. The teaching assistants, Naman and Athar, were also brilliant and very helpful, who ensured we never felt like any problem was too hard.',
      star_count: 5
    }
  ]
}
</script>

<style>
</style>
