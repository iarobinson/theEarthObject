const theEarthObjectJS = {
  continents: {
    africa: {
      "wikipedia_link": "https://en.wikipedia.org/wiki/Africa"
    },
    antarctica: {
      "wikipedia_link": "https://en.wikipedia.org/wiki/Antarctica"
    },
    asia: {
      "wikipedia_link": "https://en.wikipedia.org/wiki/Asia"
    },
    europe: {
      "wikipedia_link": "https://en.wikipedia.org/wiki/Europe"
    },
    northAmerica: {
      "wikipedia_link": "https://en.wikipedia.org/wiki/North_America"
    },
    oceania: {
      "wikipedia_link": "https://en.wikipedia.org/wiki/Oceania"
    },
    southAmerica: {
      "wikipedia_link": "https://en.wikipedia.org/wiki/South_America"
    }
  },
  oceans: {
    arctic: {
      description: "",
      wikipedia_link: "https://wikipedia.org/wiki/Arctic_Ocean"
    },
    atlantic: {
      description: "",
      wikipedia_link: "https://wikipedia.org/wiki/Atlantic_Ocean"
    },
    pacific: {
      description: "",
      wikipedia_link: "https://wikipedia.org/wiki/Pacific_Ocean"
    },
    indian: {
      description: "",
      wikipedia_link: "https://wikipedia.org/wiki/Indian_Ocean"
    },
    southern: {
      description: "",
      wikipedia_link: "https://wikipedia.org/wiki/Southern_Ocean"
    }
  },
   countries: {
    oceania: {
      nationStates: {
	      "Australia": {
			  wikipedia_link: "https://en.wikipedia.org/wiki/Australia"
			  },
	      "Papua New Guinea": {
			  wikipedia_link: "https://en.wikipedia.org/wiki/Papua_New_Guinea"
			  },
	      "New Zealand": {
			  wikipedia_link: "https://en.wikipedia.org/wiki/New_Zealand"
			  },
	      "Fiji": {
			  wikipedia_link: "https://en.wikipedia.org/wiki/Fiji"
			  },
	      "Solomon Islands": {
			  wikipedia_link: "https://en.wikipedia.org/wiki/Solomon_Islands"
			  },
	      "Vanuatu": {
			  wikipedia_link: "https://en.wikipedia.org/wiki/Vanuatu"
			  },
	      "Samoa": {
			  wikipedia_link: "https://en.wikipedia.org/wiki/Samoa"
			  },
	      "Kiribati": {
			  wikipedia_link: "https://en.wikipedia.org/wiki/Kiribati"
			  },
	      "Federated States of Micronesia": {
			  wikipedia_link: "https://en.wikipedia.org/wiki/Federated_States_of_Micronesia"
			  },
	      "Tonga": {
			  wikipedia_link: "https://en.wikipedia.org/wiki/Tonga"
			  },
	      "Marshall Islands": {
			  wikipedia_link: "https://en.wikipedia.org/wiki/Marshall_Islands"
			  },
	      "Palau": {
			  wikipedia_link: "https://en.wikipedia.org/wiki/Palau"
			  },
	      "Tuvalu": {
			  wikipedia_link: "https://en.wikipedia.org/wiki/Tuvalu"
			  },
	      "Nauru": {
			  wikipedia_link: "https://en.wikipedia.org/wiki/Nauru"
			  }
      },
      dependentTerritories: {
	      "New Caledonia (France)": {
			  wikipedia_link: "https://en.wikipedia.org/wiki/New_Caledonia"
			  },
	      "French Polynesia (France)": {
			  wikipedia_link: "https://en.wikipedia.org/wiki/French_Polynesia"
			  },
	      "Guam (US)": {
			  wikipedia_link: "https://en.wikipedia.org/wiki/Guam"
			  },
	      "American Samoa (US)": {
			  wikipedia_link: "https://en.wikipedia.org/wiki/American_Samoa"
			  },
	      "Northern Mariana Islands (US)": {
			  wikipedia_link: "https://en.wikipedia.org/wiki/Northern_Mariana_Islands"
			  },
	      "Cook Islands (NZ)": {
			  wikipedia_link: "https://en.wikipedia.org/wiki/Cook_Islands"
			  },
	      "Wallis and Futuna (France)": {
			  wikipedia_link: "https://en.wikipedia.org/wiki/Wallis_and_Futuna"
			  },
	      "Norfolk Island (Australia)": {
			  wikipedia_link: "https://en.wikipedia.org/wiki/Norfolk_Island"
			  },
	      "Niue (NZ)": {
			  wikipedia_link: "https://en.wikipedia.org/wiki/Niue"
			  },
	      "Tokelau (NZ)": {
			  wikipedia_link: "https://en.wikipedia.org/wiki/Tokelau"
			  },
	      "Pitcairn Islands (UK)": {
			  wikipedia_link: "https://en.wikipedia.org/wiki/Pitcairn_Islands"
			  }
	   }
      }
   }
}

console.log(theEarthObjectJS.continents.africa.wikipedia_link)
