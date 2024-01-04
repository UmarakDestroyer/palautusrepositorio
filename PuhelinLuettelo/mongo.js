const mongoose = require("mongoose")

if (process.argv.length<3) {
  console.log("give password as argument")
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://Stalin1234:${password}@cluster0.amksi.mongodb.net/?retryWrites=true&w=majority`

mongoose.set("strictQuery", false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: Number
})

const Persons = mongoose.model("Persons", personSchema)

if (process.argv.length == 3){
  console.log("phonebook")
  Persons.find({}).then(result => {
    result.forEach(note => {
      console.log(`${note.name} ${note.number}`)
    })

  })


}


const person = new Persons({
  name: process.argv[3],
  number: process.argv[4],
})

person.save().then(result => {
  console.log("person saved!")
  mongoose.connection.close()
})
