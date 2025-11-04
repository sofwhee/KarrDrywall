module.exports = {
    name: "Karr Brothers Drywall Inc",
    email: "info@karrbrothersdrywallinc.com",
    phoneForTel: "239 634-7195",
    phoneFormatted: "(239) 634 7195",
    address: {
        lineOne: "3550 Work Dr.",
        lineTwo: "Suite B9",
        city: "Fort Myers",
        state: "FL",
        zip: "33916",
        country: "US",
        mapLink: "https://maps.app.goo.gl/Vbd2bbiRs6EsihkaA",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
