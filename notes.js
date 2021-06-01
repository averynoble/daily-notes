const notes = [
    {
        id: 1,
        subject: "HTML",
        date: "05/20/21",
        feeling: "Excited",
        timeSpent: 240
    },

    {
        id: 2,
        subject: "Cascading Style Sheets",
        date: "05/24/21",
        feeling: "Anxious",
        timeSpent: 1200
    },

    {
        id: 3,
        subject: "Git",
        date: "05/24/21",
        feeling: "Nervous",
        timeSpent: 900
    },

    {
        id: 4,
        subject: "JavaScript",
        date: "05/26/21",
        feeling: "Overwhelmed",
        timeSpent: 120
    }
]

const noteAboutToday = {
    id: 5,
    subject: "JavaScript Arrays and iteration",
    date: "05/27/21",
    feeling: "Not as stressed as i thought i was going to be",
    timeSpent: 360
}
notes.push(noteAboutToday);

/*for (const note of notes) {
    console.log(`
    Note ${note.id}
    The date was ${note.date}
    I learned about ${note.subject}
    I spent ${note.timeSpent} minutes working on it
    I was feeling ${note.feeling}.`)
}*/
// const searchTerm = "Nervous";

 /*for (const note of notes) {
    if (note.feeling == searchTerm) {
        console.log(`
        Note ${note.id}
        The date was ${note.date}
        I learned about ${note.subject}
        I spent ${note.timeSpent} minutes working on it
        I was feeling ${note.feeling}.`)
    }
    
} */

const createNote = (note) => {
    const lastIndex = notes.length - 1
    const currentLastNote = notes[lastIndex]
    const maxId = currentLastNote.id
    const idForNewNote = maxId + 1

    note.id = idForNewNote
    notes.push(note)
}

const moreNewerNote = {
    subject: "JavaScript Functions in Arrays",
    date: "06/01/21",
    feeling: "Feeling more confident",
    timeSpent: 360
}

createNote(moreNewerNote)

console.log(notes)