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
console.log(notes);