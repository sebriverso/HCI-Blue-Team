import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'
import { Header } from './Components/header'
import Footer from './Components/footer'
import { SideMenu } from './Components/ContentPageElements/SideMenu'
import { ContentHeader } from './Components/ContentPageElements/ContentHeader'
import { ContentText } from './Components/ContentPageElements/ContentText'
import { ContentSubHeader } from './Components/ContentPageElements/ContentSubHeader'
import ContentList from './Components/ContentPageElements/ContentList'

const destinations = [
    {id: 'aacmsFoundation', title: 'AACMS Foundation'},
    {id: 'donate', title: 'Donate'},
    {id: 'fundraisers', title: 'Fundraisers'},
    {id: 'volunteer', title: 'Volunteer'},
    {id: 'logowear', title: 'Logowear'}
];

export default function aacmsFoundation() {
    return (
        <div>
            <Header text='AACMS' />
            <div style={{display: 'flex', alignItems: 'flex-start'}}>
                <SideMenu title='Get Involved' destinations={destinations} />
                <div style={{display: 'flex', flexDirection: 'column', alignSelf: 'stretch'}}>
                    <ContentHeader title="AACMS Foundation" />
                    <ContentText content="The Arts Academy Charter Middle School Foundation is a 501 (c) (3) non-profit, tax-exempt organization whose primary goal is to raise funds to promote, enhance, and supplement the educational and co-curricular programs for the benefit of students and staff at the Arts Academy Charter Middle School in order to provide opportunities for students to explore their artistic passions and talents in a supportive, challenging and rigorous academic and artistic environment." />
                    <ContentText content="The AACMS Foundation is a certified PA Charitable Organization." />
                    <ContentText content="The AACMS Foundation currently has two programs, noted below, approved by the PA Educational Improvement Tax Credit (EITC) program." />
                    <ContentText content="Determination letter PENNSYLVANIA EDUCATIONAL IMPROVEMENT TAX CREDIT (EITC)" />

                    <ContentHeader title="What is the PA Educational Improvement Tax Credit Program?" />
                    <ContentText content="Businesses who wish to support the Arts Academy Charter Middle School (AACMS) may be eligible for a tax credit through Pennsylvania's Educational Improvement Tax Credit Program." />
                    <ContentText content="The AACMS Foundation is a recognized Educational Improvement Organization (EIO) under Pennsylvania's Educational Improvement Tax Credit Program." />
                    <ContentText content="This program provides companies with a direct tax credit of up to 90 percent for a two-year commitment toward the amount a business owes in state taxes. Contributions to the AACMS through the EITC program leave companies with a much smaller state tax bill, while supporting the AACMS’ vital, high-quality educational programs serving public school children from the Lehigh Valley and neighboring regions. For more information, please visit the EITC website." />

                    <ContentHeader title="Why the Arts Academy Charter Middle School?" />
                    <ContentText content="Since its inception, the AACMS has partnered with the community to increase education and arts access and opportunities for regional Pennsylvania public school students. The AACMS' innovative educational programs provide rigorous art-infused academics and six arts programs: Dance, Instrumental Music, Vocal Music, Theater, Visual Arts, and Figure Skating. Students from more than 25 Pennsylvania public school districts, some as far as 40 miles, attend." />
                    <ContentText content="AACMS performing student troupes regularly perform throughout the community at retirement communities, regional festivals, sporting events, and arts events. The AACMS is a tuition-free school, and students do not pay art, equipment, or material fees. Our students want to come to school, and are eager to learn. Here's what our students have to say about the school:" />
                    <ContentText content="&#34;The AACMS makes me feel that school is not a place where I am trapped for seven hours a day. Before I came here I thought school would be a place where I would be mentally harassed for the rest of my life. Now that I am at the AACMS, I feel like I am not the only person who was a singer and actor. I am surrounded by people like me. I am comfortable here. I feel secure and safe. This school has made me more positive.&#34; -Vincent K., 8th grade vocal music student" />
                    <ContentText content="&#34;The AACMS has exposed me to the real world in a great way. I am now making friendships with all kinds of different people. Unlike my old school, the teachers are all very kind, patient and open to new ideas, making me very eager to learn. I used to consider school annoying, boring and an interruption, but the teachers have made it fun. Every teacher has their own special talent. They bring fun to learning and the arts, a perfect balance.&#34; -Katherine C., 6th grade figure skating student" />
                    <ContentText content="&#34;What I like best about the AACMS is how all teachers and staff are all kind and understanding.&#34; -Angel R., 5th grade instrumental music and visual arts student" />

                    <ContentHeader title="AACMS Has Two EITC Approved Educational Improvement Programs" />
                    <ContentSubHeader content="Arts in Education Program" />
                    <ContentText content="The AACMS provides an innovative approach to education by tapping into the students' existing passion for the arts to enhance their traditional academic studies." />
                    <ContentText content="The AACMS integrates the arts in classrooms by using concepts and techniques learned in arts classes to reinforce academic materials. New academic materials are presented in a multi-sensory manner, so students can link the information to arts concepts they already know and understand." />
                    <ContentText content="Students are encouraged to use creative ways to approach assignments, presentations and problem solving, and learn valuable time management skills to balance their academic and arts classwork. They also learn the value of creative problem solving, discipline, hard work, teamwork, the phases of project management, and how to improvise." />
                    <ContentText content="They establish life skills and habits that will help them succeed in higher education, and whatever they choose to do in the future. AACMS students thrive in an innovative atmosphere with like-minded peers, and attain a broader view of the world around them through their study of the arts alongside traditional academics." />
                    <ContentSubHeader content="Ovations Achievement Program" />
                    <ContentText content="The AACMS Ovations Achievement Program is an option for seventh and eighth grade students in the English and Science subject areas who demonstrate advanced skills, comprehension and interest." />
                    <ContentText content="The Ovations Achievement Program classes cover more materials at an accelerated pace, with a more concentrated focus. Ovations Science students follow the same curriculum and standards as all other students, but also study advanced-level materials and work on independent short and long-term assignments." />
                    <ContentText content="The Ovations Achievement Program provides innovative and extended learning activities that require students to increase their use of critical thinking skills, including analysis, synthesis, and problem solving. Students are encouraged to dig deeper and engage in lively, collaborative classroom discussions." />
                
                    <ContentHeader title="How Does It Work?" />
                    <ContentText content="Your company's charitable giving becomes a low-cost gift when you redirect your state business taxes to the participating approved EITC program of your choice." />
                    <ContentList content={[
                        "A one-year commitment will earn you a state tax credit of 75% of your contribution. A business that agrees to provide the same amount for two consecutive tax years will earn a credit of 90%.",
                        "Tax credits may be applied against the tax liability of a business for the tax year in which the contribution was made.",
                        "The non-credited portion of the gift can be claimed as a charitable contribution for federal tax purposes.",
                        "Businesses may request up to $750,000 in tax credits per year."]} />
                    <ContentText content="Eligible entities include businesses subject to the following taxes:" />
                    <ContentList content={[
                        "Corporate Net Income Tax",
                        "Capital Stock/Foreign Franchise Tax",
                        "Bank Shares Tax",
                        "Title Insurance and Trust Company Shares Tax",
                        "Insurance Premiums Tax",
                        "Mutual Thrift Tax",
                        "Gross Receipts Tax",
                        "Tax under the Insurance Company Law of 1921",
                        "Personal Income Tax"]} />

                    <ContentHeader title="How Does a Company Apply?" />
                    <ContentText content="All applicants are required to submit applications electronically through www.newpa.com. The business application guide explains the process of applying. Businesses must apply specifically for Educational Improvement Organization (EIO) credits if they wish to support the AACMS' programs." />
                    <ContentSubHeader content="New Businesses May Apply Beginning July 1st" />
                    <ContentText content="EITC applications are approved on a first-come, first-served basis by date submitted. The Department of Community and Economic Development will send an approval letter to businesses awarded educational improvement tax credits. The business then has 60 days to send its philanthropic contribution to the Arts Academy Charter Middle School Foundation, Development Department, 1610 East Emmaus Avenue, Allentown, PA 18103." />
                    <ContentText content="The AACMS will issue a gift acknowledgment which the business must send to the Department of Community and Economic Development within 90 days of the original approval letter. After sharing this written acknowledgment with the department, the business will receive the amount of tax credits outlined in the original approval letter." />

                    <ContentHeader title="For More Information" />
                    <ContentText content="For specific information on how the Pennsylvania Educational Improvement Tax Credit (EITC) program can benefit your business, please contact your accountant or financial advisor. For additional information about the AACMS' EITC approved programs, please contact the AACMS." />
                </div>
            </div>
            <Footer />
        </div>
    );
}