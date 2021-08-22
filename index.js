import alfy from 'alfy'
import dateFormat from 'dateformat'

const noteTitle = process.env.title || 'Timeline'

const date = dateFormat(new Date(), 'yyyy/mm/dd')
const time = dateFormat(new Date(), 'HH:MM')

const title = `#${noteTitle}/${date}`
const body = `- ${time} ${alfy.input}`

const url = [
  `bear://x-callback-url/add-text?`,
  `mode=append&`,
  //   `new_window=yes&`,
  //   `edit=yes&`,
  `show_window=no&`,
  `title=${encodeURIComponent(title)}&`,
  `text=${encodeURIComponent(body)}`,
].join('')

alfy.output([{ title: body.trimStart(), subtitle: title, arg: url }])
