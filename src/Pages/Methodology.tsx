import React from 'react'

function Methodology() {
    return (
        <section className="mt-5" id="Methodology">
  <h1 className="text-center mb-5" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Methodology</h1>
  <div className="container-fluid py-5" id="about">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 pb-4 pb-lg-0 d-flex justify-content-center">
          <img
            className="img-fluid rounded shadow"
            style={{ maxHeight: '500px', maxWidth: '100%', objectFit: 'contain', marginRight:'100px'}}
            src="/hear.avif"
            alt="Elephant illustration for Smart Farm Security System"
          />
        </div>
        <div className="col-lg-6">
          <div className="methodology-content">
            <p className="lead text-justify mb-4">
              The proposed AI-Powered Mobile Application for Cochlear Implant Users System consists of four main components:
            </p>
            <ol className="list-group list-group-numbered mb-4" style={{ fontWeight: 600 }}>
              <li className="list-group-item border-0">AI-Powered Noise Masking System</li>
              <li className="list-group-item border-0">AI-Powered Speech Therapy Improvement System</li>
              <li className="list-group-item border-0">Environmental Sound Alerts System</li>
              <li className="list-group-item border-0">Accident Detection System</li>
            </ol>

            <div className="component-section mb-4">
              <h4 className="fw-bold">1. AI-Powered Noise Masking System</h4>
              <p className="text-justify">
                Collect audio data from various environments (e.g., road, classroom, home). Use supervised machine learning to train noise classification models. Implement real-time noise detection and masking algorithms using AI to filter unwanted sounds and enhance speech clarity. Integrate the system into the mobile app with selectable noise modes.
              </p>
            </div>

            <div className="component-section mb-4">
              <h4 className="fw-bold">2. AI-Powered Speech Therapy Improvement System</h4>
              <p className="text-justify">
                Gather and label children's speech data. Train AI models to recognize and assess pronunciation accuracy. Design an interactive interface with visual cues (mouth movements, voice games) to guide therapy. Provide real-time feedback to users and store progress for continuous improvement.
              </p>
            </div>

            <div className="component-section mb-4">
              <h4 className="fw-bold">3. Environmental Sound Alerts System</h4>
              <p className="text-justify">
                Identify critical environmental sounds (e.g., alarms, sirens, doorbells). Train sound detection models to recognize these events from live microphone input. Implement real-time notification alerts through the mobile app to increase user awareness and safety in their surroundings.
              </p>
            </div>

            <div className="component-section">
              <h4 className="fw-bold">4. Accident Detection System</h4>
              <p className="text-justify">
                Use accelerometers and gyroscopes embedded in the mobile device or wearable to capture motion data. Train models to detect unusual movement patterns like falls or impacts. When detected, trigger emergency alerts or notifications to caregivers via the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default Methodology