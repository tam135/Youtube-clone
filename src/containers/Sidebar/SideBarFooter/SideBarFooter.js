import React from 'react'
import './SideBarFooter.scss'

export default function SideBarFooter() {
    return (
      <>
        <div className="footer-block">
          <div>
            <span className="footer-links">About</span>
            <span className="footer-links">Press</span>
            <span className="footer-links">Copyright</span>
          </div>
          <div>
            <span className="footer-links">Contact us</span>
            <span className="footer-links">Creators</span>
          </div>
          <div>
            <span className="footer-links">Advertise Developers</span>
          </div>
        </div>

        <div className="footer-block">
          <div>
            <span className="footer-links">Terms</span>
            <span className="footer-links">Privacy</span>
            <span className="footer-links">Policy & Safety</span>
          </div>

          <div>
            <span className="footer-links">Test new features</span>
          </div>
        </div>

        <div className="footer-block">
          <div>@2019 Tam Phan</div>
        </div>
      </>
    );
}
