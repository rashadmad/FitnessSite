var personal_name = document.getElementById("modal_title");
var personal_info = document.getElementById("personnel_info");
var personal_pic = document.getElementById("modal_img");
var personal_body = document.getElementById("modal_body");
var empty = "";
var modal_img = new Image();
var counter = 0;

var buttonClicked;

  // christine identity
var personal_array = [

    { class_Name:"christine_butt",
      name: "Amelia Holder",
      info: 'Growing up in Portage, Michigan, Amelia always found soccer to be a great way to make friends and stay fit. Her competitive spirit earned her a full scholarship to Robert Morris University in Chicago where she was voted team captain in 2009, 2010 and 2011. With Amelia at the helm, RMU earned a spot in the NAIA national tournament, competing against the elite 8 teams in the nation in 2011. When Amelia wasn’t practicing on the field, she was putting her energy into the Fulton Fit House. Honing in on her true passion, Amelia earned her bachelors degree in Applied Health Science with a concentration in Personal Training. She is CPR/AED certified and ACE certified. Health and fitness is truly embedded into Christine' + "'s " + 'lifestyle, and her "spunk" and positive attitude are contagious.',
      img_src: "assets/img/Christine_avatar.jpg"
    },
    { class_Name:"mike_butt",
      name: "Robert Boutin",
      info: "Since 2008, Robert has implemented successful fitness programs for hundreds of clients. After battling weight problems of his own following two knee surgeries, Robert committed himself to a regimen of functional fitness and lost 62 lbs. Through this dramatic change, he discovered a passion for helping others achieve their goals. He believes fitness is for everyone and that is has the ability to literally change - and save - lives. Today, Robert creates custom workout plans for both private and group classes and incorporates his own personal style into everything at Fulton Fit House.",
      img_src: "assets/img/Mike_avatar.jpg"
    },
    { class_Name:"joseph_butt",
      name: "Gary Perryman",
      info: "More info coming soon",
      img_src: "assets/img/Joel_avatar.jpg"
    },
    { class_Name:"assess_butt",
      name: "Joseph Leli",
      info: "Membership at Fulton Fit House begins with an initial assessment. We get to know you: your prior workout history, injuries and any sourness This allows us to create a customized workout plan that is specific to your individual goals and abilities.",
      img_src: "assets/img/Joel_avatar.jpg"
    },
    { class_Name:"engage_butt",
      name: "Joseph Leli",
      info: "Either with a group or privately with our certified coaches, we implement functional fitness through traditional strength and endurance training coupled with analytics-driven testing.",
      img_src: "assets/img/Joel_avatar.jpg"
    },
    { class_Name:"perform_butt",
      name: "Joseph Leli",
      info: "We strongly encourage all members to put their training to the test through marathons, competitive sports, obstacle courses— anything that seemed unattainable to you before. Once you conquer your fitness goals, who knows what else you can accomplish?",
      img_src: "assets/img/Joel_avatar.jpg"
    },
    { class_Name:"paul_butt",
      name: "Raphael Demarest",
      info: "As a professional chef, diet and exercise is challenging. At 48 years old I needed to make a commitment to live a long, healthy life. Fulton Fit House is that commitment.",
      img_src: "assets/img/paul_avatar.jpg"
    },
    { class_Name:"rick_butt",
      name: "Jackie Short",
      info: "Working out at Fulton Fit House under the instruction of Robert has changed my life. I have lost over 50 lbs. since I started. I not only look better and have more strength and endurance than when I started, I’ve learned how to eat right, which will allow me to keep the weight off.",
      img_src: "assets/img/Jackie_avatar.jpg"
    },
    { class_Name:"marla_butt",
      name: "Deborah Scott",
      info: "Fulton Fit House has changed my life. They are the real deal when it comes to fitness. Every day I am challenged to go outside of my comfort zone to get the BEST workout.",
      img_src: "assets/img/Deborah_avatar.jpg"
    }
];

  $("button").click(function() {
      buttonClicked = this.id;
      counter += 1;
  for(p = 0; p < personal_array.length; p += 1){
    var personalObject = personal_array[p].class_Name;
    var personalInfo = personal_array[p].info;
    var personalname = personal_array[p].name;
    var personalimage = personal_array[p].img_src;

    if( buttonClicked === personalObject){
        personal_name.innerHTML += personalname;
        personal_info.innerHTML += personalInfo;
        personal_pic.src = personalimage;
        personal_body.appendChild(linebreak);

    }
  }
});

//reset on the press of the close button
function resetText(){

  personal_name.innerHTML = empty;
  personal_info.innerHTML = empty;


};



// Problem: I have a modal that needs diffrent info for all of the personal in the gym
// 1.1 I need to capture which person is connected to which button
// 1.2 I need to then grab that persones name + there bio + then there title (all diffrent elements and tags)
// 1.3 then those elements need to be put into the modal CORRECTLY i.e. (the title of the modal needs to say the name of the personal)
