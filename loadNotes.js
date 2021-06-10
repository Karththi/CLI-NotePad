const fs=require('fs')

const loadNotes=()=>{
    try{
        const JSONnotes=fs.readFileSync("notes.json").toString()
        return JSON.parse(JSONnotes)
    }
    catch(e){
        return []

    }
}


module.exports=loadNotes