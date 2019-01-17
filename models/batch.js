export default {
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
  teachers: Array
}
