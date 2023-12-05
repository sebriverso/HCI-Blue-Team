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
    title: 'Special Education at AACMS',
    content: `
      <br>
      In accordance with Chapter 711 of the Pennsylvania Code regarding Charter School Services and Programs for Children with Disabilities, The Arts Academy Charter School (AACMS) provides a free, appropriate, public education to eligible students with an interest and/or talent in the Arts. &nbsp;To qualify for Special Education Services at AACMS as an eligible student, the child must be of school age, in need of specially-designed instruction, and meet eligibility criteria for one or more of the following physical or mental disabilities, as set forth in Pennsylvania State Regulations: &nbsp;Specific Learning Disability, Emotionally &nbsp;Disturbed, Autism/Pervasive Development Disorder, Blindness/Visual Impairment, Deaf-blindness, Deafness, Hearing Impairment, Mental Retardation, Multiple Disabilities, Orthopedic Impairment, Neurological Impairment, Other Health Impairment, Visual Impairment including Blindness, and Speech or Language Impairment.&nbsp;<br>
      <br>
      Students who are accepted into AACMS are supported throughout the academic and artistic curriculum based on the needs and goals identified by the IEP Team. &nbsp;Case managers work closely with general education teachers and artistic areas instructors to ensure that each child will have access to the academic and artistic curriculum and opportunities available to all students at AACMS.
    `,
  },
  {
    title: 'Requesting an Evaluation for Services',
    content: `
      <br>
      If you believe that your child may be in need of Specially Designed Services you may write a letter to the Principal or Director of Educational Support Services at AACMS. The following is an example of a letter you may use to request an evaluation of your child.<br>
      <br>
      Your Name<br>
      Your Address<br>
      Your phone number<br>
      The date<br>
      <br>
      Dear (Principal’s name),<br>
      I am the parent of (your child’s full name) whose date of birth is (month /day/year). My child is<br>
      in the (number) grade. My child is not doing well in school and I am requesting that ad<br>
      evaluation be carried out to determine what the problems are and how they can be addressed. I<br>
      understand that I am a member of my child’s evaluation team and I wish to provide input to the<br>
      team. Please let me know how I can participate in the process.<br>
      <br>
      I am looking forward to receiving a notice of parental rights and a “Permission to Evaluate” &nbsp;form for my signature.<br>
      Thank you for your time and please contact me if you require further information.<br>
      Sincerely,<br>
      (Your Name)
    `,
  },
  {
    title: 'Confidentiality of Student Records (FERPA)',
    content: `
      AACMS protects the confidentiality of personally identifiable information for all students in accordance with state and federal law.&nbsp;<br>
      <br>
      <strong>Student Records</strong><br>
      School records are an important part of a student’s formal educational file in a charter public school setting. They are confidential and privileged. As a parent of an eligible/non-eligible child, you have rights guaranteed by the Family Educational Rights and Privacy Act, (FERPA) (20 U.S.C. §1232 g; 34 CFR Part 99). This notice outlines your rights.&nbsp;<br>
      You have the right to inspect your child’s records within forty-five (45) days from the date of a written request. You may make a written request for copies of your child’s records at a fee not to exceed duplicating costs. Requests for review, inspection, or duplication should be submitted to the staff person designated as having responsibility for the records. (See the chart below for locations.)<br>
      If you believe that any information in the records is inaccurate, misleading, or in violation of privacy, you may request a change in records or have a hearing if the request is refused.<br>
      <br>
      <strong>Release of Information</strong><br>
      Your child’s records cannot be released without your written consent except for directory information, incidents specified in the policy, or as otherwise stated herein. Directory information may consist of name, address, telephone number, date and place of birth, major field of study, honors won and offices held, recognition for achievements, post high school endeavors, recognition of graduating seniors, participation in officially recognized activities and sports, weight and height (for members of athletic teams), dates of attendance, enrollment status, degrees, and awards received, and the last educational agency or institution attended by the student. If you do not want directory information about your child transferred, you may prevent its release by contacting AACMS in writing within thirty (30) days from the receipt of this notice. Please address such requests to the building principal.&nbsp;<br>
      <br>
      <strong>Disclosure Exceptions</strong><br>
      Your child’s records may be moved to another school or school system in which you plan to enroll your child, or in which your child is already enrolled, if you notify the responsible staff person at AACMS, or if the enrolling school system submits written notification of enrollment and the disclosure of information requested is for purposes related to the student’s enrollment or transfer. The following is a list of examples:
      <ul>
        <li>School officials with legitimate educational interest.</li>
        <li>Other schools to which a student is transferring.</li>
        <li>Specified officials for audit or evaluation purposes.</li>
        <li>Appropriate parties in connection with financial aid to a student.</li>
        <li>Organizations conducting certain studies for or on behalf of the school.</li>
        <li>Accrediting organizations.</li>
        <li>To comply with a judicial order or lawfully issued subpoena.</li>
        <li>Appropriate officials in cases of health and safety emergencies; and state and local authorities within a juvenile system, pursuant to specific state law.</li>
      </ul>
      <br>
      <strong>Maintenance of Records&nbsp;</strong><br>
      Records will be maintained on a child until no longer necessary. Special Education Records must be retained for six (6) years. Permanent records will be kept for one hundred (100) years beyond the date the student attains the age of twenty-one (21). The permanent records may contain such information as the student’s name, birth date, address, enrollment date, class rank, grades, and academic and non-academic awards. Parents have certain rights with respect to their child’s records that are transferred to a student when he or she reaches the age of eighteen (18) or attends an institution of post-secondary education unless the student is dependent upon the parent, as defined in Section 152 of the Internal Revenue Code of 1954.<br>
      Should your primary language not be English, you may write for assistance in understanding the records policy and your child’s records.<br>
      Should you feel that the AACMS is not providing the rights as guaranteed by the Family Educational Rights and Privacy Act (FERPA), you may file a letter with the Family Policy Compliance Office, U.S. Department of Education, 400 Maryland Avenue, SW, Washington, DC 20202-5920.
    `,
  },
  {
    title: 'Protected Handicapped Students Chapter 15',
    content: `
      <br>
      In compliance with state and federal law, AACMS will provide to each protected handicapped student, without discrimination or cost to the student or family, those related aids, services or accommodations which are needed to provide equal opportunity to participate in and obtain the benefits of the school program and extracurricular activities to the maximum extent appropriate to the student’s abilities.&nbsp;<br>
      <br>
      In order to qualify as a protected handicapped student, the child must be school age with a physical or mental disability that substantially limits or prohibits participation in or access to an aspect of the school program. These services and protections for “protected handicapped students” are distinct from those applicable to all eligible or exceptional students enrolled (or seeking enrollment) in special education programs.<br>
      <br>
      <strong>Individuals with Disabilities Education Act (IDEA) and Section 504 of the Rehabilitation Act</strong><br>
      The Arts Academy protects the rights of individuals with disabilities in programs and activities in our school as provided in Section 504 of the Rehabilitation Act as well as ensuring a Free and Appropriate Public Education (FAPE) for all students.
    `,
  },
  {
    title: 'Provision of Related Services Including Psychological Counseling',
    content: `
      Arts Academy Charter Middle School provides psychological services to students with a disability as a related service in order to help the child benefit from special education.&nbsp;<br>
      The need can be identified through the comprehensive evaluation or by the IEP team. The need for psychological service is added to the IEP in the related service section, noting the specific type, frequency and duration. Data collection and progress monitoring is used to assess the impact of the psychological counseling.<br>
      Psychological counseling within Arts Academy Charter Middle School is conducted by a Licensed Professional Counselor.<br>
      The above mentioned services are provided at no cost to the parents at any time.&nbsp;<br>
      For additional information contact the Director of Education Support Services, Kathleen Adolt- Silva.<br>
      Kadolt-silva@arts-cs.org
    `,
  },
];


