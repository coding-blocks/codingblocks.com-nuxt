import { Center } from './center'
import { Course } from './course'
import DevourRelation from './devour-relation'

export type MemberType = 'employee' | 'admin' | 'intern'

export interface Member {
  id: string // size = 2 to create teacher code
  name: string
  bio?: string
  imageUrl?: string // url to image location
  designation?: string
  role: MemberType
  featured?: boolean
  order: number
  center?: Center | DevourRelation
  courses?: Array<Course | DevourRelation>
}

const member: Member = {
  id: '',
  name: '',
  bio: '',
  imageUrl: '',
  designation: '',
  role: 'intern',
  featured: false,
  order: -1,
  center: {
    jsonApi: 'hasOne',
    type: 'center',
  },
  courses: [
    {
      jsonApi: 'hasMany',
      type: 'course',
    },
  ],
}

export default member
