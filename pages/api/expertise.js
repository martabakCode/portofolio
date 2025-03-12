const expertise = [
    {
        id: 0,
        title: 'Full Stack Web Development',
        desc: 'I am a skilled developer with extensive experience in building web applications using Express.js, React, and Laravel. I possess a strong understanding of server-side rendering, API integration, and database management.',
    },
    {
        id: 1,
        title: 'Project Manager',
        desc: "As a Project Manager, I have considerable experience from my work at Relasi and Universitas Dian Nuswantoro. I am proficient in using tools such as Jira, ClickUp, and Notion, and I also have experience with Scrum as one of the methodologies.",
    },
    {
        id: 2,
        title: 'Dev Ops',
        desc: 'I have experience in deploying applications using GCP, OpenShift, Digital Ocean, Heroku, Vercel, and Netlify. I am also familiar with CI/CD pipelines and have experience in setting up and maintaining them.',
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
