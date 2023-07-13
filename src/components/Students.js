import React from 'react'
import Scores from './Scores';


function Students({ studentData }) {
    console.log(studentData)

    return (
        <div> hi
            {studentData.students[0].map((student, index) => (
                <ul key={index}>
                    <div>

                        {student?.name}
                    </div>
                    <div>
                        {student?.bio}
                    </div>
                    <div><Scores scoreData={student.scores}/></div>

                </ul>
            ))}
        </div>
    )
}



export default Students;




