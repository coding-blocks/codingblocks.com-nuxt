<template>
  <div>
    <Banner 
      title="TEAM" 
      subtitle="Our Mentors"/>
    <div class="section my-4">
      <div class="container">
        <div class="row">
          <div class="col-12 mx-auto text-center">
            <h1 class="display-3 text-uppercase text-primary">Our Team</h1>
            <p class="lead">
              The backbone of any training institute is the team of talented and enthusiastic mentors, and the story is no different for Coding Blocks. We take pride in the fact that we have the most talented team of mentors, who have experienced the education and corporate industries with equal measures. All our mentors have been well performing students at the best of colleges, have worked at industry giants such as Sony, Cyanogen, SanDisk, Facebook, Barclays, Practo, Harman, DRDO, Cadence, American Express, Nagarro and many more. We also have GSoCers, GSoC Mentors and Google Code-in mentors in our team, in addition to people who've been published in international journals. With great reviews encouraging us, and the not so great ones making us push our limits, our team certainly has the right blend of people for every technology and language.
            </p>
          </div>
        </div>
        <div class="row">
          <MemberCard
            v-for="member in members" 
            :key="member"
            :image-src="member.image"
            :name="member.name"
            :designation="member.designation"
            :description="member.description"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator'
import Banner from '@/components/app/Banner'
import MemberCard from '@/components/cards/MemberCard'
import manmohanGupta from '@/assets/images/team/manmohan-gupta.jpg'

@Component({
  components: {
    Banner,
    MemberCard
  }
})
export default class extends Vue {
  manmohanGupta = manmohanGupta
  members = [
    {
      image: manmohanGupta,
      name: 'Manmohan Gupta',
      designation: 'Founder',
      description:
        'Manmohan Gupta (Munna Bhaiya), an IIT-Delhi graduate, is an ace programmer, technocrat, an entrepreneurial doyen and a mathematician. He has co-founded Software giant, Nagarro and Vidyamandir Classes(VMC). Having seen both the industries from up close, he could identify a key gap between college education and industry needs and has now set out to carve the path that will turn even ordinary students into industry-ready coders.'
    }
  ]
}
</script>
