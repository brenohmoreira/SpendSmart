export default {
  /* @date => new Date() format to ISO */
  formatDate: (date) => {
    date.setUTCHours(date.getUTCHours() - 3)
    return date.toISOString().slice(0, 16)
  } 
}