import { Course } from './course'
import DevourRelation from './devour-relation';

export interface CourseFAQ {
  id: string
  question: string
  answer: string
  courses?: Array<Course | DevourRelation>
}

const faq: CourseFAQ = {
  id: '',
  question: '',
  answer: '',
  courses: [{
    jsonApi: 'hasMany',
    type: 'course'
  }]
}

export default faq 
