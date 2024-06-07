const expertise = [
    {
        id: 0,
        title: 'Full Stack Development',
        desc: 'I am a skilled developer with extensive experience in building web applications using Express.js, React, and Laravel. I possess a strong understanding of server-side rendering, API integration, and database management.',
    },
    {
        id: 1,
        title: 'Project Manager',
        desc: "As a Project Manager, I have considerable experience from my work at Relasi and Universitas Dian Nuswantoro. I am proficient in using tools such as Jira, ClickUp, and Notion, and I also have experience with Scrum as one of the methodologies.",
    },
    {
        id: 2,
        title: 'Designing (UI/UX)',
        desc: 'I am proficient in using design software such as Figma and Adobe Illustrator. Through participating in hackathons and freelance work, I have gained practical experience in UI/UX design and graphic design. Designing is my passion, and it has allowed me to continually develop my creative skills and grow in the field.',
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
