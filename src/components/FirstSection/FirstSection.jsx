import React from 'react';
import '../FirstSection/style.css'
// import "./FirstSection.css";


function FirstSection() {
  return (
    <>
      <section className="first-hightlight-wrapper">
        <div className="container">
          {/* <div className="new-alert">New</div> */}

          <div className="title-wraper bold white">iPhone 16 Pro</div>
          <div className="discription bold ">Built for Apple Intelligence.</div>

          <div className="links-wrapper-s">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li className='order'>
                <a href="">Order</a>
              </li>
            </ul>
          </div>

          {/* <div className="ipod-caption row">
            <div className="col-sm-12 col-md-6 text-md-right">
              iPad Pro available starting 3.25
            </div>
            <div className="col-sm-12 col-md-6 text-md-left">
              Magic Keyboard coming in May
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default FirstSection