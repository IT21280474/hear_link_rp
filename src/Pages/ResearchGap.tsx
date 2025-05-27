import React from 'react'

function ResearchGap() {
    return (
        <section className='mt-2' id='researchgap'>
            <h1 style={{ marginLeft: '8%' }}>Research Gap</h1>
            <p style={{ marginLeft: '8%' }}>Following areas are the research gaps found in most of the recent researches.</p>
            <div className="achievements">
                <div className="work">
                    <i className="fas fa-search"></i>
                    <p className="work-heading">Identification & Classification</p>
                    <p className="work-text">The system includes four components: AI-based noise control, speech therapy improvement, environmental sound alerts, and accident detection. These are classified as auditory enhancement, therapeutic support, assistive alert, and safety systems, enhancing communication, awareness, and protection for cochlear implant users.</p>
                </div>
                <div className="work">
                    <i className="fas fa-chart-line"></i>
                    <p className="work-heading">Severity Assessment</p>
                    <p className="work-text">Cochlear implant users face severe challenges in noise handling, speech development, sound awareness, and emergency response. Without intelligent support, these issues can impact safety, communication, and quality of life, highlighting the need for an AI-powered mobile solution.</p>
                </div>
                <div className="work">
                    <i className="fas fa-comments"></i>
                    <p className="work-heading">Information Sharing</p>
                    <p className="work-text">The system enables real-time information sharing by alerting caregivers, therapists, or emergency contacts through notifications, improving support, monitoring, and safety for cochlear implant users in daily life and emergency situations.</p>
                </div>
            </div>
        </section>
    )
}

export default ResearchGap