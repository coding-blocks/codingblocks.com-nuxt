export default {
  name: '',
  id: '',
  slug: '',
  tagline: '',
  description: '',
  logo: '',
  courseType: '',
  markedPrice: 0,
  batches: {
    jsonApi: 'hasMany',
    type: 'batch'
  },
  features: {
    jsonApi: 'hasMany',
    type: 'course_feature'
  },
  topics: {
    jsonApi: 'hasMany',
    type: 'course_topic'
  },
  mentors: {
    jsonApi: 'hasMany',
    type: 'member'
  },
  faqs: {
    jsonApi: 'hasMany',
    type: 'course_faq'
  },
  reviews: {
    jsonApi: 'hasMany',
    type: 'course_review'
  }
}
