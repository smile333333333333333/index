// =====================================
// H.E.E. SECRET DATABASE
// =====================================

// Number codes
const codeSecrets = {

"648": function(output){
    output.innerHTML = "SMILE";

    setTimeout(()=>{
        output.innerHTML = "442";
    },1500);
},

"442": function(output){
    output.innerHTML =
`SECONDARY INDEX FOUND

STATUS:
ARCHIVE INCOMPLETE`;
},

"001": function(output){
    output.innerHTML = "Access Granted";
},

"777": function(output){
    output.innerHTML =
`Maintenance Request Logged`;
},

"404": function(output){
    output.innerHTML =
`Archive Missing`;
}

};


// Secret phrases
const phraseSecrets = {

"the factory":`
ENTRY REDACTED

Clearance Required.
`,

"hee":`
Hazard Evaluation Entity

Internal Use Only.
`,

"employee handbook":`
Handbook Revision 18.2

Several pages are unavailable.
`,

"archive":`
Searching...

No matching archive found.
`,

"containment":`
Containment Status

STABLE
`,

"smile":`
:)

We appreciate your cooperation.
`,

"orientation":`
Orientation Complete.
`,

"security":`
Security Clearance Required.
`,

"administrator":`
Administrator Offline.
`,

"hello":`
Welcome Employee.
`,

"who are you":`
This terminal does not answer personal questions.
`

};


// Handles everything
function checkSecrets(input,output){

input=input.toLowerCase().trim();

if(codeSecrets[input]){
    codeSecrets[input](output);
    return true;
}

if(phraseSecrets[input]){
    output.innerHTML=phraseSecrets[input];
    return true;
}

return false;

}
