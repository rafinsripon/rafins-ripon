import React from 'react';
import Card from './Card';
import Sdata from '../data/Sdata';



function Services() {
  return (
    <>
      <section className="card_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-55">
              <div className="common_title">
                <div className="border_left"></div>
                <span>Services i offer to my clients</span>
                <h2>My Services</h2>
              </div>
            </div>
            <div className="col-md-6 mb-55">
              <div className="common_title">
                <div className="border_right"></div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod modi nemo labore quasi laboriosam et. sit adipisicing elit </p>
              </div>
            </div>
          </div>
          <div className="row">
            {
              Sdata.map((val, ind) => {
                return <Card key={ind}
                  icon={val.icon}
                  stitile={val.stitile}
                  pera={val.pera}
                />
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Services;