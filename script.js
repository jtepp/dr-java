var search_bar = document.getElementById("bar");
var search_text = "";
var box_text = document.getElementById("txt");
var input = "";
let root = document.documentElement.style;
var swat = 0;

function clr (val) {
    if(val == 1&& document.getElementById('bar').innerHTML == ''){
    document.getElementById('bar').innerHTML = 'Ask Something...';}
    if(val == 0 &&document.getElementById('bar').innerHTML == 'Ask Something...')
    {
        document.getElementById('bar').innerHTML = '';

    }
    
    console.log(val)
    
}

function swit(){
    swat++;
    if(swat%2==1){
        
        root.setProperty('--dark','var(--bu)');
        root.setProperty('--alter','var(--re)');
    
    }
    else{

        root.setProperty('--alter','var(--bu)');
        root.setProperty('--dark','var(--re)');

    }
}

search_bar.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      receive();
    }
  });


function receive (){
    if(search_bar.innerHTML!==""){
    search_text=search_bar.innerText.trim();
    search_bar.innerHTML = "";
    input=search_text.trim();
    box_text.innerHTML+="\n"+ "- "+input;
    input = input.toLowerCase();
    main();}
}

/********************* PORT *********************/


var xx, currentSubject, intro = "> Welcome, my name is Dr. Java, MA MEd. What would you like to talk about?",
topic, subject, response = "";

var differQuestion = [
    "we're here to talk about you, not me",
    "this is about you, not me",
    "let's just keep talking about you",
    "let's talk more about you",
    "we should keep talking about you"
   ],
   badInput = [
    "ok",
    "okay",
    "yes",
    "no"
   ],
   unknown = [
    "ok",
    "uh huh",
    "right",
    "of course",
    "how does that make you feel?",
    "how does it make you feel?",
    "I understand",
    "I get it",
    "could you elaborate?",
    "could you be more specific?",
    "tell me more",
    "sure",
    "for sure"
   ],
   known,
   allsuf = [
       "",
    "s",
    "es",
    "'s",
    "s'",
    "'d",
    "ed",
    "d"
   ],
   familypre = [
    "step",
    "half",
    "step-",
    "half-",
    "ex",
    "ex-"
   ],
   familysuf = [
    "-in-law"
   ],
   family = [
    "family",
    "0",
    "grand",
    "grandma",
    "grandmother",
    "mom",
    "mother",
    "grandpa",
    "grandfather",
    "father",
    "dad",
    "son",
    "daughter",
    "kid",
    "children",
    "brother",
    "sister",
    "pregnant",
    "loved ones"
   ],
   school = [
    "school",
    "1",
    "teacher",
    "professor",
    "prof",
    "student",
    "class",
    "course",
    "principal",
    "mentor",
    "tutor",
    "counsellor",
    "college",
    "university",
    "education"
   ],
   work = [
    "work",
    "2",
    "colleague",
    "coworker",
    "co-worker",
    "boss",
    "client",
    "workplace",
    "worker"
   ],
   relationships = [
    "relationships",
    "3",
    "sex",
    "friend",
    "buddy",
    "pregnant",
    "pal",
    "buddie",
    "girlfriend",
    "boyfriend",
    "lover",
    "partner",
    "significant other",
    "friendship",
    "relationships"
   ],
   substances = [
    "substances",
    "4",
    "smoke",
    "smoking",
    "cigarette",
    "nicotene",
    "addict",
    "addicted",
    "drug",
    "alcohol",
    "substance",
    "marijuana",
    "weed",
    "cocaine",
    "heroin",
    "meth",
    "methanphetamine",
    "beer",
    "liquor",
    "wine",
    "scotch",
    "bourbon",
    "codeine",
    "oxycontin",
    "morphine",
    "tequila",
    "vodka"
   ],
   slef = [
    "yourself",
    "5",
    "suicide",
    "myself",
    "mine",
    "mental",
    "self",
    "health",
    "pain",
    "hurt",
    "feeling",
    "depressed",
    "sad",
    "sadness",
    "unhappy",
    "down",
    "unwell",
    "depression"
   ],
   names = [
    "family",
    "school",
    "work",
    "relationships",
    "substances",
    "self"
   ],
   aWords = [],
   me = [ "i",  "mine", "me",  "my",   "myself"],
   you = ["you","yours", "you", "your", "yourself"],
   greetings = [
    "hi",
    "hey",
    "hello",
    "hiya"
   ],
   condolences = [
    "I am very sorry",
     "I am so sorry to here about that",
     "are you ok?"
   ];
   var ifamily, ischool, iwork, irelationships, isubstances, islef, responses = 0, total, tempRandom, currentTopic,wordCount;
var outF, outT;
   var topics = [
    family,
    school,
    work,
    relationships,
    substances,
    slef
   ];
   var itopics = [
    ifamily,
    ischool,
    iwork,
    irelationships,
    isubstances,
    islef
   ];

var addResponses, great = 0, chosenYet = false, talking = true, shouldRepeat, hasSuf=false,hasSuf2=false, knownYet, sayKnown, sayUnknown, saySpecific;
var sadInput = ["death", "dead", "died", "dying", "passed"];




