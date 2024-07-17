export const redirectToWhatsapp = () => {
  const phone = "+237682988891";
  const message = "Bonjour Monsieur, \n Je suis intéressé par les services que vous proposez.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;

  window.location.href = whatsappUrl;
};
