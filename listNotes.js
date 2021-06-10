const chalk=require("chalk")
const loadNotes=require("./loadNotes.js")

const listNotes=()=>{
    const notes=loadNotes()
    console.log(chalk.inverse("Your Notes..."))
    notes.forEach(note => console.log(note.title))
}

module.exports=listNotes
