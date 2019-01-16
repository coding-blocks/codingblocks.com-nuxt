import Api from '../models'

export function fetchMembers() {
  const { data } = Api.findAll('members')
  return data
}

export function fetchCourses() {
  const { data } = Api.findAll('courses')
}
