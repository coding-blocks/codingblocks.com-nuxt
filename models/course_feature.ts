import { Course } from './course'
import DevourRelation from './devour-relation';

export interface CourseFeature {
  id: string
  title: string
  icon: string
  description: string
  course: Course | DevourRelation
}

const feature: CourseFeature = {
  id: '',
  title: '',
  icon: '',
  description: '',
  course: {
    jsonApi: 'hasOne',
    type: 'course'
  }
}

export default feature
