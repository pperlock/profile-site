export const mapIcons=[
    {id: "3ff0dbdf-3dc8-493e-a78d-467616b890a3", name:'head', image:'/icons/trail-head.svg', alt:"trail head icon", title:'Trail Head', modal:"top", 
    contentTitle: "It All Started When ...",
    content: "I was introduced to coding in highschool which ignited the spark and started me on a journey into computer science."},
    {id: "3b5cfbe8-1f42-4a61-ae67-a7a5a5302354", name:'hiker', image:'/icons/hiking-solid.svg', alt:"hiker icon", title:'Computer Science & Geophysics', modal:"top", 
    contentTitle: "How it Shaped Me ...",
    content: "My time in science and research studying geophysics taught me that I wanted to move at a faster pace in a malleable, exciting field.",
    experience:[
        {date: "2005-2010", background:"/icons/uwo.png", place: "University of Western Ontario", position: "MSc.Geophysics", focus: "programming & statistical physics", thesis: "Imaging Faults in 3D Using Pattern Informatics"},
        {date: "2000-2005", background:"/icons/uwo.png", place: "University of Western Ontario", position: "BSc.Geophysics", focus: "programming & optimization algorithms", thesis: "Modeling of the July 1998 Northridge Aftershock Using a Linear Inversion and Genetic Algorithm"}
    ]},
    {id: "137666e4-a187-4897-8ee9-277ffa227613", name:'detour', image:'/icons/map-signs-solid.svg', alt:"detour icon", title:'Detour', 
    contentTitle: "I Detoured From my Path...",
    content: "When my passion for the outdoors and animals lead me to explore a career as a Dog Trainer.", modal:"middle",},
    
    {id: "ba72eaa7-c793-4438-9d6e-530a8530ec6b", name:'db', image:'/icons/database.svg', alt:"database icon", title:'Database Administration', modal:"bottom", 
    contentTitle: "How it Shaped Me ...",
    content: "As a Database Administrator I found myself constantly reaching for ways to learn new skills and searching for projects that allowed me to use my object-oriented programming knowledge and logical thinking skills.",
    experience:[
        {date: "2017-2020", background:"/icons/klg.png", place: "Kirkland Lake Gold", position: "Senior Database Administrator"},
        {date: "2015-2017", background:"/icons/sas.png", place: "St. Andrew's Goldfields", position: "Database Administrator"},
    ]},
    {id: "7ad97a39-149a-428d-8536-18c9dbf94e76", name:'dog', image:'/icons/dog-training.svg', alt:"dog training icon", title:'Dog Training', modal:"top", 
    contentTitle: "How it Shaped Me ...",
    content: "I loved the impact I was making on other people's lives as a dog trainer but ultimately it left me lonely and mentally unstimulated, longing for a team environment.",
    experience:[
        {date: "2010-2015", background:"/icons/dogs-north.png", place: "Dog's North", position: "Owner, Lead Trainer"},
    ]},
    {id: "e349f06b-dda7-4801-ba36-c61dd65acd15", name:'end', image:'/icons/end-of-trail.png', alt:"end of trail icon", title:'Web Development', modal:"bottom", 
    contentTitle: "Here you Find Me ...",
    content: "In an exciting, fast-paced, changing field that pushes my imagination to its limits, and challenges my brain daily through constant learning and problem solving.",
    experience:[
        {date: "Present", background:"/icons/brainstation3.png", place: "BrainStation", position:"Teaching Assistant"},
        {date: "2020-2021", background:"/icons/brainstation3.png", place: "BrainStation", position: "Student: Full Stack Development"},
    ]}
];

export const skillIcons = [
    {id: "0676d543-c84f-4999-9ede-4ba69d8eb085", status:"out", name:'skills__html-css', image:'/icons/html5-css3.png', title:"", alt:"html 5", animation:"fade-up"},
    {id: "cc552065-a2bd-4a91-8fca-48ccaf3f9dd6", status:"out", name:'skills__js', image:'/icons/js-icon2.png', title:"", alt:"javascript",  animation:"fade-left"},
    {id: "af86fee6-2bc7-4153-9acb-5112aaed2ad9", status:"out", name:'skills__node', image:'/icons/nodejs-icon.svg', title:"", alt:"nodejs",  animation:"fade-down"},
    {id: "602ba85d-e6e1-4f95-a843-987175590242", status:"out", name:'skills__react', image:'/icons/react-icon.png', title:"", alt:"react",  animation:"fade-right"},
    {id: "a9820966-c615-494e-8be5-85d1c390d3a2", status:"out", name:'skills__sass', image:'/icons/sass-icon.png', title:"", alt:"sass",  animation:"fade-up-left"},
    {id: "5f7fd73f-7e72-4cd6-9743-6e2b8bc6222b", status:"out", name:'skills__axios', image:'/icons/axios-icon.png', title:"", alt:"axios",  animation:"fade-up-right"},
    {id: "eefb9a1b-dd60-47a8-9ad5-366e784311e7", status:"out", name:'skills__git', image:'/icons/git-icon.png', title:"", alt:"git",  animation:"fade-down-left"}, 
    {id: "8e84a608-de0a-489a-a7d0-7605e17f1021", status:"out", name:'skills__databases', image:'/icons/databases.png', title:"", alt:"sql",  animation:"fade-down-right"},   
];

