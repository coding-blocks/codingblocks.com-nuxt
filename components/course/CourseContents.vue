<template>
  <div class="section">
    <div class="container my-4">
      <div class="row">
        <div class="col text-center">
          <h1 class="display-3 text-primary">Course Contents</h1>
        </div>
      </div>
    </div>
    <div class="course-card-container container my-4">
      <div class="content-row row">
        <div 
          v-for="content in contents" 
          :key="content.id" 
          class="course-card col-xs-12 col-sm-6 col-md-4 col-lg-4 p-4">
          <h3 class="topic">{{ content.title }}</h3>
          <hr>
          <ul>
            <li 
              v-for="subtopic in content.subtopics" 
              :key="subtopic.id">
              {{ subtopic }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {},
  props: {
    contents: []
  }
})
export default class CourseContents extends Vue {}
</script>
<style>
.course-card-container
  .content-row:nth-of-type(2n-1)
  .course-card:nth-of-type(2n-1) {
  background: #f5f5f5;
}
.course-card .topic {
  font-size: 20px;
  font-weight: 700;
  height: 3.5rem;
  overflow: hidden;
  word-wrap: break-word;
  text-overflow: ellipsis;
}
</style>
