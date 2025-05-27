import React from 'react'

function LiteratureSurvey() {
    return (
        <section className='mt-5' id='Literature'>
            <h1 style={{ marginLeft: '8%' }}>Literature Survey</h1>
            <div className="container-fluid py-5" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <p style={{ textAlign: 'justify' }} className='me-5'>
                                AI-based noise control systems have evolved to enhance auditory experiences for cochlear implant users by intelligently identifying and suppressing background noise. Traditional noise reduction techniques often struggle in dynamic environments, whereas modern AI-based methods use deep learning models such as Convolutional Neural Networks (CNNs) and Recurrent Neural Networks (RNNs) to distinguish between speech and noise patterns [1]. These systems adaptively filter environmental sounds in real-time, providing cleaner audio input to the CI user.
Research has shown that Denoising Autoencoders (DAEs) and Transformer-based architectures can achieve superior performance in non-stationary noise conditions compared to classical signal processing approaches [2]. Additionally, manual override or user-adjustable settings allow users to adapt the system to personal preferences and real-world environments, improving usability and satisfaction.

                                <br /><br />
                                AI-powered speech therapy applications are increasingly used to assist cochlear implant users in improving speech articulation, fluency, and comprehension. These systems utilize Automatic Speech Recognition (ASR) combined with feedback mechanisms to evaluate and guide user pronunciation in real time [3]. Machine learning models, particularly LSTM and hybrid CNN-LSTM networks, have been applied to identify mispronunciations and provide corrective suggestions.
Gamification and adaptive learning paths are frequently integrated to enhance motivation, especially for children [4]. These tools have been shown to reduce therapy costs, increase access, and allow for more frequent practice outside of clinical settings. However, personalization remains a challenge, especially in recognizing speech variations specific to CI users.

                                <br /><br />
                                Environmental sound recognition (ESR) systems offer safety and situational awareness for CI users by detecting critical non-speech sounds such as alarms, doorbells, sirens, and animal sounds. AI models trained on large-scale environmental audio datasets (e.g., AudioSet) are capable of classifying hundreds of sound types with high accuracy [5].
These systems use spectrogram-based feature extraction and deep CNNs or attention-based models to distinguish and alert users via haptic or visual cues [6]. ESR systems are especially important for users with limited residual hearing, as they bridge the sensory gap by providing real-time alerts in home, work, and public environments.
                            </p>   
                        </div>
                        <div className="col-lg-6">
                            <p style={{ textAlign: 'justify' }} className='me-5'>
                                AI-driven accident detection systems analyze audio cues such as sudden impact sounds, glass breaking, or human screams to identify and alert emergency contacts in real time. These systems use multi-modal sensing (audio, motion, GPS) combined with machine learning classifiers to distinguish true emergencies from false alarms [7].
Recent studies employ supervised learning models such as Support Vector Machines (SVMs) and Random Forests, as well as deep learning architectures like CNNs for spectrogram-based audio classification [8]. Integration into mobile platforms enables real-time processing and location tracking, which is critical for fast emergency response. For cochlear implant users, such systems add a vital safety layer in both indoor and outdoor settings.

                                <br /><br />
                                In summary, the integration of artificial intelligence into mobile applications has opened new possibilities for enhancing the quality of life for cochlear implant users through four key components: AI-based manual noise control, speech therapy improvement, environmental sound alert, and accident detection systems. AI-powered noise control systems utilize deep learning models to distinguish speech from background noise in real time, providing a clearer and more personalized auditory experience. Speech therapy systems leverage machine learning and real-time feedback to assist users—especially children—in improving pronunciation and language skills through engaging and adaptive learning methods. Environmental sound alert systems use AI to recognize critical non-speech sounds such as alarms or sirens, converting them into visual or haptic notifications to enhance situational awareness and safety. Meanwhile, accident detection systems combine audio analysis, motion sensors, and GPS to identify emergencies like falls or collisions, alerting caregivers or emergency contacts instantly. Together, these AI-driven components form a comprehensive, intelligent solution aimed at addressing communication, safety, and accessibility challenges faced by cochlear implant users.

                                <br /><br />
                                <span style={{ fontSize: '12px' }}>References
                                    <br />
                                    [1] Y. Xu, J. Du, L. R. Dai, and C. H. Lee, "A Regression Approach to Speech Enhancement Based on Deep Neural Networks," IEEE/ACM Transactions on Audio, Speech, and Language Processing, vol. 23, no. 1, pp. 7–19, 2015.
                                    <br />
                                    [2] K. Tan and D. Wang, "A Convolutional Recurrent Neural Network for Real-Time Speech Enhancement," in Proceedings of Interspeech, pp. 3229–3233, 2018.
                                    <br />
                                    [3] T. Alzahrani, M. Hossain, and N. M. Raj, "AI-Driven Pronunciation Analysis for Children with Cochlear Implants," Computers in Biology and Medicine, vol. 138, p. 104881, 2021.
                                    <br />
                                    [4] A. V. Singh, S. Sharma, and K. Rathi, "Gamified Speech Therapy Application for Children with Hearing Impairment," Health Informatics Journal, vol. 27, no. 3, pp. 1–13, 2021.
                                    <br />
                                    [5] J. F. Gemmeke et al., "Audio Set: An Ontology and Human-Labeled Dataset for Audio Events," in Proc. IEEE ICASSP, pp. 776–780, 2017.
                                    <br />
                                    [6] B. Lafay et al., "Sound Event Recognition in Real Life Audio: Dataset, Challenges and Baseline," in Proc. IEEE AASP Challenge, 2015.
                                    <br />
                                    [7] M. Alharbi and M. Sanderson, "Real-Time Fall and Accident Detection Using Audio Analysis on Smartphones," Sensors, vol. 21, no. 4, pp. 1155, 2021.
                                    <br />
                                    [8] S. Choi, J. Lee, and H. Kim, "End-to-End Audio-Based Emergency Event Detection Using Deep Learning for Smart Homes," IEEE Access, vol. 8, pp. 134227–134239, 2020.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LiteratureSurvey