import Image from 'next/image';
import { Inter } from 'next/font/google';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import  Header  from './Components/header';
import Footer from './Components/footer';
import  ContentBlock  from './Components/ContentPageElements/ContentBlock';
import  SideMenu  from './Components/ContentPageElements/SideMenu';
import ApplyNowMobile from './Components/MobileContentPage/applyNowMobile';
import MobileBottomNav from './Components/MobileHomePage/MobileFooter';
import  MobileHeader  from './Components/MobileHomePage/MobileHeader';
import  ContentHeader  from './Components/ContentPageElements/ContentHeader';
import  ContentSubHeader  from './Components/ContentPageElements/ContentSubHeader';
import  ContentText  from './Components/ContentPageElements/ContentText';
import  Accordion  from './Components/ContentPageElements/ContentAccordion';
import ContentList from './Components/ContentPageElements/ContentList';


const destinations = [
  { id: './programOverview', title: 'Program Overview' },
  { id: './arts', title: 'Arts' },
  { id: './ovationAcademics', title: 'Ovation Accelerated Academics' },
  { id: './test', title: 'PSSA & Keystone Testing' },
  { id: './test', title: 'Education Support Service' },
  { id: './test', title: 'Special Education' },
];

export default function Arts() {
  const [isMobile, setIsMobile] = useState(false);
  const danceSectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.outerWidth < 600);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (className: string) => {
    const targetSection = document.querySelector(`.${className}`) as HTMLElement | null;
    if (targetSection) {
      targetSection.style.paddingTop = '140px';
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {!isMobile ? (
        <>
          <Header text="My Website" />
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <SideMenu title='Curriculum' destinations={destinations} />
  

            {/* Arts Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'stretch' }}>
              <ContentHeader title="Artistic Disciplines" />
              <ContentText  content="AACMS offers instruction in seven artistic disciplines, with classes designed and led by passionate teachers who are also experienced performers.  Through consistent instruction and practice, our students develop the fundamental skills they need to grow and flourish as artists regardless of their area of interest." fSize='20px'/>

              <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'center' }}>

                  {/* Column 1 */}
                  <div style={{ display: 'flex', flexDirection: 'column', padding: '10px', alignSelf: 'stretch' }}>
                    
                    <button className="apply-now-button" style={{ fontSize: '20px', fontFamily: 'League Spartan', width: '200px', fontWeight: 'bold', padding: '8px 16px', border: '', borderRadius: '2px', cursor: 'pointer' }}
                      onClick={() => scrollToSection('danceSection')}>
                        Dance
                    </button>
                    
                    
                    <button className="apply-now-button" style={{ fontSize: '20px', fontFamily: 'League Spartan', marginTop: '20px', width: '200px', fontWeight: 'bold', padding: '8px 16px', border: '', borderRadius: '2px', cursor: 'pointer' }}
                      onClick={() => scrollToSection('instrumSection')}>
                        Instrumental Music
                    </button>
                  </div>

                  {/* Column 2 */}
                  <div style={{ display: 'flex', flexDirection: 'column', padding: '10px', alignSelf: 'stretch' }}>
                    <button className="apply-now-button" style={{ fontSize: '20px', fontFamily: 'League Spartan', width: '200px', fontWeight: 'bold', padding: '8px 16px', border: '', borderRadius: '2px', cursor: 'pointer' }}
                      onClick={() => scrollToSection('litArtsSection')}>
                        Literary Arts
                    </button>
                    
                    
                    <button className="apply-now-button" style={{ fontSize: '20px', fontFamily: 'League Spartan', marginTop: '20px', width: '200px', fontWeight: 'bold', padding: '8px 16px', border: '', borderRadius: '2px', cursor: 'pointer' }}
                      onClick={() => scrollToSection('theaterSection')}>
                        Theater
                    </button>
                    
                    
                    <button title='Not Currently Available' style={{ background: '#B0B0B0', color: 'white', fontSize: '20px', fontFamily: 'League Spartan', marginTop: '20px', width: '200px', fontWeight: 'bold', padding: '8px 16px', border: '', borderRadius: '2px', cursor: 'pointer' }} disabled
                      onClick={() => scrollToSection('skatingSection')}>
                        Figure Skating
                    </button>
                    
                  
                  </div>

                  {/* Column 3 */}
                  <div style={{ display: 'flex', flexDirection: 'column', padding: '10px', alignSelf: 'stretch' }}>
                    <button className="apply-now-button" style={{ fontSize: '20px', fontFamily: 'League Spartan', width: '200px', fontWeight: 'bold', padding: '8px 16px', border: '', borderRadius: '2px', cursor: 'pointer' }}
                      onClick={() => scrollToSection('visArtsSection')}>
                        Visual Arts
                    </button>
                    <button className="apply-now-button" style={{ fontSize: '20px', fontFamily: 'League Spartan', marginTop: '20px', width: '200px', fontWeight: 'bold', padding: '8px 16px', border: '', borderRadius: '2px', cursor: 'pointer' }}
                      onClick={() => scrollToSection('vocalSection')}>
                        Vocal Music
                    </button>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'stretch' }}>
                  <ContentHeader title="Selecting Arts Disciplines at AACMS"/>
                  <ContentText content="The First Arts Focus" isBold={true} />
                  <ContentList content={['The student’s greatest artistic interest and, ideally, a field with which he or she has some prior experience or instruction.', 'Students will actively participate in this art form more than any other subject.']}/>
                  <ContentText content="The Second Arts Focus" isBold={true} />
                  <ContentList content={['A field the student is comfortable studying throughout the school year.', 'Prior experience is not required, but genuine interest and a strong desire to learn are a must.']}/>
                  <ContentText content="The Third Arts Focus" isBold={true} />
                  <ContentList content={['Used as a back-up in case either of the student’s other selections are unavailable.','We suggest selecting an art form the student would be interested in studying for a full school year.']}/>
                
                </div>

                {/* Content Sections */}

                {/* Dance */}
                <div className='danceSection'> 
                  <ContentHeader title="Dance" />
                </div>
                  <ContentText fSize='20px' content="The highly qualified dance instructors of AACMS’s Dance Department provide their talented students with a variety of challenging dance technique and history classes, meaningful performance experiences, and an appropriate sense of health and attitude. Over their four years at AACMS, Dance students receive instruction in a variety of dance styles—including ballet, modern, jazz, contemporary, tap, and musical theatre—while also studying strength and conditioning, improvisation, dance composition, dance in world cultures, and dance history."/>
          
                {/* Literary Arts */}
                <div className='litArtsSection' style={{ display: 'flex', flexDirection: 'column', alignSelf: 'stretch' }}>
                  <ContentHeader title="Literary Arts" />
                </div>
                  <ContentText fSize='20px' content="Our new Literary and Media Arts curriculum is divided into two broad areas of instruction: Journalism and Creative Writing. This writing-intensive art form is offered as a primary arts focus for grades seven and eight, as a secondary art focus for grades six and seven, and to fifth graders as an arts workshop."/>
                  <div style={{ display: 'flex', flexDirection: 'row'}}>
                      <ContentSubHeader content="Journalism" />
                      <ContentSubHeader content="Creative Writing" />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row'}}>
                      <ContentText fSize='20px' content="Media Arts is the study of journalism divided into two main areas of instruction, newswriting and production. Students will develop an understanding of the function and role of the media, learn the basics of newswriting, editing and layout, and produce the school newspaper, Arts OutLoud, and the literary arts magazine, YouthInk using their InDesign and Photoshop instruction. Students will also write, produce, and perform in podcasts and videocasts." />
                      <ContentText fSize='20px' content="The creative writing courses will instruct and encourage students to write short works of fiction, drama, and poetry, as well as creative non-fiction narratives. Students will explore creativity, writings styles, and original voice through writing prompt activities and exemplar literature study. Students will build a supportive community of writers and write several works for their personal writing portfolios. Our student authors will present their writings in a school-wide literary magazine, through various online publication opportunities, and at live readings throughout the school year." />
                  </div>


                {/* Visual Arts */}
                <div className='visArtsSection'> 
                  <ContentHeader title="Visual Arts" />
                  <ContentText fSize='20px' content="Designed to integrate academic subjects into the arts classroom, the AACMS Visual Arts program develops our student artists’ technical skills in a variety of artistic media, while studying the cultural and historical context of artwork from the past and present. Extended class periods of 90 to 150 minutes give our teachers the flexibility to incorporate a wide array of projects into their instruction, and to give students the time necessary to explore their artistic passions."/>
                  <ContentText fSize='20px' content="Each grade level focuses on specific types of artwork, with an emphasis on the academic side of art education, as well as technical skill development. In addition to developing their technique, students learn to express their ideas through writing, peer critiques, and self-reflection. Learning appropriate art vocabulary, researching contemporary art and art history, and presenting their ideas in front of their peers are all important focuses of each year."/>


                </div>
                <div className='instrumSection'> 
                  <ContentHeader title="Instrumental Arts" />
                  <ContentText fSize='20px' content="The Instrumental Music Department offers a hands-on program for students interested in developing their skills playing a musical instrument. Students participate in ensemble rehearsals, small-group and solo performance activities and instruction in music fundamentals like theory and history. We currently offer instruction on the following instruments: flute, oboe, clarinet, saxophone, trumpet, French horn, trombone, baritone/euphonium, tuba, percussion (snare drum, mallet percussion & accessory percussion only), violin, viola, cello, string bass, guitar and piano/keyboard."/>
                  <ContentText fSize='20px' content="Our Instrumental Music program is ensemble-focused, meaning students spend a significant amount of class time rehearsing or working as a group. Within this structure, our teachers provide individualized instruction and feedback to students on a regular basis. This currently includes a 15-20 minute one-on-one check-in lessons about once per six-day cycle."/>
                  <ContentText fSize='20px' content="Each student should provide his or her own instrument for class rehearsals and at-home practice. If your child does not have an instrument, the AACMS Play It Forward instrumental donation and rental provem may be able to help. Please be sure to ask about the program when submitting your child’s application to AACMS. (Note: Students who play piano, string bass or percussion do not need to transport their instrument to school but must have a suitable instrument at home for daily practice.)"/>
                  <ContentText fSize='20px' content="Ensemble performance is a key part of the program, and students are expected to participate in all assigned concerts and performance events."/>


                </div>
                <div className='theaterSection'> 
                  <ContentHeader title="Theater" />
                  <ContentText fSize='20px' content="The Theater Department at AACMS provides students with a blend of rich, engaging and thought-provoking learning activities designed to develop their skills in communication—reading, writing, speaking and listening—as well as critical thinking, and storytelling. The curriculum continually reinforces students’ knowledge of basic theater terminology and healthy development of the actor’s voice while offering a range of experiences with theater in its various forms. The program places a heavy emphasis on the process rather than the product, allowing students a safe space to think creatively, use their imaginations, and express themselves."/>  
                  <ContentText fSize='20px' content="At every level, the AACMS Theatre curriculum reinforces the fundamentals of theater, including basic vocabulary, stage directors, movement for the actor, developing the actor’s voice, and improvisation."/>

                </div>
                <div className='vocalSection'> 
                  <ContentHeader title="Vocal Music" />
                  <ContentText fSize='20px' content="The Vocal Music Department educates the whole musician by developing students’ fundamental skills individually and within a performance ensemble. Each Vocal Music student participates in their grade level Vocal Ensemble and Music Fundamentals class. Students study basic skills of musicianship, including reading and understanding music notation, interpreting lyrics, sight-singing, and analyzing and critiquing performances. Vocal Ensemble classes emphasize the rehearsal and performance of a varied repertoire of music as an ensemble. Students also participate in class activities and projects that develop their individual vocal technique and performance style."/>   

                </div>
                <div className='skatingSection'> 
                  <ContentHeader title="Figure Skating" />
                  <ContentText fSize='25px' content="Figure Skating is currently unavailable at this time."/>
                  <ContentText fSize='20px' content="The Arts Academy Charter Middle School Figure Skating Department believes each of our student figure skaters deserves a rewarding learning experience regardless of their level of skating training. Beginners and accomplished skaters alike develop a passion for figure skating through high-quality instructional activities both on and off the ice."/>
                  <ContentText fSize='20px' content="Prior experience is not required for participation in our Figure Skating program. Our curriculum balances off-ice and on-ice instruction, including off-ice strength, conditioning, stretch, and jump classes. On-ice training is tailored to students according to skill level as outlined by United States Figure Skating, the national governing body for skating in the US."/>
                  <ContentText fSize='20px' content="Students travel from the AACMS campus to Steel Ice Center in Bethlehem for skating instruction each day. AACMS provides this transportation at no cost to students and families. Instruction is led by a team of experienced, professional figure skating coaches. We try to instill in our students an important life lesson: when you fall, get up and try again!"/>
                </div>
            </div>
          </div> 
          <Footer />
        </>
      ) : (
        <>
          <MobileHeader text={''} />
          <ApplyNowMobile />
          <MobileBottomNav />
        </>
      )}
    </div>
  );
}
