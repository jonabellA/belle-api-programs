const mongoose = require('mongoose');
const Course = require('./models/schemaa.js'); 


mongoose.connect('mongodb+srv://bellemagoJo:yIpxt4Wkr95OQr29@cluster0.pmvx9ku.mongodb.net/?retryWrites=true&w=majority')
.then (() => {
  console.log('MongoDB: Yo are connected!')
}).catch ((error) => {
  console.log()
}) 

const rawData = [
    // 1st Year BSIS 
    { program: "BSIS", year: "1st Year", code: "BSIS101", description: "Introduction to Information Systems", units: 3, tags: ["BSIS101", "BSIS", "Information Systems", "Introduction"] },
    { program: "BSIS", year: "1st Year", code: "BSIS102", description: "Fundamentals of Programming", units: 3, tags: ["BSIS102", "BSIS", "Programming", "Fundamentals"] },
    { program: "BSIS", year: "1st Year", code: "BSIS103", description: "Database Management Systems", units: 3, tags: ["Backend","BSIS103", "BSIS", "Database", "Management", "Systems"] },

    { program: "BSIS", year: "2nd Year", code: "BSIS201", description: "Systems Analysis and Design", units: 3, tags: ["BSIS201", "Backend", "BSIS", "Systems", "Analysis", "Design"] },
    { program: "BSIS", year: "2nd Year", code: "BSIS202", description: "Object-Oriented Programming", units: 3, tags: ["BSIS202", "BSIS", "Backend", "Object-Oriented", "Programming"] },
    { program: "BSIS", year: "2nd Year", code: "BSIS203", description: "Data Structures and Algorithms", units: 3, tags: ["BSIS203", "BSIS", "Data", "Backend", "Structures", "Algorithms"] },
    
    { program: "BSIS", year: "3rd Year", code: "BSIS301", description: "Web Development", units: 3, tags: ["BSIS301", "BSIS", "Web", "Backend", "Development"] },
    { program: "BSIS", year: "3rd Year", code: "BSIS302", description: "Software Engineering", units: 3, tags: ["BSIS302", "BSIS", "Backend", "Software", "Engineering"] },
    { program: "BSIS", year: "3rd Year", code: "BSIS303", description: "Information Security", units: 3, tags: ["BSIS303", "BSIS", "Backend", "Information", "Security"] },
  
  
    { program: "BSIS", year: "4th Year", code: "BSIS401", description: "Enterprise Systems", units: 3, tags: ["BSIS401", "Backend", "BSIS", "Enterprise", "Systems"] },
    { program: "BSIS", year: "4th Year", code: "BSIS402", description: "Project Management", units: 3, tags: ["BSIS402", "BSIS", "Project", "Management"] },
    { program: "BSIS", year: "4th Year", code: "BSIS403", description: "Internship/Thesis", units: 3, tags: ["BSIS403", "BSIS", "Internship", "Thesis"] },
    
    // 1st Year BSIT 
    { program: "BSIT", year: "1st Year", code: "BSIT101", description: "Introduction to Information Technology", units: 3, tags: ["BSIT101", "BSIT", "Information Technology", "Introduction"] },
    { program: "BSIT", year: "1st Year", code: "BSIT102", description: "Programming Fundamentals", units: 3, tags: ["BSIT102", "BSIT", "Programming", "Fundamentals"] },
    { program: "BSIT", year: "1st Year", code: "BSIT103", description: "Computer Organization and Architecture", units: 3, tags: ["BSIT103", "BSIT", "Computer", "Organization", "Architecture"] },
    
    { program: "BSIT", year: "2nd Year", code: "BSIT201", description: "Database Management", units: 3, tags: ["BSIT201", "Backend", "BSIT", "Database", "Management"] },
    { program: "BSIT", year: "2nd Year", code: "BSIT202", description: "Web Technologies", units: 3, tags: ["BSIT202", "BSIT", "Backend", "Web", "Technologies"] },
    { program: "BSIT", year: "2nd Year", code: "BSIT203", description: "Operating Systems", units: 3, tags: ["BSIT203", "BSIT", "Operating", "Backend", "Systems"] },
  
  
    { program: "BSIT", year: "3rd Year", code: "BSIT301", description: "Networking", units: 3, tags: ["Backend"] },
    { program: "BSIT", year: "3rd Year", code: "BSIT302", description: "Software Engineering", units: 3, tags: ["Backend"] },
    { program: "BSIT", year: "3rd Year", code: "BSIT302", description: "Information Security", units: 3, tags: ["Backend"] },
  
 
    { program: "BSIT", year: "4th Year", code: "BSIT401", description: "Project Management", units: 3, tags: [] },
    { program: "BSIT", year: "4th Year", code: "BSIT402", description: "Mobile Application Development", units: 3, tags: [] },
    { program: "BSIT", year: "4th Year", code: "BSIT403", description: "Internship/Thesis", units: 3, tags: [] },
  ];
  
  const preprocessData = (data) => {
    
    return data;
  };
  
  const insertData = async () => {
    const coursesToInsert = preprocessData(rawData);
    try {
      await Course.deleteMany({});
      await Course.insertMany(coursesToInsert);
      console.log('Courses inserted successfully.');
    } catch (error) {
      console.error('Error inserting courses:', error);
    }
  };
  
  insertData();
  