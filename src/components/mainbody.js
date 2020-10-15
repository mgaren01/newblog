import React from 'react';

export default function Body() {

    return (
        <>
            <container-fluid className='container1'>
                <div className='row mb-4'>
                    <div className='col-5 text-center'>
                        <div className="card mx-auto bg-secondary text-warning">
                            <div className="card-body">
                                <h4 className="card-title"><strong>Hail and Well Met!</strong></h4>
                                <p className="card-text">Thank you for joining me here, in this blog which I've built from scratch!  I am Mike, and let this be a repository,
                                and a representative in itself, of my progress through the Coding Bootcamp
                                @ Awesome Inc.

                                For more about me, please click the links in the top menu, or click this button
                                </p>
                                <div button className='btn btn-danger'>Yes, this Button</div>
                                <p>to go straight to my personal info page.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-7 text-center'>
                        <div className="card mx-auto bg-secondary text-warning">
                            <div className="card-body">
                                <h4 className="card-title"><strong></strong></h4>
                                <p className="card-text">
                                    Provided for your entertainment: one of my new favorite bands.  They come
                                    with my highest recommendation, and I can virtually guarantee you've never
                                    heard anything quite like them before!
                                </p>
                                <iframe width="500" height="300" src="https://www.youtube.com/embed/jM8dCGIm6yc" frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>

                            </div>
                        </div>
                    </div>
                </div>
            </container-fluid>
        </>
    )
}