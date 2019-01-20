<template>
  <div>
    <CourseBanner 
      :bannerimage="Banner" 
      :title="course.name" 
      :subtitle="course.tagline"/>
    <div class="section my-4">
      <div class="container">
        <div class="row">
          <div class="col-12 mx-auto text-center">
            <h1 class="display-3 text-primary">Overview</h1>
            <p class="lead">
              {{ course.description }}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <button class="btn btn-primary">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
    <CourseFeatures :features="features"/>
    <div class="section bg-primary">
      <div class="container py-4">
        <div class="row text-white">
          <div class="col-sm-12 col-md-2 d-flex align-items-center">
            <fab 
              :icon="['fas', 'desktop']" 
              class="fa-5x" />
          </div>
          <div class="col-sm-12 col-md-4 text-center d-flex align-items-center">
            <h3>
              GET FREE ACCESS <br> TO ONLINE COURSE
            </h3>
          </div>
          <div class="col-sm-12 col-md-6 d-flex align-items-center">
            <p class="text-align-justify">
              Our Online courses are an exact replica of our Classroom programs. Once a student completes their course, we provide them access to the Online course as well to make sure they can revise at their will. Each Online course comes with Mentor support Hands on coding assignments, exclusive access to our online IDE, Hackerblocks & Doubt resolution
            </p>
          </div>
        </div>
      </div>
    </div>
    <CourseContents :contents="contents"/>
    <CourseFAQ :faqs="faqs"/>
  </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator'
import CourseBanner from '@/components/course/CourseBanner.vue'
import CourseFAQ from '@/components/course/CourseFAQ.vue'
import CourseContents from '@/components/course/CourseContents.vue'
import CourseFeatures from '@/components/course/CourseFeatures.vue'
import Banner from '@/assets/images/banners/cover_launchpad.jpg'
import api from '@/models'

@Component({
  components: {
    CourseBanner,
    CourseFAQ,
    CourseContents,
    CourseFeatures
  }
})
export default class Course extends Vue {
  Banner = Banner
  course = {}
  features = []
  faqs = []
  contents = []

  async created() {
    const courseResponse = await api.findAll('course', {
      'filter[slug]': this.$route.params.courseslug
    })
    this.course = courseResponse.data[0]

    const featureResponse = await api.findAll('course_feature', {
      'filter[course]': this.course.id
    })
    this.features = featureResponse.data

    const faqResponse = await api.findAll('course_faq', {
      'filter[courses]': this.course.id
    })
    this.faqs = faqResponse.data

    const contentResponse = await api.findAll('course_topic', {
      'filter[course]': this.course.id
    })
    this.contents = contentResponse.data
  }
}
</script>
