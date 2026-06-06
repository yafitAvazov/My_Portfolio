import project1_img from '../assets/1.png'
import project2_img from '../assets/2.png'
import project3_img from '../assets/3.png'
import project4_img from '../assets/4.png'


const myprojecs_data = [
    {
        w_no: 1,
        w_name: "AI-Powered Sign Language Learning Platform",
        w_img: project1_img,
        description: "An interactive learning platform that uses AI, computer vision, and real-time feedback to make sign language practice more accessible and engaging.",
        contribution: [
          "Built camera-based gesture recognition and feedback flows.",
          "Designed learning experiences with games, exercises, and quizzes.",
          "Connected technical implementation with education, accessibility, and social impact."
        ],
        techStack: "Python | Flask | TensorFlow | Keras | OpenCV | MediaPipe | JavaScript | HTML | CSS",
        githubLink: "https://github.com/yafitAvazov/HandSignsProject",
        liveLink: "https://www.youtube.com/watch?v=OInw4ezSp2M&ab_channel=yafitAvezov"
      },
      {
        w_no: 2,
        w_name: "MovieLand",
        w_img: project2_img,
        description: "A Java desktop application focused on client-server architecture, structured data handling, and interactive UI implementation.",
        contribution: [
          "Implemented object-oriented application logic and JavaFX interface flows.",
          "Worked with client-server communication and structured data handling.",
          "Strengthened software engineering fundamentals beyond web interfaces."
        ],
        techStack: "Java | JavaFX | Client-Server Architecture | OOP",
        githubLink: "https://github.com/yafitAvazov/MovieLand_App",
        liveLink: "https://youtu.be/2SHQ0WDwKBw?t=288"

      },
      {
        w_no: 3,
        w_name: "Retro Shopping App",
        w_img: project3_img,
        description: "An interactive shopping experience focused on frontend implementation, product browsing, filtering, cart behavior, and polished UI states.",
        contribution: [
          "Created product catalog, filtering, and shopping-cart interactions.",
          "Implemented dark/light mode and responsive visual states.",
          "Focused on usable, visually engaging frontend behavior."
        ],
        techStack: "React | JavaScript | HTML | CSS | Frontend Development",
        githubLink: "https://github.com/yafitAvazov/Retro-App",
       
      },
    {
        w_no:4,
        w_name:"RecoMate",
        w_img:project4_img,
        description: "An Android recommendation app combining mobile development, Firebase integration, structured architecture, and user-oriented product thinking.",
        contribution: [
          "Designed a recommendation-based mobile experience with social interaction features.",
          "Used MVVM architecture, Firebase, and local persistence.",
          "Explored product logic, data handling, and mobile user experience."
        ],
        techStack: "Kotlin | MVVM | Firebase | Firestore | Room Database | Android Development",
        githubLink: "https://github.com/yafitAvazov/RecoMate",
        liveLink: "https://www.youtube.com/watch?v=LTDzfSaIHM4&t=3s&ab_channel=yafitAvezov"
    }
    
]
 
export default myprojecs_data;