export default function specialEducation() {
  return (
    <div>
      <Header text="My Website"  />
        <div style={{display: 'flex', alignItems: 'flex-start'}}>
            <SideMenu title='Curriculum' destinations={destinations}></SideMenu>
            
            <div style={{display: 'flex', flexDirection: 'column', alignSelf: 'stretch'}}>
                <ContentHeader title="Special Education"/>
                
                <ContentText content="Arts Academy Charter Middle School provides a free, appropriate, public education to students with a disability.   We believe strongly in a full inclusion program and strive to find the Least Restrictive Environment for every child’s optimal learning and success. The general education classroom teachers work closely with the Special Education department in planning, adapting, and monitoring instruction individually. Our students with special needs are fully included to their utmost potential into their artistic classes. "/>
                <ContentText content="Our students are instructed by highly qualified Special Education teachers and Pennsylvania certified Paraprofessionals. Related services such as Speech/Language Therapy, Vision Therapy, Orientation and Mobility Training, and Occupational Therapy are offered as needed through a collaboration with the Carbon/Lehigh Intermediate Unit 21 (CLIU21)."/>
                <ContentText content="AACMS engages in identification procedures to ensure that eligible students receive an appropriate educational program consisting of special education and related services, individualized to meet student needs. At no cost to the parents, these services are provided in compliance with state and federal law and are reasonably calculated to yield meaningful educational benefit and student progress. To identify students who may be eligible for special education, various screening activities are conducted on an ongoing basis. These screening activities include: review of group-based data (cumulative records, enrollment records, health records, report cards, ability, and achievement test scores); hearing, vision, physical, and speech/language screening; and review by a Child Find team. When screening results suggest that the student may be exceptional, AACS seeks parental consent to conduct a multidisciplinary evaluation. Parents who suspect their child is a student with a disability may request a multidisciplinary evaluation at any time through a written request to the Director of Special Education."/>
                <ContentHeader title="Special Education Notices"/>
                
                <Accordion sections={accordionSections}/>
                
               

                <ContentHeader title="Additional Resources & Notices"/>
                <ContentSubHeader content="English"/>
                <ContentText content={'This section contains links to other Special Education Resources and notices.  If you have questions, please contact the Special Education Department via the contact information above.'}></ContentText>
                <ContentHeader title = "Distance Learning: 8 Tips to Help Your Child Learn at Home"/>
                <ContentText content={'We hope you find these tips on helping your child learn remotely helpful this fall.  By Sean J. Smith, PhD on Mar 17, 2020 Understood.org'}></ContentText>
                
            </div>

        </div>
      <Footer></Footer>
    </div>
  );
};
