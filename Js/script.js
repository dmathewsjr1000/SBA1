
// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023/01/25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023/02/27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156/11/15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023/01/25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023/02/12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023/01/25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023/01/24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023/03/07",
        score: 140
      }
    }
  ];
  
  function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
    const result = [
      {
        id: 125,
        avg: 0.985, // (47 + 150) / (50 + 150)
        1: 0.94, // 47 / 50
        2: 1.0 // 150 / 150
      },
      {
        id: 132,
        avg: 0.82, // (39 + 125) / (50 + 150)
        1: 0.78, // 39 / 50
        2: 0.833 // late: (140 - 15) / 150
      }
    ];
  
    return result;
  }
  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  console.log(result);
  console.log(CourseInfo);
  console.log(AssignmentGroup);
  console.log(LearnerSubmissions);

   let date1 = new Date();
   let date2 = new Date();
   let grade = LearnerSubmissions[0].submission.score / AssignmentGroup.assignments[0].points_possible;
   let grade1 = LearnerSubmissions[1].submission.score / AssignmentGroup.assignments[1].points_possible;
   let avg = (LearnerSubmissions[0].submission.score + LearnerSubmissions[1].submission.score) /  (AssignmentGroup.assignments[0].points_possible + AssignmentGroup.assignments[1].points_possible) * 100;
   let penalty = (LearnerSubmissions[0].submission.score - (AssignmentGroup.assignments[0].points_possible * .1)) / AssignmentGroup.assignments[0].points_possible;
//    for (let i = 0; i < AssignmentGroup.assignments.length; i++) {
     
//            date1 = new Date(LearnerSubmissions[i].submission.submitted_at);
//            console.log(date1 + ' sd');
//            date2 = new Date(AssignmentGroup.assignments[i].due_at);
//            console.log(date2 + ' dd');
           
//            if (Date.parse(date2) === Date.parse(date1)) {
//                 console.log(date2 + ' The assignment was turn on time.');
                
                
           
            
//            }
            

//            else if (Date.parse(date1) < Date.parse(date2)) {

//             console.log(date2 + ' The assignment is not due yet.');

//            }
//            else if(Date.parse(date1) > Date.parse(date2)) {
//             console.log(date2 + ' The assignment late.');    


//             }
   
//         }

    // let d = 0;

    //     for (let s = 0; s < LearnerSubmissions.length; s++) {
  
    //          date1 = new Date(LearnerSubmissions[s].submission.submitted_at);
    //           console.log(date1 + ' sd');


    //           do {
    //             d++
    //             date2 = new Date(AssignmentGroup.assignments[d].due_at);
    //             console.log(date2 + ' dd');
    //              if (d === AssignmentGroup.assignments.length) {
                   
                    
    //                  break;
    //              }
                 
    //         }while (d < AssignmentGroup.assignments.length);

    //     }

       
    
    
    //    for (let d = 0; d < AssignmentGroup.assignments.length; d++) {
      
    //         date2 = new Date(AssignmentGroup.assignments[d].due_at);
           
    //         console.log(date2 + ' dd');
    //  }

console.log(grade);
console.log(grade1);
console.log(avg);
console.log(penalty);
    function bcCalc(CourseInfo,AssignmentGroup,LearnerSubmissions) {

        if (CourseInfo.id  === AssignmentGroup.course_id) {
            console.log('Good to go');
            
        }
        
    }
  