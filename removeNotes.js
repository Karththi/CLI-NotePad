const chalk=require("chalk")
const loadNotes=require("./loadNotes.js")
const saveNotes=require("./saveNotes.js")

const removeNotes=(title)=>{
    const notes=loadNotes()
    const newNotes=notes.filter((note)=>note.title!==title)
    if(notes.length!=newNotes.length){
        saveNotes(newNotes)
        console.log(chalk.green.inverse("Removed Successfully"))
    }
    else{
        console.log(chalk.red.inverse("oops..!No such file exists with your given title. Check your title."))

    }
    
}

module.exports=removeNotes