export const sections=[
    {name:"about", title:"ABOUT ME", background: '/images/about-background.jpg', scrollAnimation: {animation:"fade-up", anchor:"", anchorPlacement:"", speed:"1500"}, overlay:true},
    {name:"skills", title:"SKILLS", background: false, scrollAnimation: {animation:"", anchor:"", anchorPlacement:"", speed:""}, overlay:true},
    {name:"experience", title:"EXPERIENCE", background: '/images/home-background2-2.jpg', scrollAnimation: {animation:"zoom-in-up", anchor:".experience", anchorPlacement:"top-center", speed:"1000"}, overlay:true},
    {name:"projects", title:"PROJECTS", background: false, scrollAnimation: {animation:"", anchor:"", anchorPlacement:"", speed:""}, overlay:false},
    {name:"contact", title:"CONTACT", background: "/images/mist-transparent.png", scrollAnimation: {animation:"", anchor:"", anchorPlacement:"", speed:""}, overlay:false}
];

export const events=[
    {id:'996c7cd9', date: "Feb - May 2021", type: "professional", background:"/icons/brainstation3.png", place: "BrainStation", position:"Teaching Assistant", 
        summary: ["Reading and debugging code of other developers", 
                "Guiding students to adhere to industry-standard best practices to produce premium styling and functionality for their web applications", 
                "Live coding presentations", 
                "Teaching students to problem solve using logical thinking"]
    },
    {id:'996c7ca8', date: "Oct 2020 - Feb 2021", type: "education", background:"/icons/brainstation3.png", place: "BrainStation", position: "Web Development Diploma", 
        summary: ["Full-Stack Development",
            "Experience using provided mockups in pdf and Figma format to create respnsive applications using a mobile first approach with HTML and SASS", 
            "Created interactive sites using both React and js DOM manipulation",  
            "Pulling data from APIs to serve dynamic content from outside sources",  
            "Building Resful APIs using Node.js and express to serve up database information from MongoDB",  
            "Dabbled in cloud storage with Firebase and passport authentication"]},
    {id:'996c7bea', date: "2017-2020", type: "professional", background:"/icons/klg.png", place: "Kirkland Lake Gold", position: "Senior Database Administrator", 
        summary: ["Spearheaded the development and execution of a SQL server database focusing on the balance between creating a user- friendly experience and data quality.",
                "Designed and regulated a detailed QAQC monitoring program that reports the precision and accuracy of assay data, improving data reliability.",
                "Collaborated with end users and software developers remotely to ensure functionality requirements were met while simultaneously providing training and support."] },
    {id:'996c7b2c', date: "2015-2017", type: "professional", background:"/icons/sas.png", place: "St. Andrew's Goldfields", position: "Database Administrator",
        summary: ["Orchestrated a validation program on an unstandardized, undocumented database to increase the accuracy of data used for making profitable business decisions."]},
    {id:'996c7a6e', date: "2010-2015", type: "professional", background:"/icons/dogs-north-simple.png", place: "Dog's North", position: "Owner, Lead Trainer",
        summary: ["Scheduled, planned and delivered lesson plans to clients", 
                "Modified and delivered lesson plans based on the learning style observed for each client",
                "Organized and delivered adverstising campaigns"]},
    {id:'996c797e', date: "2005-2010", type: "education", background:"/icons/uwo.png", place: "University of Western Ontario", position: "MSc.Geophysics", focus: "programming & statistical physics", thesis: "Imaging Faults in 3D Using Pattern Informatics"},
    {id:'996c7758', date: "2000-2005", type: "education", background:"/icons/uwo.png", place: "University of Western Ontario", position: "BSc.Geophysics", focus: "programming & optimization algorithms", thesis: "Modeling of the July 1998 Northridge Aftershock Using a Linear Inversion and Genetic Algorithm"}
];
