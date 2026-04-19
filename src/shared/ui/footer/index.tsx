import './footer.css';

export function Footer() {
  const contactLinks = [
    { label: 'INSTAGRAM', href: 'https://www.instagram.com/r3eign?igsh=em82MXh5a3J1ZDdm' },
    { label: 'TIKTOK', href: 'https://www.tiktok.com/@_r3ign._?_' },
    { label: 'FACEBOOK', href: 'https://www.facebook.com/r3iign' },
    { label: '+374 77-585-583', href: 'tel:+37477585583' },
  ];

  return (
    <footer className="footerContainer">
      <div className="footerContent">
        <div className="footerContact">
          <div className="footerTitle">CONNECT</div>
          <nav className="contactLinks">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="footerLink"
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footerBranding">
          <div className="brandNameFooter">R3IGNE</div>
          <div className="copyright">© {new Date().getFullYear()} R3IGNE</div>
        </div>

        <div className="footerAgency">
          WEBSITE MADE BY{' '}
          <a
            href="https://www.neolabsagency.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="agencyLink"
          >
            NEO LABS AGENCY
          </a>
        </div>
      </div>
    </footer>
  );
}
