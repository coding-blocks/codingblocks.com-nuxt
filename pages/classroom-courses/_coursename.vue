<template>
  <div>
    Course Page
    <CourseBanner/>
    <CourseFeatures/>
    <CourseFAQ/>
    <CourseContents/>
  </div>
</template>
<script>
import CourseBanner from '@/components/course/CourseBanner.vue'
import CourseFAQ from '@/components/course/CourseFAQ.vue'
import CourseContents from '@/components/course/CourseContents.vue'
import CourseFeatures from '@/components/course/CourseFeatures.vue'

export default {
  components: {
    CourseBanner,
    CourseFAQ,
    CourseContents,
    CourseFeatures
  }
}
</script>
