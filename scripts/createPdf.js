const fs = require('fs')
const path = require('path')
const pdf = require('html-pdf')

const output_filename = 'CV.pdf'
const html = fs.readFileSync('./public/index.html', 'utf8')
const options = { format: 'Letter' }

console.log(html)

pdf
  .create(html, options)
  .toFile(
    path.join(__dirname, '..', 'public/static', output_filename),
    (err, res) => {
      if (err) {
        return console.log(err)
      }
      return console.log(res)
    },
  )
