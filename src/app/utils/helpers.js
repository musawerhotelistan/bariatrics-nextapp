export const handleScroll = (e) => {
    const target = document.querySelector(e);
      if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  export const handleClickConsul = () => {  
    const message = encodeURIComponent("Hello, I would like to know about the services and prices offered for Dental Treatments in Turkey.");
    const phoneNumber = "905496123295";
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank'); // Opens the link in a new tab
}

export function capitalizeFirstLetter(string) {
  if (!string) return ''; // Handle empty strings
  return string.toLocaleUpperCase();
}