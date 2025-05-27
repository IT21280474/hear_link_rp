import React from 'react'

function ResearchObjectives() {
    return (
        <section className='mt-5 objectives ' id="Objectives">
            <h1 style={{ marginLeft: '8%' }}>Research Objectives</h1>
            <div className="mt-5" style={{ marginLeft: '15%', marginRight: '15%' }}>
                <div className="container mt-5">

                    <div className="row align-items-center  d-flex">
                        <div className="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
                            <div className="circle font-weight-bold">1</div>
                        </div>
                        <div className="col-6">
                            <h5>  AI-Powered Noise Masking System</h5>
                            <p style={{ textAlign: 'justify' }}>Create adaptive algorithms that filter out unwanted background noise and enhance speech clarity. This system will offer different modes like classroom, road, home, and library, ensuring a clear listening experience in various environments.</p>
                        </div>
                    </div>

                    <div className="row timeline">
                        <div className="col-2">
                            <div className="corner top-right"></div>
                        </div>
                        <div className="col-8">
                            <hr />
                        </div>
                        <div className="col-2">
                            <div className="corner left-bottom"></div>
                        </div>
                    </div>

                    <div className="row align-items-center justify-content-end  d-flex">
                        <div className="col-6 text-right">
                            <h5> AI-Powered Speech Therapy Improvement System</h5>
                            <p style={{ textAlign: 'justify' }}>Design an interactive system that helps users, especially children, improve their speech using AI-based pronunciation recognition, voice games, and visual guidance on mouth movements. This supports consistent speech training at home. </p>
                        </div>
                        <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                            <div className="circle font-weight-bold">2</div>
                        </div>
                    </div>

                    <div className="row timeline">
                        <div className="col-2">
                            <div className="corner right-bottom"></div>
                        </div>
                        <div className="col-8">
                            <hr />
                        </div>
                        <div className="col-2">
                            <div className="corner top-left"></div>
                        </div>
                    </div>

                    <div className="row align-items-center  d-flex">
                        <div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
                            <div className="circle font-weight-bold">3</div>
                        </div>
                        <div className="col-6">
                            <h5>Implement Environmental Sound Alerts System</h5>
                            <p style={{ textAlign: 'justify' }}>Integrate sound detection technology into the app to identify important environmental sounds like alarms, doorbells, or approaching vehicles, and instantly notify the user to improve safety and awareness.</p>
                        </div>
                    </div>

                    <div className="row timeline">
                        <div className="col-2">
                            <div className="corner top-right"></div>
                        </div>
                        <div className="col-8">
                            <hr />
                        </div>
                        <div className="col-2">
                            <div className="corner left-bottom"></div>
                        </div>
                    </div>

                    <div className="row align-items-center justify-content-end  d-flex">
                        <div className="col-6 text-right">
                            <h5>Accident Detection System</h5>
                            <p style={{ textAlign: 'justify' }}>Use motion sensors like accelerometers and gyroscopes to detect falls or sudden impacts. The system will generate real-time alerts, adding an extra layer of physical safety for users, particularly children and elderly individuals.
                            </p>
                        </div>
                        <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                            <div className="circle font-weight-bold">4</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ResearchObjectives