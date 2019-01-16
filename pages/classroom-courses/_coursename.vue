<template>
  <div>
    <CourseBanner 
      :bannerimage="Banner" 
      :title="title" 
      :subtitle="subtitle"/>
    <div class="section my-4">
      <div class="container">
        <div class="row">
          <div class="col-12 mx-auto text-center">
            <h1 class="display-3 text-primary">Overview</h1>
            <p class="lead">
              This C++ training course is designed to provide you with a platform from where you can start your journey in the amazing world of programming and software. The beginner's course will include programming fundamentals using C++, Loops, Functions, Arrays, Stacks, Queues, Linked List.
              <br>
              <br>
              The advanced course is for all those who are looking forward to sit for internships and placements. The course will involve rigorous practice of questions based on Sorting, Searching, Greedy Algorithms, Divide and Conquer Algorithms, Dynamic Programming along with comprehensive revision of data structures like linked-lists, Trees, Graphs, Heaps, Hashing etc.
              <br>
              <br>
              The course will help you become smarter with solutions and ace your programming interviews. C++ is known to be a very powerful language. It allows you to have a lot of control as to how you use computer resources effectively and efficiently better than other languages. Thanks to C++'s performance, it is often used to develop game engines, games, and desktop apps. As a statically typed language, C++ generally does better than dynamically typed languages because the code is type-checked before it is executed. Companies like Google and Facebook, also need C++ developers to optimize their apps or work on their products.
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
  title = 'C++ Launchapd'
  subtitle = 'Master DS & Algorithms In C++'

  faqs = [
    {
      id: 1,
      question: 'Who should do this course?',
      answer:
        'Anybody who is interested in learning C++ programming can do this course. C++ is a powerful language and is pretty easy to learn. Coding in its most essential form is nothing but problem solving. It deals with figuring out logical solutions and implementing them optimally. The process of learning to code transforms a person into an analytical thinker with strong mathematical and logical skills.'
    },
    {
      id: 2,
      question: 'Will this help if I has C++ in class 12?',
      answer:
        'Yes, absolutely. There is a lot more to learn in C++ than the school curriculum.'
    },
    {
      id: 3,
      question: 'I didnt have C++ in class 12. Can I do this Course?',
      answer:
        "Yes. Our instructors will start the C++ course from beginner's level. You don’t need any prior programming knowledge to attend this course. What we need is dedication and passion to learn programming from your side."
    }
  ]

  contents = [
    {
      title: 'Advanced Topics',
      subtopics: [
        'Stacks Queues Linked Lists',
        'trees & Tries',
        'Graphs',
        'Heaps and Priority Queues',
        'Binary Search Trees'
      ]
    },
    {
      title: 'Advanced Topics',
      subtopics: [
        'Stacks Queues Linked Lists',
        'trees & Tries',
        'Graphs',
        'Heaps and Priority Queues',
        'Binary Search Trees'
      ]
    },
    {
      title: 'Advanced Topics',
      subtopics: [
        'Stacks Queues Linked Lists',
        'trees & Tries',
        'Graphs',
        'Heaps and Priority Queues',
        'Binary Search Trees'
      ]
    }
  ]

  features = [
    {
      title: 'Fundamentals',
      icon: 'code',
      description:
        'We have designed our C++ fundamentals course keeping in mind the requirements of beginners. Course starts with fundamentals of logic building and problem solving. Many tricky Puzzles are also given to build logical thinking of our students.'
    },
    {
      title: 'Problem Solving',
      icon: 'puzzle-piece',
      description:
        'We have designed our C++ fundamentals course keeping in mind the requirements of beginners. Course starts with fundamentals of logic building and problem solving. Many tricky Puzzles are also given to build logical thinking of our students.'
    },
    {
      title: 'OOP Concepts & Project',
      icon: 'layer-group',
      description:
        'We have designed our C++ fundamentals course keeping in mind the requirements of beginners. Course starts with fundamentals of logic building and problem solving. Many tricky Puzzles are also given to build logical thinking of our students.'
    },
    {
      title: 'Data Structures & Algorithms',
      icon: 'chart-line',
      description:
        'We have designed our C++ fundamentals course keeping in mind the requirements of beginners. Course starts with fundamentals of logic building and problem solving. Many tricky Puzzles are also given to build logical thinking of our students.'
    }
  ]
}
</script>
