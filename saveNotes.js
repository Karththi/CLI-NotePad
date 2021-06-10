const fs=require('fs')

const saveNotes=function(notes){
    const JSONnotes=JSON.stringify(notes)
    fs.writeFileSync("notes.json",JSONnotes)
  }


module.exports=saveNotes