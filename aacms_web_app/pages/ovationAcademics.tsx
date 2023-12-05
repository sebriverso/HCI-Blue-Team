import React from 'react';
import Footer from './Components/footer';
import  Header  from './Components/header';
import  SideMenu  from './Components/ContentPageElements/SideMenu'
import Link from 'next/link'

import  ContentHeader  from './Components/ContentPageElements/ContentHeader'
import  ContentSubHeader  from './Components/ContentPageElements/ContentSubHeader'
import  ContentText from './Components/ContentPageElements/ContentText'
import  ContentList from './Components/ContentPageElements/ContentList'
import  Accordion from './Components/ContentPageElements/ContentAccordion'



const destinations = [
  { id: './programOverview', title: 'Program Overview' },
  { id: './arts', title: 'Arts' },
  { id: './ovationAcademics', title: 'Ovation Accelerated Academics' },
  { id: './testing', title: 'PSSA & Keystone Testing' },
  { id: './educationSupport', title: 'Education Support Service' },
  { id: './specialEducation', title: 'Special Education' },
];  


const accordionSections = [
    {
      title: 'English - Grades 7 & 8',
      content: (
        <div>
            <ContentText content='To qualify for Ovations English, students must:'/>
            <ContentList content={['Earn appropriate teacher recommendation from the current content teacher.',
            'Earn a year average of A in the current content course (B if it is already an Ovations course).',
            'Earn a rating of Proficient or Advanced on the PSSA in English Language Arts during the previous school year.',
            'Have a positive recommendation from the Guidance Counselor and Principal.']}/>
        </div>
      ),
    },
    {
      title: 'Mathematics - Grade 7',
      content: (
        <div>
            <ContentText content='To qualify for Ovations Math in seventh grade, students must:'/>
            <ContentList content={['Earn appropriate teacher recommendation from the 6th grade Math teacher.',
            'Earn a year average of A in the 6th grade Math course.',
            'Earn a rating of Proficient or Advanced on the PSSA during Math from the previous school year.',
            'Have a positive recommendation from the Guidance Counselor and Principal. ']}/>
        </div>
      ),
    },
    {
      title: 'Mathematics - Grade 8',
      content: (
        <div>
            <ContentText content='To qualify for Ovations Math in eighth grade, students must:'/>
            <ContentList content={['Earn appropriate teacher recommendation from the 7th grade Math teacher.',
            'Earn a year average of A in the 7th grade Math course (B if it is Ovations Math 7th grade).',
            'Earn a rating of Proficient or Advanced on the PSSA during Math from the previous school year.',
            'Complete an Algebra 1 placement test.',
            'Have a positive recommendation from the Guidance Counselor and Principal.']}/>
        </div>
      ),
    },
    {
      title: 'Science - Grade 7',
      content: (
        <div>
            <ContentText content='To qualify for Ovations Science in seventh grade, students must:'/>
            <ContentList content={['Earn appropriate teacher recommendation from the 6th grade Science teacher and the 6th grade Humanities teacher.',
            'Earn a year average of A in the 6th grade Science course.',
            'Have a positive recommendation from the Guidance Counselor and Principal.']}/>
        </div>
      ),
    },
    {
      title: 'Science - Grade 8',
      content: (
        <div>
            <ContentText content='To qualify for Ovations Science in eighth grade, students must'/>
            <ContentList content={['Earn appropriate teacher recommendation from the 7th grade Science teacher and 7th grade English Language Arts teacher.',
            'Earn a year average of A in the 7th grade Science course (B if it is already an Ovations course).',
            'Have a positive recommendation from the Guidance Counselor and Principal. ']}/>
        </div>
      ),
    }
];

export default function OvationAcademics() {
  return (
    <div>
      <Header text="My Website"  />
        <div style={{display: 'flex', alignItems: 'flex-start'}}>
            <SideMenu title='Curriculum' destinations={destinations}></SideMenu>
            
            <div style={{display: 'flex', flexDirection: 'column', alignSelf: 'stretch'}}>
                <ContentHeader title="Ovations Courses"/>
                <ContentText content="Ovations Courses, designed around the Pennsylvania Common Core Standards and Anchors, offer instruction in English, Mathematics, and Science at an accelerated pace. These courses are available to students in seventh and eighth grade who demonstrate highly proficient or advanced-level achievement in the selected subject as well as strong work ethic and motivation to succeed in an academically-rigorous environment. 
                    Ovations courses provide both group and individual activities requiring students to increase their use of critical thinking skills including analysis, synthesis, and problem solving. Students are encouraged to dig deeper into their interests and engage fully in collaborative classroom discussions."/>
                
                <ContentText content="Please feel free to contact us with any questions about the Ovations program."/>
                <ContentHeader title="How to Qualify"/>
                <ContentText content="The number of seats in each Ovations section is limited, and students must meet certain criteria in order to qualify for participation. Each subject area and grade level have specific eligibility requirements. Each point of the requirements listed below earns points towards qualification, Students are invited to participate based on the number of points earned, beginning with the highest number of points, until the class is full."/> 

                <ContentText content=" "/>
                <ContentText content="Click into each section to learn more about the prerequisites."/>
                <Accordion sections={accordionSections}/>
               

                <ContentHeader title="Course Descriptions"/>
                <ContentSubHeader content="English"/>
                <ContentText content="Ovations English addresses reading, writing, listening, and speaking within a rigorous standards-based program. Instruction will include reading comprehension, literary analysis, writing in text-dependent analysis essays, language conventions, vocabulary development in meaningful contexts, and reference skills. Students will study various genres including the short story, novel, drama, biography, poetry, and informational materials as dictated by Pennsylvania Common Core Standards using more complex text. "/>
                <ContentText content="Ovations goes beyond English 7 and 8 with extended learning activities that require students to increase their use of critical thinking skills to include analysis, synthesis, and problem-solving. Students are encouraged to dig deeper into a text and engage in lively, collaborative classroom discussions. The curriculum moves at an accelerated pace with a more concentrated focus. Ovations English is designed for students performing at the high Proficient to Advanced levels. All of the students must be willing to accept the challenges of the course and make an earnest effort to do their best."/>

                <ContentSubHeader content="Mathematics"/>
                <ContentText content="In Grade 7 Ovations Math, students will address the 7th grade curriculum with more of an emphasis on problem-solving, critical thinking, and moving through the curriculum at a faster pace. The course includes interactive exploration of all seventh grade Pennsylvania Common Core Mathematics standards, including integers, equations, inequalities, ratios, proportions, and percentages, and probability as well as geometry concepts like surface area and volume. This course requires expanded critical thinking and analysis of the role of math in everyday activities."/>
                <ContentText content="Eighth grade students participate in an Algebra I course, culminating in the administration of the Keystone Algebra I Exam. "/>

                <ContentSubHeader content="Science"/>
                <ContentText content="Ovations Science addresses topics from all areas of science, engineering and technology. Our students study what is being offered in the regular 7th and 8th grade science except that the topics are covered in more depth. This allows the students to explore all of these topics with more creativity. These classes call for the students to work on independent projects and the inquiry technique to understand what is being taught. The students who are accepted into the Ovations science class have shown both an interest in science and the work ethic required to succeed in this environment. 
                Ovations science students follow the same curriculum and standards as all other students, while having independent work to do, sometimes long-term (3-4 weeks). These students are also expected to participate in a science fair (sponsored by Lehigh University) and to read literature with a science base, both fiction and non-fiction."/>
                
            </div>

        </div>
      <Footer></Footer>
    </div>
  );
};
