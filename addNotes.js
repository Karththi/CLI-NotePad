const chalk=require("chalk")
const loadNotes=require("./loadNotes.js")
const saveNotes=require("./saveNotes.js")

const addNotes=(title,body)=>{
    const notes=loadNotes()
    const dupNote=notes.find((note)=>note.title===title)
    if(!dupNote){
        notes.push(
            {
                title:title,
                body:body
            }
        )
        saveNotes(notes)
        console.log(chalk.green.inverse("New note Added Successfully"))

    }
    else{
        console.log(chalk.red.inverse("Given title has already existed.Failed to add a new note"))
    }
    
    
}

module.exports=addNotes