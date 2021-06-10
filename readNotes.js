const chalk=require("chalk")
const loadNotes=require("./loadNotes.js")

const readNotes=(title)=>{
    const notes=loadNotes()
    const foundNote=notes.find((note)=>note.title===title)
    if(foundNote){
        console.log(chalk.blue.inverse(foundNote.title))
        console.log(foundNote.body)
    }
    else{
        console.log(chalk.red.inverse("NOT FOUND!"))
    }

}

module.exports=readNotes