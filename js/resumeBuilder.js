$(function(){

	var model = {
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
			}
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
			var entree = bio.contacts;
			var formattedName = HTMLheaderName.replace("%data%", bio.name);
			var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
			$("#header").prepend(formattedName + " " + formattedRole);

			var formattedMobile = HTMLmobile.replace("%data%", entree.mobile);
			$("#topContacts, #footerContacts").append(formattedMobile);
			var formattedEmail = HTMLemail.replace("%data%", entree.email);
			$("#topContacts, #footerContacts").append(formattedEmail);
			var formattedGithub = HTMLgithub.replace("%data%", entree.github);
			$("#topContacts, #footerContacts").append(formattedGithub);
			var formattedTwitter = HTMLtwitter.replace("%data%", entree.twitter);
			$("#topContacts, #footerContacts").append(formattedTwitter);
			var formattedLocation = HTMLlocation.replace("%data%", entree.location);
			$("#topContacts, #footerContacts").append(formattedLocation);


			var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
			$("#header").append(formattedbioPic);

			var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
			$("#header").append(formattedWelcomeMsg);

			if (bio.skills.length > 0) {
				var entree = bio.skills;
				$("#header").append(HTMLskillsStart);
				var formattedSkill = HTMLskills.replace("%data%", entree[0]);
				$("#skills").append(formattedSkill);
				formattedSkill = HTMLskills.replace("%data%", entree[1]);
				$("#skills").append(formattedSkill);
				formattedSkill = HTMLskills.replace("%data%", entree[2]);
				$("#skills").append(formattedSkill);
				formattedSkill = HTMLskills.replace("%data%", entree[3]);
				$("#skills").append(formattedSkill);
			}

					// education
			$("#education").before(HTMLeducationButton);
			$("#education").append(HTMLschoolStart);

			for (school in education.schools)  {
				var entree = education.schools[school];

				var formattedschoolName = HTMLschoolName.replace("%data%", entree.name).replace("#", entree.url);
				var formattedschoolDegree = HTMLschoolDegree.replace("%data%", entree.degree);
				$(".education-entry:last").append(formattedschoolName + formattedschoolDegree);
				var formattedschoolDates = HTMLschoolDates.replace("%data%", entree.dates);
				$(".education-entry:last").append(formattedschoolDates);
				var formattedschoolLocation = HTMLschoolLocation.replace("%data%", entree.location);
				$(".education-entry:last").append(formattedschoolLocation);
				var formattedschoolMajor = HTMLschoolMajor.replace("%data%", entree.majors);
				$(".education-entry:last").append(formattedschoolMajor);
			}

			$("#education").append(HTMLonlineClasses);
			$("#education").append(HTMLonlineStart);
			 for (course in education.onlineCourses)  {
			 	var entree = education.onlineCourses[course];

				var formattedonlineTitle = HTMLonlineTitle.replace("%data%", entree.title).replace("#", entree.url);
				var formattedonlineSchool = HTMLonlineSchool.replace("%data%", entree.school);
				$(".online-entry").append(formattedonlineTitle + formattedonlineSchool).css("padding-left", "5%");
				var formattedonlineDates = HTMLonlineDates.replace("%data%", entree.date);
				$(".online-entry").append(formattedonlineDates);
				var formattedonlineURL = HTMLonlineURL.replace("%data%", entree.url).replace("#", entree.url);
				$(".online-entry").append(formattedonlineURL);
				$(".online-entry").append($("<hr/>"));

			}

			// Work
			$("#workExperience").before(HTMLworkButton);
			for (job in work.jobs)  {
				var entree = work.jobs[job];

				$("#workExperience").append(HTMLworkStart);
				var formattedworkEmployer = HTMLworkEmployer.replace("%data%", entree.employer).replace("#", entree.url);
				var formattedworkTitle = HTMLworkTitle.replace("%data%", entree.title);
				$(".work-entry:last").append(formattedworkEmployer + formattedworkTitle);
				var formattedworkDates = HTMLworkDates.replace("%data%", entree.dates);
				$(".work-entry:last").append(formattedworkDates);
				var formattedworkLocation = HTMLworkLocation.replace("%data%", entree.location);
				$(".work-entry:last").append(formattedworkLocation);
				var formattedworkDescription = HTMLworkDescription.replace("%data%", entree.description);
				$(".work-entry:last").append(formattedworkDescription);
			}

			// Projects
			$("#projects").before(HTMLprojectButton);
			for (project in projects.projects) {
				var entree = projects.projects[project];
				$("#projects").append(HTMLprojectStart);


				var formattedprojectTitle = HTMLprojectTitle.replace("%data%", entree.title).replace('#', entree.url);
				$(".project-entry:last").append(formattedprojectTitle);
				var formattedprojectDate = HTMLprojectDates.replace("%data%", entree.dates);
				$(".project-entry:last").append(formattedprojectDate);
				var formattedprojectDescription = HTMLprojectDescription.replace("%data%", entree.description);
				$(".project-entry:last").append(formattedprojectDescription);

				if (projects.projects[project].images.length > 0) {
					for (image in projects.projects[project].images) {
						var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
						$(".project-entry:last").append(formattedprojectImage);
					}
				}
			}

			// Map
			$("#mapDiv").append(googleMap);
			$("#mapDiv").before(HTMLmapButton);
		};

	var octopus = {
		init : function() {


		},

		getBio : function() {
			return model.bio;
		},

		getEducation: function() {
			return model.education;
		},

		getWork: function() {
			return model.work;
		},

		getProjects: function() {
			return work.projects;
		}

		inName : function(name) {
			name = name.trim().split(" ");
 			name[1] = name[1].toUpperCase();
			name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();;

		 	return name[0] + " " + name[1];
		}

	};

	octopus.init();

});