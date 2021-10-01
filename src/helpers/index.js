
import moment from 'moment'

export const fromNow = (dateTime) => {
  const data = (new Date(dateTime)).toISOString()
  const newDate = moment(data, "YYYYMMDD")
  return newDate.fromNow()
}