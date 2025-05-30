import React from 'react'

function Downloads() {

    const documents = [
        {
            name: 'Topic Assessment',
            submittionDate: '2025-05-26',
            grouporindi: 'Group',
            link: 'https://drive.google.com/file/d/1c817z-BUW85aq9TQVxm-ZTbKc65fOX4v/view?usp=drive_link'
            
        },
        // {
        //     name: 'Project Charter',
        //     submittionDate: '2025-05-26',
        //     grouporindi: 'Group',
        //     link: ''
        // },
        {
            name: 'Project Proposal',
            submittionDate: '2025-05-26',
            grouporindi: 'Individual',
            link: 'https://drive.google.com/drive/folders/1TQvcpCMv9eX0Qj0GBJMqU1hSkpGa7GGy?usp=drive_link'
        },
        // {
        //     name: 'Status Documents I',
        //     submittionDate: '2023-09-28',
        //     grouporindi: 'Individual',
        //     link: ''
        // },
        // {
        //     name: 'Status Documents II',
        //     submittionDate: '2023-09-28',
        //     grouporindi: 'Individual',
        //     link: ''
            
        // },
        {
            name: 'Research Paper',
            submittionDate: '2025-05-26',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/1TY-_czHUbKPY6DG-7-XiJOF-Fsj3ZIgY?usp=drive_link'
        },
        {
            name: 'Final Report',
            submittionDate: '2025-05-26',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/1WvJ5QiNUVkrrWUON5sZjq0Q2xsEq50of?usp=drive_link'
        },
        {
            name: 'Poster',
            submittionDate: '2025-05-26',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/1Xyl1X7_JSUv5wT-Op2iE0SE6H3SYk_Kv?usp=drive_link'
        }
    ]

    const presentations = [
        {
            name: 'Project Proposal',
            submittionDate: '2025-05-26',
            grouporindi: 'Group',
            link: 'https://drive.google.com/file/d/1a0BrN5tPgq8oqKp2Q40Hb_p8V0Yd5xM3/view?usp=drive_link'
        },
        {
            name: 'Progress Presentation I',
            submittionDate: '2025-05-26',
            grouporindi: 'Group',
            link: 'https://drive.google.com/file/d/1H5-FL35hw5tIGDRRNiWoAfZ3wB1Rg_kO/view?usp=drive_link'
        },
        {
            name: 'Progress Presentation II',
            submittionDate: '2025-05-26',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/1i5OA-gHQiwHQUSBgmr0NBwvkgfWq0clx'
        },
        {
            name: 'Final Presentation',
            submittionDate: '2025-05-26',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/1oXOGAqGkTPD12RH3gHowz8U-WzgiFZPG?usp=drive_link'
        }
    ]

    return (
        <section className='mt-5 meetteam' style={{ backgroundColor: '#dff5eb', padding: '30px' }} id='Documents'>
            <h1 style={{ marginLeft: '8%' }} className='mb-5'>Downloads</h1>

            <h4 style={{ marginLeft: '10%' }}>Documents</h4>
            <p style={{ marginLeft: '10%' }}>Please find all documents related to this project below.</p>
            <div className=" mt-4" style={{ marginInlineStart: '14%', marginInlineEnd: '14%' }}>
                <div className="row">
                    {documents.map((document) => (
                        <div className="col-xs-12 col-sm-3 mb-5">
                            <div className="card carddowndolad d-flex flex-column h-100">
                                <div className="card-content" style={{ height: '150px' }}>
                                    <h5 className=" mb-3"> <i className="fas fa-file-alt me-2 docicon"></i> {document?.name}</h5>
                                    <p style={{ fontSize: '14px', color: "gray" }}>
                                        Submitted on {document?.submittionDate}
                                    </p>

                                </div>
                                <div className="card-read-more">
                                    <p style={{ fontSize: '15px', color: 'black', textDecoration: 'none', fontWeight: '500' }} className="btn btn-link btn-block ms-2">
                                        {document?.grouporindi}
                                    </p>
                                    <p style={{ fontSize: '15px', color: 'green', float: 'right', textDecoration: 'none' }} className="btn btn-link btn-block" onClick={() => { window.open(`${document?.link}`) }}>
                                        <i className="fas fa-download me-1"></i> Download
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <h4 style={{ marginLeft: '10%' }} id='Presentations'>Presentations</h4>
            <p style={{ marginLeft: '10%' }}>Please find all presentations related this project below.</p>
            <div className=" mt-4" style={{ marginInlineStart: '14%', marginInlineEnd: '14%' }}>
                <div className="row">
                    {presentations.map((presentation) => (
                        <div className="col-xs-12 col-sm-3 mb-5">
                            <div className="card carddowndolad d-flex flex-column h-100">
                                <div className="card-content" style={{ height: '150px' }}>
                                    <h5 className=" mb-3"> <i className="fas fa-file-alt me-2 docicon"></i> {presentation?.name}</h5>
                                    <p style={{ fontSize: '14px', color: "gray" }}>
                                        Submitted on {presentation?.submittionDate}
                                    </p>

                                </div>
                                <div className="card-read-more">
                                    <p style={{ fontSize: '15px', color: 'black', textDecoration: 'none', fontWeight: '500' }} className="btn btn-link btn-block ms-2">
                                        {presentation?.grouporindi}
                                    </p>
                                    <p style={{ fontSize: '15px', color: 'green', float: 'right', textDecoration: 'none' }} className="btn btn-link btn-block" onClick={() => { window.open(`${presentation?.link}`) }}>
                                        <i className="fas fa-download me-1"></i> Download
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Downloads