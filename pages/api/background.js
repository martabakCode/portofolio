const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Universitas Dian Nuswantoro',
                degree: 'BS, Informatics Engineering',
                detail: "Bachelor's Degree in Informatics Engineering from Universitas Dian Nuswantoro.",
                year: '2021-present'
            },
            {
                id: 1,
                title: 'SMK N 8 Semarang',
                degree: 'Vocational High School, Software Engineer',
                detail: "Completed Vocation High School in Software Engineer from SMK N 8 Semarang.",
                year: '2017-2020'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Universitas Dian Nuswantoro Semarang',
                role: 'Project Manager',
                url: 'https://dinus.ac.id/',
                desc: 'As a Project Manager at Universitas Dian Nuswantoro, I oversee the Bengkel Koding V2 project, which includes backend, mobile, and frontend teams. Additionally, I handle research projects at Udinus, such as predicting the IHSG using various algorithms.',
                year: '09/2023 - Present',
                location: 'Semarang, Indonesia'
            },
            {
                id: 2,
                title: 'Universitas Muhammadiyah Semarang',
                role: 'Course Instructor',
                url: 'https://unimus.ac.id/',
                desc: 'Being an instructor at the Himafor Unimus in the ISC basic web developer class, responsible for creating curriculum and assessments.',
                year: '03/2023 - 08/2023',
                location: 'Semarang, Indonesia'
            },
            {
                id: 3,
                title: 'Azura Labs',
                role: 'Back End Developer',
                url: 'https://azuralabs.id/',
                desc: 'As an Intern Backend Developer at Azura Labs, my responsibilities include learning new tools such as Express and Go. I apply this knowledge to each capstone project I work on, adhering to the established API contract.',
                year: '02/2023 - Present',
                location: 'Semarang, Indonesia'
            },
            {
                id: 4,
                title: 'Idolegacy',
                role: 'Back End Developer',
                url: 'https://azuralabs.id/',
                desc: 'As an Intern Backend Developer at Azura Labs, my responsibilities include learning new tools such as Express and Go. I apply this knowledge to each capstone project I work on, adhering to the established API contract.',
                year: '02/2023 - Present',
                location: 'Yogyakarta, Indonesia'
            },
            {
                id: 5,
                title: 'Idolegacy Sdn Bhd',
                role: 'Web Developer',
                url: 'https://idolegacy.com/',
                desc: 'As Web Web Developer, I build web for manage delivery apps with Livewire Laravel.',
                year: '01/2021 - 10/2021',
                location: 'Kota Kinabalu, Malaysia'
            },
            {
                id: 6,
                title: 'Udacoding',
                role: 'Lead Web Developer',
                url: 'https://www.udacoding.com/',
                desc: "I work there as a Lead Web Developer. In this role, I implement events to develop the skills of the web development team and work on projects using Laravel.",
                year: '09/2020 - 12/2020',
                location: 'Kota Tangerang Selatan, Indonesia'
            },
            {
                id: 7,
                title: 'FIF Group',
                role: 'IT Support',
                url: 'https://www.fifgroup.co.id/',
                desc: "As IT Support intern at FIF Group, I learn to troubleshooting computer at office.",
                year: '09/2020 - 12/2020',
                location: 'Semarang, Indonesia'
            },

        ]
    },
    {
        orgCards: [
            {
                id: 1,
                title: 'Google Developer Students Club UDINUS',
                role: 'Lead',
                url: 'https://gdsc.community.dev/universitas-dian-nuswantoro-semarang-indonesia/',
                desc: 'As the lead of GDSC Udinus, I have successfully achieved several milestones throughout its existence, including a 500+ increase in Instagram followers, 105 new followers on LinkedIn, 800+ event attendees, completion of 14 events, and the addition of 453 new members.',
                year: '08/2023 - 06/2024',
                location: 'Semarang, Indonesia'
            },
            {
                id: 2,
                title: 'Dian Nuswantoro Computer Club',
                role: 'Vice Chairman',
                url: 'https://dnccudinus.org/',
                desc: 'Responsible for assisting the chairman in seeking external partners and overseeing all members.',
                year: '09/2023 - 07/2024',
                location: 'Semarang, Indonesia'
            },
            {
                id: 3,
                title: 'YOT Semarang',
                role: 'Marcom',
                url: 'https://www.youngontop.com/',
                desc: 'I am responsible for creating all content on YOT Semarang, including editing TikTok videos, Instagram feeds, and writing articles for the website.',
                year: '08/2022 - 11/2022',
                location: 'Semarang, Indonesia'
            }

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
