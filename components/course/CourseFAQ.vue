<template>
  <div class="section">
    <div class="container">
      <div class="row my-4">
        <div class="col text-center">
          <h1 class="display-3 text-primary">FAQ</h1>
          <p>(Drop a line at admissions@codingblocks.com if you have further queries)</p>
        </div>
      </div>
      <div class="row my-4">
        <b-card 
          v-for="faq in faqs"
          :key="faq.id"
          no-body 
          class="col-8 mx-auto">
          <b-card-header 
            header-tag="header" 
            class="p-1" 
            role="tab">
            <b-btn 
              v-b-toggle="faq.id"
              block 
              href="#" 
              class="left"
              variant="link">{{ faq.question }}</b-btn>
          </b-card-header>
          <b-collapse 
            :id="faq.id" 
            role="tabpanel">
            <b-card-body>
              <p class="card-text">{{ faq.answer }}</p>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {},
  props: {
    faqs: []
  }
})
export default class CourseFaq extends Vue {}
</script>
