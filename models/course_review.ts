import { Course } from './course'
import DevourRelation from './devour-relation';

export interface CourseReview {
  id: string
  reviewer: string
  imageUrl: string // url of image of reviewer
  body: string
  course?: Course | DevourRelation
  rating: number // [1-10 value, 4.5 stars == 9/10]
  link: string // link to original review location
}

const review: CourseReview = {
  id: '',
  reviewer: '',
  imageUrl: '',
  body: '',
  course: {
    jsonApi: 'hasOne',
    type: 'course'
  },
  rating: 0,
  link: ''
}

export default review
