import React from 'react';

function LowerFooter() {
  return (
    <div>
      <div className='lower-footer'>
        <div className='pt-5 '>
          <span className='upper-text'>FOOTER</span>
          <div className='pt-4'>
            <span className='text-secondary fw-medium pt-5'>Complete your style with awesome clothes from us.</span>
          </div>
          <div className='main-icon'>
            <div className='icon-div'>
              <span><i className="fa-brands fa-facebook"></i></span>
              <span><i className="fa-brands fa-instagram"></i></span>
              <span><i className="fa-brands fa-twitter"></i></span>
              <span><i className="fa-brands fa-linkedin-in"></i></span>
            </div>
          </div>
        </div>
        <div className='footer-right-contain text-secondary'>
          <div className=''>
            <li className='text-white'>Company</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Support</li>
            <li>Careers</li>
          </div>
          <div className=''>
            <li className='text-white'>Quick Link</li>
            <li>Share Location</li>
            <li>Orders Tracking</li>
            <li>Size Guide</li>
            <li>FAQs</li>
          </div>
          <div>
            <li className='text-white'>Legal</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LowerFooter;
