$(function(){

	var model = {
		html: {
			HTMLheaderName : '<h1 id="name">%data%</h1>',
			HTMLheaderRole : '<small class="orange-text">%data%</small></h2><hr/>',

			HTMLcontactGeneric : '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>',
			HTMLmobile : '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>',
			HTMLemail : '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>',
			HTMLtwitter : '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>',
			HTMLgithub : '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>',
			HTMLblog : '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>',
			HTMLlocation : '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>',

			HTMLbioPic : '<img src="%data%" class="biopic">',
			HTMLwelcomeMsg : '<span class="welcome-message">%data%</span>',

			HTMLskillsStart : '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>',
			HTMLskills : '<li class="flex-item"><span class="white-text">%data%</span></li>',

			HTMLworkStart : '<div class="work-entry"></div>',
			HTMLworkEmployer : '<a target="_blank" <a href="#">%data%',
			HTMLworkTitle : ' - %data%</a>',
			HTMLworkDates : '<div class="date-text">%data%</div>',
			HTMLworkLocation : '<div class="location-text">%data%</div>',
			HTMLworkDescription : '<p><br>%data%</p>',

			HTMLprojectStart : '<div class="project-entry"></div>',
			HTMLprojectTitle : '<a target="_blank"<a href="#">%data%</a>',
			HTMLprojectDates : '<div class="date-text">%data%</div>',
			HTMLprojectDescription : '<p><br>%data%</p>',
			HTMLprojectImage : '<img src="%data%">',

			HTMLschoolStart : '<div class="education-entry"></div>',
			HTMLschoolName : '<a target="_blank"<a href="#">%data%',
			HTMLschoolDegree : ' -- %data%</a>',
			HTMLschoolDates : '<div class="date-text">%data%</div>',
			HTMLschoolLocation : '<div class="location-text">%data%</div>',
			HTMLschoolMajor : '<em><br>Major: %data%</em>',

			HTMLonlineStart : '<div class="online-entry"></div>',
			HTMLonlineClasses : '<h3>Online Classes</h3>',
			HTMLonlineTitle : '<a target="_blank" <a href="#">%data%',
			HTMLonlineSchool : ' - %data%</a>',
			HTMLonlineDates : '<div class="date-text">%data%</div>',
			HTMLonlineURL : '<br><a target="_blank" href="#">%data%</a>',

			internationalizeButton : '<button>Internationalize</button>',
			googleMap : '<div id="map"></div>',

			HTMLworkButton : "<div class='row'>\
			<button class='btn' role='button' id='workExperienceButton'>Hide Work Experience</button>\
			</div>",

			HTMLprojectButton : "<div class='row'>\
			<button class='btn' role='button' id='projectsButton'>Hide Projects</button>\
			</div>",

			HTMLeducationButton : "<div class='row'>\
			<button class='btn' role='button' id='educationButton'>Hide Education</button>\
			</div>",

			HTMLmapButton : "<div class='row'>\
			<button class='btn' role='button' id='mapDivButton'>Hide Map</button>\
			</div>",

			 // $(document).ready(function() {
			 //   $('button').click(function() {
			 //     var iName = inName(bio.name) || function(){};
			 //     $('#name').html(iName);
			 //   });
			 // })

			clickLocations : []

		},

		bio : {
			"name" : "Phillip Stafford",
			"role" : "Front-End Web Developer",
			"contacts" : {
				"mobile" : "917-721-6698",
				"email" : "phillip@philliprstafford.com",
				"github" : "grimal",
				"twitter" : "@frogitllc",
				"location" : "Stamford"
			},
			"welcomeMessage" : "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.",
			"skills" : [
			"HTML/CSS", "JavaScript", "Bootstrap", "Windows Server Administration"
			],
			"bioPic" : "http://i.imgur.com/m2TjgmC.jpg"
		},

		education: {
			"schools" : [
		 	    {
					"name" : "University of California Los Angeles",
					"location" : "Los Angeles, CA, US",
					"degree" : "BA",
					"majors" : "Theater Arts",
					"dates" : 1996,
					"url" : "http://www.ucla.edu/"
		        }
		  ],
		  "onlineCourses": [
		      {
		  			"title" : "Intro to HTML and CSS",
		  			"school" : "Udacity",
		  			"date" : 2015,
		  			"url" : "https://www.udacity.com/course/intro-to-html-and-css--ud304"
		      },
		      {
		  			"title" : "Responsive Web Design Fundamentals",
		  			"school" : "Udacity",
		  			"date" : 2015,
		  			"url" : "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
		      },
		      {
		  			"title" : "Responsive Images",
		  			"school" : "Udacity",
		  			"date" : 2015,
		  			"url" : "https://www.udacity.com/course/responsive-images--ud882"
		      },
		      {
		  			"title" : "JavaScript Basics",
		  			"school" : "Udacity",
		  			"date" : 2015,
		  			"url" : "https://www.udacity.com/course/javascript-basics--ud804"
		      },
		      {
		  			"title" : "Intro to JQuery",
		  			"school" : "Udacity",
		  			"date" : 2015,
		  			"url" : "https://www.udacity.com/course/intro-to-jquery--ud245"
		      },
		      {
		  			"title" : "How to Use Git and GitHub",
		  			"school" : "Udacity",
		  			"date" : 2015,
		  			"url" : "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
		      }
		   ]
		},
		work : {
			"jobs" : [
				{
					"employer" : "Frog IT LLC",
					"title" : "President",
					"location" : "New York, NY",
					"dates" : "2013-present",
					"description" : "Frog IT provides IT support to small businesses, individuals, and home users in both the New York City and Fairfield County areas of Connecticut",
					"url" : "http://www.frogitllc.com"
				},
				{
					"employer" : "Con Edison",
					"location" : "Rye, NY",
					"title" : "Systems Analyst",
					"dates" : "2012-2013",
					"description" : "Provided 2nd and 3rd level desktop support of workstations in multi-site Enterprise Active Directory environment. Network administration and technical support, including Dell desktops, IBM Laptops, Panasonic tough books with wireless LAN technology, plotters, and printers. Support of Con Edison and third party Applications.",
					"url" : "http://www.coned.com/"
				},
				{
					"employer" : "Planet Fitness",
					"location" : "Yonkers, NY",
					"title" : "Manager of Information Technology",
					"dates" : "2011-2012",
					"description" : "Provided all areas of technical support to franchisee’s corporate office and 30+ clubs spread around the greater NYC area.  Maintained 120+ workstations and several ESX VMs running Windows Server 2003 Enterprise.  Thoroughly analyzed and diagramed all levels of network topology to provide full recommendations to satiate PCI (Payment Card Industry Data Security Standard) and SOX (Sarbanes-Oxley) compliance ahead of looming corporate merger and IPO.  Successfully transitioned hosted email accounts to Office365 subscription-based services.  Utilized Symantec Ghost to minimize deployment phases.  Created VB and batch scripts for workstation backups as interim solution until recommended full domain environment implemented.",
					"url" : "http://www.planetfitness.com/gyms/yonkers-ny-74"
				},
				{
					"employer" : "Starr & Co, LLC, Starr Investment Advisors",
					"location" : "New York, NY",
					"title" : "Network Administrator",
					"dates" : "2003-May 2010",
					"description" : "Provided time-critical support; oversaw and supported the daily operations of the Technical Departments within these privately held companies.  Performed installation, configuration and maintenance for Microsoft Server architecture including 7+  servers running Windows 2003 and 2008 in Active Directory (Server 2003 native),  120+ Client PCs running Windows 2000, XP, Vista, and 7, MS Exchange 2007, proprietary software and third party applications as well as Terminal Services.",
					"url" : "http://www.bloomberg.com/research/stocks/private/snapshot.asp?privcapId=109928540"
				},
				{
					"employer" : "EASE Inc.",
					"location" : "New York, NY",
					"title" : "Systems Administrator",
					"dates" : "2001-2003",
					"description" : "Serviced prominent clients in the entertainment and modeling industries, financial institutions, and international government and educational agencies throughout NYC (including Wilhelmina Models, Progressive Credit Union, and the Colombian Mission to the United Nations).  Maintained active directory, DNS resolution, and MX records for Exchange.  Implemented office migration of GroupWise to Exchange 5.5. Installed and configured Symantec Antivirus Corporate Edition, Veritas Backup Exec.  Set up Local Area Network (LAN) and hardware components, including the maintenance of Sonicwall Firewalls, 3Com Switches, Linksys Routers, print servers, and various other devices.  Helped coordinate entire office moves with minimal downtime. Routinely dealt with spyware/malware infestations.",
					"url" : "http://easeconsulting.com/"
				}

			]
		},
		projects : {
				"projects" : [
				{
					"title" : "About Me Webpage",
					"dates" : "2015",
					"description" : "Udacity Front-End Nanodegree Project 0.  First webpage.",
					"images" : ["images/project-0.png", "images/project-0b.png"],
					"url" : "https://github.com/grimal/Lesson0"
				},
				{
					"title" : "Web Portfolio",
					"dates" : "2015",
					"description" : "Udacity Front-End Nanodegree Project 1.  Replicated PDF design mockup in HTML and CSS. Responsive website including display images, descriptions and links to each of the portfolio projects you will complete throughout the course of the Front-End Web Developer Nanodegree.",
					"images" : ["images/project-1.png", "images/project-1b.png", "images/project-1c.png", "images/project-1d.png"],
					"url" : "https://github.com/grimal/Lesson1"
				}

				]
			},
		map : null
	};

	var view = {

		bindEvents: function() {
			  $("#workExperienceButton").click( function(){
			    $("#workExperience").slideToggle();
			    var bState = $('#workExperienceButton').text().slice(0,1);
			    if (bState === "H") {
			    	$("#workExperienceButton").text('Show Work Experience');
			  	  }
			  	 else {
			  	 	$("#workExperienceButton").text('Hide Work Experience');
			  	 }
			  });
			  $("#projectsButton").click( function(){
			    $("#projects").slideToggle();
			    var bState = $('#projectsButton').text().slice(0,1);
			    if (bState === "H") {
			    	$("#projectsButton").text('Show Projects');
			  	  }
			  	 else {
			  	 	$("#projectsButton").text('Hide Projects');
			  	 }
			  });
			  $("#educationButton").click( function(){
			    $("#education").slideToggle();
			    var bState = $('#educationButton').text().slice(0,1);
			    if (bState === "H") {
			    	$("#educationButton").text('Show Education');
			  	  }
			  	 else {
			  	 	$("#educationButton").text('Hide Education');
			  	 }
			  });
			  $("#mapDivButton").click( function(){
			    $("#mapDiv").slideToggle();
			    var bState = $('#mapDivButton').text().slice(0,1);
			    if (bState === "H") {
			    	$("#mapDivButton").text('Show Map');
			  	  }
			  	 else {
			  	 	$("#mapDivButton").text('Hide Map');
			  	 }
			  });

		},

		render: function() {
			// Contacts
			var bio = octopus.getBio();
			var edu = octopus.getEducation();
			var work = octopus.getWork();
			var projects = octopus.getProjects();
			var objHTML = octopus.getHTML();


			var contactObj = bio.contacts;
			var skillObj = bio.skills;



			var formattedName = objHTML.HTMLheaderName.replace("%data%", contactObj.name);
			var formattedRole = objHTML.HTMLheaderRole.replace("%data%", contactObj.role);
			$("#header").prepend(formattedName + " " + formattedRole);

			var formattedMobile = objHTML.HTMLmobile.replace("%data%", contactObj.mobile);
			$("#topContacts, #footerContacts").append(formattedMobile);
			var formattedEmail = objHTML.HTMLemail.replace("%data%", contactObj.email);
			$("#topContacts, #footerContacts").append(formattedEmail);
			var formattedGithub = objHTML.HTMLgithub.replace("%data%", contactObj.github);
			$("#topContacts, #footerContacts").append(formattedGithub);
			var formattedTwitter = objHTML.HTMLtwitter.replace("%data%", contactObj.twitter);
			$("#topContacts, #footerContacts").append(formattedTwitter);
			var formattedLocation = objHTML.HTMLlocation.replace("%data%", contactObj.location);
			$("#topContacts, #footerContacts").append(formattedLocation);

			var formattedbioPic = objHTML.HTMLbioPic.replace("%data%", bio.bioPic);
			$("#header").append(formattedbioPic);

			var formattedWelcomeMsg = objHTML.HTMLwelcomeMsg.replace("%data%", contactObj.welcomeMessage);
			$("#header").append(formattedWelcomeMsg);

			if (skillObj.length > 0) {
				$("#header").append(objHTML.HTMLskillsStart);
				var formattedSkill = objHTML.HTMLskills.replace("%data%", skillObj[0]);
				$("#skills").append(formattedSkill);
				formattedSkill = objHTML.HTMLskills.replace("%data%", skillObj[1]);
				$("#skills").append(formattedSkill);
				formattedSkill = objHTML.HTMLskills.replace("%data%", skillObj[2]);
				$("#skills").append(formattedSkill);
				formattedSkill = objHTML.HTMLskills.replace("%data%", skillObj[3]);
				$("#skills").append(formattedSkill);
			}

			// education
			$("#education").before(objHTML.HTMLeducationButton);
			$("#education").append(objHTML.HTMLschoolStart);

			for (school in edu.schools)  {
				var entree = edu.schools[school];

				var formattedschoolName = objHTML.HTMLschoolName.replace("%data%", entree.name).replace("#", entree.url);
				var formattedschoolDegree = objHTML.HTMLschoolDegree.replace("%data%", entree.degree);
				$(".education-entry:last").append(formattedschoolName + formattedschoolDegree);
				var formattedschoolDates = objHTML.HTMLschoolDates.replace("%data%", entree.dates);
				$(".education-entry:last").append(formattedschoolDates);
				var formattedschoolLocation = objHTML.HTMLschoolLocation.replace("%data%", entree.location);
				$(".education-entry:last").append(formattedschoolLocation);
				var formattedschoolMajor = objHTML.HTMLschoolMajor.replace("%data%", entree.majors);
				$(".education-entry:last").append(formattedschoolMajor);
			}

			$("#education").append(objHTML.HTMLonlineClasses);
			$("#education").append(objHTML.HTMLonlineStart);
			 for (course in edu.onlineCourses)  {
			 	var entree = edu.onlineCourses[course];

				var formattedonlineTitle = objHTML.HTMLonlineTitle.replace("%data%", entree.title).replace("#", entree.url);
				var formattedonlineSchool = objHTML.HTMLonlineSchool.replace("%data%", entree.school);
				$(".online-entry").append(formattedonlineTitle + formattedonlineSchool).css("padding-left", "5%");
				var formattedonlineDates = objHTML.HTMLonlineDates.replace("%data%", entree.date);
				$(".online-entry").append(formattedonlineDates);
				var formattedonlineURL = objHTML.HTMLonlineURL.replace("%data%", entree.url).replace("#", entree.url);
				$(".online-entry").append(formattedonlineURL);
				$(".online-entry").append($("<hr/>"));

			}

			// Work
			$("#workExperience").before(objHTML.HTMLworkButton);
			for (job in work.jobs)  {
				var entree = work.jobs[job];

				$("#workExperience").append(objHTML.HTMLworkStart);
				var formattedworkEmployer = objHTML.HTMLworkEmployer.replace("%data%", entree.employer).replace("#", entree.url);
				var formattedworkTitle = objHTML.HTMLworkTitle.replace("%data%", entree.title);
				$(".work-entry:last").append(formattedworkEmployer + formattedworkTitle);
				var formattedworkDates = objHTML.HTMLworkDates.replace("%data%", entree.dates);
				$(".work-entry:last").append(formattedworkDates);
				var formattedworkLocation = objHTML.HTMLworkLocation.replace("%data%", entree.location);
				$(".work-entry:last").append(formattedworkLocation);
				var formattedworkDescription = objHTML.HTMLworkDescription.replace("%data%", entree.description);
				$(".work-entry:last").append(formattedworkDescription);
			}

			// Projects
			$("#projects").before(objHTML.HTMLprojectButton);
			for (project in projects.projects) {
				var entree = projects.projects[project];
				$("#projects").append(objHTML.HTMLprojectStart);


				var formattedprojectTitle = objHTML.HTMLprojectTitle.replace("%data%", entree.title).replace('#', entree.url);
				$(".project-entry:last").append(formattedprojectTitle);
				var formattedprojectDate = objHTML.HTMLprojectDates.replace("%data%", entree.dates);
				$(".project-entry:last").append(formattedprojectDate);
				var formattedprojectDescription = objHTML.HTMLprojectDescription.replace("%data%", entree.description);
				$(".project-entry:last").append(formattedprojectDescription);

				if (projects.projects[project].images.length > 0) {
					for (image in projects.projects[project].images) {
						var formattedprojectImage = objHTML.HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
						$(".project-entry:last").append(formattedprojectImage);
					}
				}
			}

			// Map
			$("#mapDiv").append(objHTML.googleMap);
			$("#mapDiv").before(objHTML.HTMLmapButton);
		}
	};

	var octopus = {
		init : function() {


			view.render();
			view.bindEvents();
			this.createMap();

		},

		getBio : function() {
			return model.bio;
		},

		getEducation : function() {
			return model.education;
		},

		getWork : function() {
			return model.work;
		},

		getProjects : function() {
			return model.projects;
		},

		getHTML : function() {
			return model.html;
		},

		getMap : function() {
			return model.map;
		},

		inName : function(name) {
			name = name.trim().split(" ");
 			name[1] = name[1].toUpperCase();
			name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();;

		 	return name[0] + " " + name[1];
		},

		logClicks : function(x,y) {
			clickLocations.push(
				{
			      x: x,
			      y: y
			    }
			  );
			  console.log('x location: ' + x + '; y location: ' + y);
		},

		locationFinder : function() {

		    // initializes an empty array
		    var locations = [];
		    var contacts = this.getBio().contacts;

		    // adds the single location property from bio to the locations array
		    locations.push(contacts.location);

		    // iterates through school locations and appends each location to
		    // the locations array
		    for (var school in education.schools) {
		      locations.push(education.schools[school].location);
		    }

		    // iterates through work locations and appends each location to
		    // the locations array
		    var work = this.getWork();
		    for (var job in work.jobs) {
		      locations.push(work.jobs[job].location);
		    }

		    return locations;
		  },

		  /*
		  createMapMarker(placeData) reads Google Places search results to create map pins.
		  placeData is the object returned from search results containing information
		  about a single location.
		  */
		  createMapMarker : function(placeData) {

		    // The next lines save location data from the search result object to local variables
		    var lat = placeData.geometry.location.lat();  // latitude from the place service
		    var lon = placeData.geometry.location.lng();  // longitude from the place service
		    var name = placeData.formatted_address;   // name of the place from the place service
		    var bounds = window.mapBounds;            // current boundaries of the map window

		    // marker is an object with additional data about the pin for a single location
		    var marker = new google.maps.Marker({
		      map: map,
		      position: placeData.geometry.location,
		      title: name
		    });

		    // infoWindows are the little helper windows that open when you click
		    // or hover over a pin on a map. They usually contain more information
		    // about a location.
		    var infoWindow = new google.maps.InfoWindow({
		      content: name
		    });

		    // hmmmm, I wonder what this is about...
		    google.maps.event.addListener(marker, 'click', function() {
		      // your code goes here!
		    infoWindow.open(map,marker);
		    });

		    // this is where the pin actually gets added to the map.
		    // bounds.extend() takes in a map location object
		    bounds.extend(new google.maps.LatLng(lat, lon));
		    // fit the map to the new marker
		    map.fitBounds(bounds);
		    // center the map
		    map.setCenter(bounds.getCenter());
		  },

		  /*
		  callback(results, status) makes sure the search returned results for a location.
		  If so, it creates a new map marker for that location.
		  */
		  callback : function(results, status) {
		    if (status == google.maps.places.PlacesServiceStatus.OK) {
		      createMapMarker(results[0]);
		    }
		  },

		  		  /*
		  pinPoster(locations) takes in the array of locations created by locationFinder()
		  and fires off Google place searches for each location
		  */
		  pinPoster : function(locations) {

		    // creates a Google place search service object. PlacesService does the work of
		    // actually searching for location data.

		    var map = octopus.getMap();
		    console.log(map);
		    var service = new google.maps.places.PlacesService(map);

		    // Iterates through the array of locations, creates a search object for each location
		    for (var place in locations) {

		      // the search request object
		      var request = {
		        query: locations[place]
		      };

		      // Actually searches the Google Maps API for location data and runs the callback
		      // function with the search results after each search.
		      service.textSearch(request, this.callback);
		    }
		  },

		  createMap : function() {
		  	$(document).click(function(loc) {
		  		var x = loc.pageX;
			    var y = loc.pageY;

			    octopus.logClicks(x,y);
			});

			// Sets the boundaries of the map based on pin locations
		    window.mapBounds = new google.maps.LatLngBounds();

		    // locations is an array of location strings returned from locationFinder()
		    locations = octopus.locationFinder();

		    // pinPoster(locations) creates pins on the map for each location in
		    // the locations array
		    //console.log(locations);
		    octopus.pinPoster(locations);



		    // Calls the initializeMap() function when the page loads
			window.addEventListener('load', this.initializeMap);

			// Vanilla JS way to listen for resizing of the window
			// and adjust map bounds
			window.addEventListener('resize', function(e) {
			  	//Make sure the map bounds get updated on page resize
			  	map.fitBounds(mapBounds);
		  	});
		  },

	  	  initializeMap : function() {
			// declares a global map variable
	  	  	map = octopus.getMap();

			var locations;

		    var mapOptions = {
		      disableDefaultUI: true
		    };

		    map = new google.maps.Map(document.querySelector('#map'), mapOptions);
		},

	};

	octopus.init();

});