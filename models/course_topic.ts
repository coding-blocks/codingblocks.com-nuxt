import { Course } from './course'
import DevourRelation from './devour-relation'

export interface CourseTopics {
  id: string
  title: string
  description: string
  maxLectures: number
  minLectures: number
  maxDuration: number
  minDuration: number
  subtopics?: string[]
  course?: Course | DevourRelation
}

const topic: CourseTopics = {
  id: '',
  title: '',
  description: '',
  maxLectures: 0,
  minLectures: 0,
  maxDuration: 0,
  minDuration: 0,
  subtopics: [],
  course: {
    jsonApi: 'hasOne',
    type: 'course',
  },
}

export default topic
