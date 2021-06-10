const chalk=require('chalk')
const yargs=require('yargs')
const addNotes=require('./addNotes.js')
const removeNotes=require('./removeNotes.js')
const listNotes=require('./listNotes.js')
const readNotes=require('./readNotes')




//Add - node app.js add --title="Mine" --body="My content"
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Content',
            demandOption:true,
            type:'string'
        }

    },
    handler(argv){
        addNotes(argv.title,argv.body)
    }
})

//Remove
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Note title to be removed',
            demandOption:true,
            type:"string"
        }

    },
    handler(argv){
        removeNotes(argv.title)
    }
})

//List
yargs.command({
    command:'list',
    describe:'List Notes',
    handler(){
        listNotes()

}})

//Read
yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{
        title:{
            describe:"Note Title",
            demandOption:true,
            type:"string"
        }

    },
    handler(argv){
       readNotes(argv.title)
    }
})


yargs.parse()//console.log(yargs.argv)

