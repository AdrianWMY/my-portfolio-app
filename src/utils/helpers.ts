export const scrollToSection = (sectionId: string, e:React.MouseEvent) => {
  e.preventDefault();
  
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
};
  
