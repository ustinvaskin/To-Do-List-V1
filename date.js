
module.exports = getDate()


function getDate() {

  let today = new Date() // setting date 

  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  } // params

  let day = today.toLocaleDateString('en-US', options)
  return day
}

