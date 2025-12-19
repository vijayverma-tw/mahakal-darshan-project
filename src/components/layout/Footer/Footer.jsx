import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h4>ॐ त्र्यंबकं यजामहे सुगन्धिं पुष्टिवर्धनम् | उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात्</h4>
            <div className='footer-container'>
              <div className='location-div'>
                <p className='m-0'>Shri Mahakaleshwar Temple Management Committee, Ujjain</p>
              </div>
              <div className='row'>
                <div className='col-md-7'>
                  <div className='left-side'>
                    <img src="images/logo-footer.svg" alt="" />
                    <p className='m-0 pt-3 pb-3'>Mahakaleshwar Jyotirlinga is believed to free devotees from the fear of akaal mrityu. Lord Mahakal, the eternal protector, bestows blessings of longevity, strength, and liberation, ensuring peace and security in the devotee’s life.
                    </p>
                    <div className='social-icons'>
                        <span>Connect with us</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
