import { Batch } from './batch'
import { CourseFeature } from './course_feature'
import { CourseTopics } from './course_topic'
import { Member } from './member'
import { CourseFAQ } from './course_faq'
import { CourseReview } from './course_review'
import DevourRelation from './devour-relation';

export type CourseType = 'online' | 'offline'

export interface Course {
  name: string
  id: string
  slug: string
  tagline?: string
  description?: string
  logo?: string
  markedPrice?: number
  courseType: CourseType
  batches?: Array<Batch | DevourRelation>
  features?: Array<CourseFeature | DevourRelation>
  topics?: Array<CourseTopics | DevourRelation>
  mentors?: Array<Member | DevourRelation>
  faqs?: Array<CourseFAQ | DevourRelation>
  reviews?: Array<CourseReview | DevourRelation>
}

const course: Course = {
  name: '',
  id: '',
  slug: '',
  tagline: '',
  description: '',
  logo: '',
  courseType: 'offline',
  markedPrice: 0,
  batches: [{
    jsonApi: 'hasMany',
    type: 'batch'
  }],
  features: [{
    jsonApi: 'hasMany',
    type: 'course_feature'
  }],
  topics: [{
    jsonApi: 'hasMany',
    type: 'course_topic'
  }],
  mentors: [{
    jsonApi: 'hasMany',
    type: 'member'
  }],
  faqs: [{
    jsonApi: 'hasMany',
    type: 'course_faq'
  }],
  reviews: [{
    jsonApi: 'hasMany',
    type: 'course_review'
  }]
}

export default course
