const portfolio = [
    {
        id: 0,
        projectName: "STI Mobile",
        url: "https://play.google.com/store/apps/details?id=com.sti.mobile&hl=id",
        image: "projects/sti.webp",
        projectDetail: "STI Mobile is a mobile application that provides information about the Faculty of Science and Technology at Dian Nuswantoro University.",
        technologiesUsed: [
            {
                tech: "Flutter"
            },
            {
                tech: "Laravel"
            },
            {
                tech: "Firebase"
            },
            {
                tech: "Swift"
            }
        ]
    },
    {
        id: 0,
        projectName: "Bengkel Koding",
        url: "https://bengkelkoding.dinus.ac.id/",
        image: "projects/bengkod.webp",
        projectDetail: "Our platform serves as an innovative Learning Management System (LMS) tailored specifically to support coding workshops within the Computer Science Bachelor's program at Dian Nuswantoro University, catering to an active user base of approximately 600 students",
        technologiesUsed: [
            {
                tech: "Laravel"
            },
            {
                tech: "Next Js"
            },
            {
                tech: "Flutter"
            },
        ]
    },
    {
        id: 0,
        projectName: "IHSG Prediction",
        url: "https://prediction-ihsg.streamlit.app/",
        image: "projects/ihsg.webp",
        projectDetail: "Explore our predictive application for forecasting IHSG (Indeks Harga Saham Gabungan) using advanced regression algorithms including KNN Regression, Linear Regression, Random Forest Regression, and Decision Tree Regression.",
        technologiesUsed: [
            {
                tech: "Python"
            },
            {
                tech: "Streamlit"
            },
        ]
    },
    {
        id: 0,
        projectName: "AFG DNCC 2023",
        url: "https://afg-dncc.vercel.app/",
        image: "projects/afg.webp",
        projectDetail: "Landing page website for AFG event registration at DNCC.",
        technologiesUsed: [
            {
                tech: "Vue"
            },
        ]
    },
    {
        id: 0,
        projectName: "Air Quality Index Detection",
        url: "https://datamining-xnw6ryd8frg.streamlit.app/",
        image: "projects/airquality.webp",
        projectDetail: "The Air Quality Index project is an initiative aimed at detecting and analyzing air quality levels using a Decision Tree algorithm. The project utilizes the Streamlit library to create an interactive and user-friendly interface, and it relies on the Jakarta Air Quality Index dataset to assess air quality in the city.",
        technologiesUsed: [
            {
                tech: "Python"
            },
            {
                tech: "Streamlit"
            },
        ]
    },
    {
        id: 0,
        projectName: "PAA 2022 HMTI Udinus",
        url: "/domain-expired",
        image: "projects/paa.webp",
        projectDetail: "Landing page website for PAA event registration at HMTI Udinus.",
        technologiesUsed: [
            {
                tech: "CodeIgniter4"
            },
        ]
    },
    {
        id: 0,
        projectName: "Workshop 2022 HMTI Udinus",
        url: "/domain-expired",
        image: "projects/workshop.webp",
        projectDetail: "Landing page website for workshop event registration at HMTI Udinus.",
        technologiesUsed: [
            {
                tech: "CodeIgniter4"
            },
        ]
    },
    {
        id: 0,
        projectName: "Relasi",
        url: "/domain-expired",
        image: "projects/relasi.webp",
        projectDetail: "Mobile and web-based application for organizations and communities.",
        technologiesUsed: [
            {
                tech: "Laravel"
            },
            {
                tech: "GO Lang"
            },
            {
                tech: "Flutter"
            },
            {
                tech: "Rest API"
            },
        ]
    },
    {
        id: 0,
        projectName: "Mbocu",
        url: "/domain-expired",
        image: "projects/mbocu.webp",
        projectDetail: "Catering reservation application.",
        technologiesUsed: [
            {
                tech: "Laravel"
            },
            {
                tech: "Vue Js"
            },
            {
                tech: "Rest API"
            },
        ]
    },
    {
        id: 0,
        projectName: "RRExpress",
        url: "/domain-expired",
        image: "projects/rrexpress.webp",
        projectDetail: "Application for freight forwarding services provider.",
        technologiesUsed: [
            {
                tech: "Laravel"
            },
            {
                tech: "Mapbox"
            },
            {
                tech: "Bootstrap"
            },
        ]
    },
    {
        id: 0,
        projectName: "AduanSys",
        url: "https://aduansys.coedev.my/",
        image: "projects/aduansys.webp",
        projectDetail: "Web-based community complaint system.",
        technologiesUsed: [
            {
                tech: "Laravel"
            },
            {
                tech: "Mapbox"
            },
            {
                tech: "Bootstrap"
            },
        ]
    },
    {
        id: 1,
        projectName: "SinareSemar",
        url: "/domain-expired",
        image: "projects/sinaresemar.webp",
        projectDetail: "News portal application for web and mobile.",
        technologiesUsed: [
            {
                tech: "Laravel"
            },
            {
                tech: "REST API's"
            },
        ]
    },
    {
        id: 2,
        projectName: "Brasco",
        url: "/domain-expired",
        image: "projects/brasco.webp",
        projectDetail: "Integrated website application for office management.",
        technologiesUsed: [
            {
                tech: "Bootstrap"
            },
            {
                tech: "PHP Native"
            },
        ]
    },
    {
        id: 2,
        projectName: "IOT Fireman and Garden",
        url: "/domain-expired",
        image: "projects/fireman.webp",
        projectDetail: "IoT for plant watering automation with temperature sensor, soil moisture, and rain condition indicators.",
        technologiesUsed: [
            {
                tech: "Arduino"
            },
            {
                tech: "PHP Native"
            },
            {
                tech: "ESP8266"
            },
        ]
    },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
