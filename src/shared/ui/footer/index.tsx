import './footer.css';

export function Footer() {
  const sections = [
    {
      title: 'THOM BROWNE',
      links: ['ABOUT', 'JOURNAL', 'STORES', 'EYEWEAR LOCATIONS', 'CAREERS'],
    },
    {
      title: 'CLIENT CARE',
      links: [
        'SHIPPING',
        'TRACK AN ORDER',
        'RETURNS',
        'PRODUCT MAINTENANCE',
        'ACCOUNT',
        'FREQUENTLY ASKED QUESTIONS',
        'CONTACT US',
      ],
    },
    {
      title: 'EXCLUSIVE SERVICES',
      links: ['MADE TO MEASURE', 'TAILORING', 'EMBOSSING', 'GIFTING'],
    },
    {
      title: 'LEGAL',
      links: [
        'TERMS & CONDITIONS',
        'PRIVACY POLICY',
        'DATA PROTECTION NON-MR DATA',
        'ACCESSIBILITY STATEMENT',
        'COOKIE POLICY',
        'COOKIE PREFERENCES',
      ],
    },
  ];

  return (
    <footer className="footerContainer">
      {/*<div className="footerTop">*/}
      {/*  <div className="footerSection">*/}
      {/*    <label className="footerLabel">*/}
      {/*      SIGN UP TO RECEIVE EARLY ACCESS TO THOM BROWNE COLLECTIONS AND EXCLUSIVE EVENTS.*/}
      {/*    </label>*/}
      {/*    <div className="footerInputBox">*/}
      {/*      <span>SUBSCRIBE</span>*/}
      {/*      <svg className="arrowIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">*/}
      {/*        <polyline points="9 18 15 12 9 6"></polyline>*/}
      {/*      </svg>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className="footerSection">*/}
      {/*    <label className="footerLabel">SHIPPING TO</label>*/}
      {/*    <div className="footerInputBox">*/}
      {/*      <span>UNITED STATES ($)</span>*/}
      {/*      <svg className="arrowIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">*/}
      {/*        <polyline points="9 18 15 12 9 6"></polyline>*/}
      {/*      </svg>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div className="footerMain">
        {sections.map((section) => (
          <div key={section.title} className="footerColumn">
            <div className="columnTitle">{section.title}</div>
            <nav className="columnLinks">
              {section.links.map((link) => (
                <a key={link} href="#" className="footerLink">
                  {link}
                </a>
              ))}
            </nav>
          </div>
        ))}
      </div>

      <div className="footerBottom">
        <a href="#" className="socialLink">
          SOCIAL
          <svg
            className="arrowIcon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </a>
        <div className="copyright">© ${new Date().getFullYear()} R3IGNE</div>
      </div>
    </footer>
  );
}
