import moment from 'moment'

export const fromNow = (dateTime) => {
    const data = (new Date(dateTime)).toISOString()
    const newDate = moment(data, "YYYYMMDD")
    return newDate.fromNow()

}

export const formatNumber = (num) => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num;
}