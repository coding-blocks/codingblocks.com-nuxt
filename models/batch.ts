import { Center } from './center'
import { Course } from './course'
import { Member } from './member'
import DevourRelation from './devour-relation'

export interface Batch {
  id: string
  name: string
  sellPrice: number
  center?: Center | DevourRelation
  course?: Course | DevourRelation
  startDate?: string
  endDate?: string
  lectureStartTime?: string
  lectureEndTime?: string,
  teachers?: Array<Member>
}

const batch: Batch = {
  id: '',
  name: '',
  sellPrice: 0,
  center: {
    jsonApi: 'hasOne',
    type: 'comment'
  },
  course: {
    jsonApi: 'hasOne',
    type: 'course'
  },
  startDate: '',
  endDate: '',
  lectureStartTime: '',
  lectureEndTime: '',
  teachers: []
}

export default batch
