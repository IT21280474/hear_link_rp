import React from 'react'

function ResearchProblem() {
    return (
        <section className='mt-1' id="Problem">
            <h1 style={{ marginLeft: '8%' }}>Research Problem & Solution</h1>
            <br /><br />
            <div className="container-fluid " id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h5 style={{ fontWeight: '700' }} className='ms-3'>Proposed Problem</h5>
                            <h5 style={{ fontWeight: '700', color: 'green' }} className='ms-3'>Current Challenges Faced</h5>
                            <p style={{ textAlign: 'justify' }} className='ms-3 mt-4'>
                                Cochlear implant users face several challenges that affect their hearing experience. Traditional mapping methods are manual and time-consuming, requiring multiple clinic visits. These methods do not adapt to changing environments or individual hearing differences. Users struggle with background noise, lack real-time adjustments, and receive limited feedback integration. There is also no built-in system for environmental alerts or user community support. These issues reduce satisfaction and limit the effectiveness of current CI systems.
                                <br /><br />
                            <h5 style={{ fontWeight: '700', color: 'green' }} className='ms-3'>How Technology Can Help</h5>
                                
                                Technology can greatly enhance the cochlear implant experience by enabling real-time adjustments through AI and machine learning. A mobile application can collect and analyze user data to automatically optimize CI settings based on the environment and personal hearing patterns. Noise masking algorithms can improve speech clarity, while environmental sound alerts can enhance user safety. Additionally, built-in accident detection using motion sensors like accelerometers and gyroscopes can identify sudden falls or impacts and send alerts, providing an extra layer of protection for users. Cloud-based systems and user-friendly interfaces also support feedback, updates, and community engagement, leading to better satisfaction and overall hearing outcomes.


                            </p>
                        </div>
                        <div className="col-lg-6 pb-4 pb-lg-0">
                            <iframe style={{ marginLeft: '5%' }} width="560" height="315" src="https://www.youtube.com/embed/ZJX6as69Fbs" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                        </div>
                    </div>
                    <h5 style={{ fontWeight: '700' }} className='ms-3 mt-3'>Proposed Solution</h5>
                    <p style={{ textAlign: 'justify' }} className='ms-3 mt-4'>

                        The proposed solution is an AI-powered mobile application designed to optimize and enhance the experience of cochlear implant users. This system will collect real-time auditory data and user feedback to automatically adjust CI settings using machine learning algorithms. It will feature intelligent noise masking, environmental sound alerts, and personalized sound profiles based on individual hearing patterns.

The mobile app will also include an accident detection module using built-in accelerometers and gyroscopes to identify falls or impacts and trigger emergency alerts. A user-friendly interface will allow users to monitor performance, customize settings, and connect with a supportive community for shared experiences and guidance.

This integrated system aims to improve hearing quality, safety, and overall satisfaction for CI users through automation, personalization, and real-time responsiveness.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ResearchProblem