function main(){
loop();
box_text.scrollTop = box_text.scrollHeight;
}


function loop(){
    wordCount=0;
    addResponses=false;
    tempRandom = Math.floor(Math.random()*5);
    ifamily =   0;
    ischool = 0;
    iwork = 0;
    irelationships = 0;
    isubstances = 0;
    islef = 0;
    total = 0;
    topic = unknown[Math.floor(Math.random()*unknown.length)];
    currentSubject = "";
    aWords= input.split(" ");

    for (af of allsuf){
        for (t of topics){
            for (f of t){
                if(aWords.includes(f+af)){hasSuf=true;outF = f; outT = t;}
                
            }
        }
    }
    if(hasSuf){
        chosenYet=true;
        currentTopic= Number(outT[1]);
        currentSubject = outF;
        subject = outF;
        topic = outT[0];
        if(t[0] == "self")tempRandom = 1;
        }

    
    

//responses

var familyR = [
    "how do you feel about your " + subject + "?",
    "how does your " + subject + " really make you feel?"
   ],
   schoolR = [
    "how are you doing overall in school?",
    "do you feel safe at school?",
    "do you enjoy school?",
    "have you made any new friends at school?"
   ],
   workR = [
    "how would you describe your overall performance at work",
    "are you in fear of being let go at work?",
    "have you made any new friends at work?"
   ],
   relationshipsR = familyR,
   substancesR = [
    "substance abuse is very dangerous",
    subject + " could ruin your life",
    "how long have you been using " + subject + "?",
    "how often do you use " + subject + "?"
   ],
   slefR = [
    "are you ok?",
    "how are you feeling?",
    "do you think you need more help?"
   ],
   known = [
  "tell me more about " + topic,
  "let's talk about " + topic,
  "I think we should talk about " + topic,
  "tell me more about " + subject,
  "let's talk about " + subject,
  "I think we should talk about " + subject
 ];

 topicsR = [
    familyR,
    schoolR,
    workR,
    relationshipsR,
    substancesR,
    slefR
 ];


 if (chosenYet == false||responses==0) {
    response = unknown[ Math.floor(Math.random() * unknown.length)];
   }
   if (chosenYet && responses == 0 && tempRandom != 10) {
    sayKnown = true;
    shouldRepeat = false;
    sayUnknown = false;
   } else if (tempRandom == 0) {
    shouldRepeat = true;
    sayKnown = false;
    sayUnknown = false;
    saySpecific = false;
   } else if (tempRandom == 1) {
    sayUnknown = true;
    sayKnown = false;
    shouldRepeat = false;
    saySpecific = false;
   } else if (tempRandom == 2) {
    sayUnknown = true;
    sayKnown = false;
    shouldRepeat = false;
    saySpecific = false;
   } else if (tempRandom == 3&&responses>0&&currentTopic>-1) {
    sayUnknown = false;
    sayKnown = false;
    shouldRepeat = false;
    saySpecific = true;

   } else if (tempRandom == 4) {
    sayUnknown = false;
    sayKnown = false;
    shouldRepeat = true;
    saySpecific = false;

   }

   
   if (sayUnknown) { //
    response = unknown[Math.floor(Math.random() * unknown.length)];
   } else if (sayKnown) {
    response = known[Math.floor(Math.random() * known.length)];
   } else if (shouldRepeat) {
    response = "";
    for (u of aWords) {
      wordCount++;
     for (r of me) {
        try{
      if (r == u&&wordCount<=aWords.length) {
       u  = you[me.indexOf(r)];
       
      }}catch(err){u = u;}
     }
     response += u + " ";
    }
   
    
    

   } else if (saySpecific) {
    response = topicsR[currentTopic][Math.floor(Math.random() * topicsR[currentTopic].length)];
   }

   

   if (String.valueOf(input.charAt(input.length - 1))=="?") {
    response = differQuestion[ Math.floor(Math.random() * differQuestion.length)];
   }
   

    
    
   
    for (b of aWords){
    if(sadInput.includes(b)){
       
    response = condolences[ Math.floor(Math.random() * condolences.length)];

   }
    



    }
    if (input.charAt(input.length-1)=="?") {
        response = differQuestion[Math.floor(Math.random() * differQuestion.length)];
       }
    if(great<1){
for(g of greetings) {
if(aWords.includes(g)||input==g){great++;response=greetings[Math.floor(Math.random() * greetings.length)];}
}}

let newResponse = response.charAt(0).toUpperCase()+response.slice(1,response.length);

box_text.innerHTML+=("\n> " + newResponse);
console.log(aWords.toString()+"_"+response);
   console.log(tempRandom+"_"+great);
   
   console.log("sub: "+subject+" cs: "+currentSubject);
   console.log("top: "+topic+" ct: "+currentTopic);
  responses++;
  }

function findIndex(inn, array) {


  for (var n = 0; n <= array.length; n++) {
    if (inn == array[n]){ console.log(n+"me"+me[n]+"you"+you[n]);return n;}
  }
  return -1;
 }

   

