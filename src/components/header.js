import React from 'react';

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <a className="navbar-brand text-light" href="#"><strong>Nav</strong></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        <ul className="text-center text-light list-inline">
        {
          props.pages.map((item, index) => {
            return (
              <li className="nav-item text-light list-inline-item">
                <a
                  onClick={() => props.setPage(index)}
                  className={"nav-link " + (props.currentPage === index ? 'active' : '')}
                >
                  {item}
                </a>
              </li>
            )
          })
        }
      </ul>
        </div>
      </div>
    </nav>
  )
}



{/* <nav className="navbar navbar-dark bg-dark">
      <ul className="text-center">
        {
          props.pages.map((item, index) => {
            return (
              <li className="nav-item">
                <a
                  onClick={() => props.setPage(index)}
                  className={"nav-link " + (props.currentPage === index ? 'active' : '')}
                >
                  {item}
                </a>
              </li>
            )
          })
        }
      </ul>
    </nav> */}