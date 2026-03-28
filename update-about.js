const fs = require('fs');
let code = fs.readFileSync('src/components/about/About.jsx', 'utf8');
code = code.replace(/<p>[\s\S]*?<\/p>/, `<ScrollReveal
          baseOpacity={0.1}
          enableBlur={true}
          baseRotation={3}
          blurStrength={4}
          containerClassName="about-reveal-container"
          textClassName="about-desc-text"
        >
          Nebula is a forward-thinking software company dedicated to transforming ideas into digital reality. Our mission is to empower businesses and individuals through innovative, high-quality, and user-centric technology solutions. We believe in pushing creative boundaries, delivering exceptional results, and building lasting partnerships with our clients.
        </ScrollReveal>`);
fs.writeFileSync('src/components/about/About.jsx', code);
