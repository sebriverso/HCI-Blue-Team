import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'
import { ContentBlock } from '../ContentPageElements/ContentBlock';
import Link from 'next/link';
import { ContentHeader } from '../ContentPageElements/ContentHeader';
import { ContentSubHeader } from '../ContentPageElements/ContentSubHeader';
import { ContentText } from '../ContentPageElements/ContentText';

const destinations = [
    { id: './admissionsProcess', title: 'Admission Process' },
    { id: './applyNow', title: 'Apply Online' },
    { id: './applyNow', title: 'Interview Info' },
    { id: './applyNow', title: 'Enrollment' },
    { id: './openHouses', title: 'Open Houses' },
    { id: './applyNow', title: 'Summer Programs' },
  ];

export default function ApplyNowMobile() {
    return (
        <div style={{display: 'flex-start', alignItems: 'flex-start',marginBottom: '80px'}}>
            <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
              <ContentBlock
                title="Apply Online"
                content="All future AACMS students must begin the enrollment process by completing and submitting a New Student Application. Applications should be submitted along with copies of each of the supporting documents listed below. AACMS schedules each applicant for a New Student Interview after receiving his or her application. "
              />
              <ContentHeader title="Application Process" />
              <ContentSubHeader content="How to Apply" />
              <ContentText content="We now accept applications online!  
                  Before you complete the application, you will need to create an account with our enrollment platform."
              />
              <ContentText content="You can use a single account to submit applications for multiple students. If your child is accepted to AACMS, you will use the same account to complete the enrollment process online."
              />
              <ContentText content="Please be sure to keep the contact information in your enrollment account up to date.  AACMS will use this information to contact you to schedule the applicant's New Student Interview and provide updates on the student's application and enrollment status."
              />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Link href="https://registration.powerschool.com/family/Login?ReturnUrl=http%3A%2F%2Fregistration.powerschool.com%2Ffamily%2Fdirectaction&AutoLogOut=False">
                  <button
                    className="apply-now-button"
                    style={{
                      fontSize: '20px',
                      fontFamily: 'League Spartan',
                      marginTop: '20px',
                      width: '200px',
                      fontWeight: 'bold',
                      padding: '8px 16px',
                      border: '',
                      borderRadius: '2px',
                      cursor: 'pointer',
                    }}
                  >
                    Create An Account
                  </button>
                </Link>
              </div>
              <ContentText content="We continue to offer paper applications for those who cannot complete the form online; you can pick up a copy from the AACMS Main Office during regular business hours."
              />
              <ContentSubHeader content="Application Deadlines" />
              <ContentText content="We strongly recommend submitting your child's online application as early as possible. Applying early ensures your child will receive an interview date promptly. New Student Interviews for the 2023-2024 academic year will be conducted from February - June. Students who apply over the summer may be waitlisted for an interview based on enrollment."
              />
              <ContentText content="Summer 2023 applicants will be contacted for interviews as space becomes available in their grade level and/or arts focus."
              />
              <ContentSubHeader content="Supporting Documentation" />
              <ContentText content="To complete enrollment, each student must submit the documentation listed below.  It is helpful to upload copies of these documents with your child's online application."
              />
              <p style={{ color: '#4434A6', fontSize: '24px', fontFamily: 'League Spartan', paddingTop: '15px', paddingLeft: '30px' }}>
                <ul style={{ listStyleType: 'circle', listStylePosition: 'inside' }}>
                  <li>Student’s Birth Certificate</li>
                  <li>Student’s Most Recent Report Card</li>
                  <li>Proof of Residency</li>
                </ul>
              </p>
              <p style={{ color: '#4434A6', fontSize: '24px', fontFamily: 'League Spartan', paddingTop: '15px' }}>
                Acceptable documentation displays the parent/guardian’s name on a mortgage bill, lease agreement, or utility bill. If a student resides at more than one location, proof of residency is required for each address.
              </p>
            </div>
        </div>
    );
  }