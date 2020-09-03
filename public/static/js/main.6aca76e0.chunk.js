(this["webpackJsonptame-client"]=this["webpackJsonptame-client"]||[]).push([[0],{190:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(66),l=a.n(i),s=(a(73),a(5)),o=a(6),c=a(8),m=a(7),u=(a(74),a(75),a(2)),d=a(1),p=a.n(d),g="https://tame.herokuapp.com/api",h=a(3);function E(){return r.a.createElement("div",{className:"start-screen"},r.a.createElement("img",{className:"hedgehog-logo",src:"https://res.cloudinary.com/deravtpot/image/upload/v1598883877/hedgehog-4819833_1920_darhfd.png",alt:""}),r.a.createElement("h1",null,"tame"),r.a.createElement("h3",null,"Manage your migraines"),r.a.createElement("button",{className:"button"},r.a.createElement(h.b,{to:"/login"},"Log In")),r.a.createElement("button",{className:"button"},r.a.createElement(h.b,{to:"/signup"},"Sign Up")),r.a.createElement("div",{className:"start-about-box"},r.a.createElement("article",{className:"start-about-info"},r.a.createElement("h4",null,"About tame"),r.a.createElement("p",null,"Living with migraines isn't easy - but don't let them take over your life. Keep track of your symptoms, triggers and the remedies that work for you with tame. Sign up for free to get started or log in as testuser@testuser.com (password: Testuser@123) if you're just here for the code."))))}function f(e){return r.a.createElement("div",null,r.a.createElement("nav",{className:"nav-bar"},r.a.createElement("div",null,r.a.createElement("p",null,"tame")),r.a.createElement("div",null,r.a.createElement("i",{onClick:function(){return e.onNightmode()},className:"fas fa-moon"})),r.a.createElement("div",null,r.a.createElement("button",{className:"button log-out-button",onClick:function(){return e.onLogout()}},"Log out"))))}function v(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"nav-footer"},r.a.createElement(h.b,{className:"history-link",to:"/migraines/history"},r.a.createElement("span",null,"History")),r.a.createElement(h.b,{to:"/migraines/stats"},r.a.createElement("i",{className:"fas fa-chart-pie"})," ",r.a.createElement("span",null,"Stats")),r.a.createElement(h.b,{to:"/migraines/new"},r.a.createElement("i",{className:"fas fa-plus"}),r.a.createElement("span",null,"New")),r.a.createElement(h.b,{className:"history-link",to:"/recommendations"},r.a.createElement("span",null,"Tips")),r.a.createElement(h.b,{to:"/explore"},r.a.createElement("i",{className:"fas fa-book-open"}),r.a.createElement("span",null,"Explore"))))}var b=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={loggedInUser:e.props.loggedInUser,possibleSymptoms:["Headache","Nausea","Aura","Light Sensitivity","Sore Throat","Dizziness","Blocked Nose","Anxiety","Fever","Tinnitus","Eye Pain","Blurry Vision","Diarrhea"],possibleTriggers:["Stress","Lack of Sleep","Depression","Skipped Meal","Weather Change","High Humidity","Alcohol","Storm","Bright Light","Dehydration","Sinus Problem","Chocolate","Cheese"],possibleRemedies:["Rest","Sleep","Yoga","Coolpack","Heatpack","Food","Caffeine","Hot shower/bath","Water","Paracetamol","Aspirin","Ibuprofen","Triptan"],symptoms:[],remedies:[],triggers:[],startTime:""},e.checkSymptom=function(t){var a=t.currentTarget.value,n=e.state.symptoms;n.includes(a)?n.splice(n.indexOf(a),1):n.push(a),e.setState({symptoms:n})},e.checkTrigger=function(t){var a=t.currentTarget.value,n=e.state.triggers;n.includes(a)?n.splice(n.indexOf(a),1):n.push(a),e.setState({triggers:n})},e.checkRemedy=function(t){var a=t.currentTarget.value,n=e.state.remedies;n.includes(a)?n.splice(n.indexOf(a),1):n.push(a),e.setState({remedies:n})},e.setStartTime=function(t){e.setState({startTime:t.currentTarget.value})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.state.loggedInUser||p.a.get("".concat(g,"/user"),{withCredentials:!0}).then((function(t){e.setState({loggedInUser:t.data})})).catch((function(){return r.a.createElement(u.a,{to:"/login"})}))}},{key:"componentDidUpdate",value:function(e){var t=this;this.state.loggedInUser!==e.loggedInUser&&p.a.get("".concat(g,"/user"),{withCredentials:!0}).then((function(e){t.setState({loggedInUser:e.data})})).catch((function(){return r.a.createElement(u.a,{to:"/login"})}))}},{key:"render",value:function(){var e=this;return this.state.loggedInUser?r.a.createElement("div",{className:"new-migraine-screen user-screen"},r.a.createElement(f,{onLogout:this.props.onLogout,onNightmode:this.props.onNightmode}),r.a.createElement("div",null,r.a.createElement("h2",null,"Record a new migraine"),r.a.createElement("h4",null,"Please provide as much information as possible, at least an estimated start time, pain level and symptoms. You can edit and add to the information later.")),r.a.createElement("form",{className:"new-migraine-form",onSubmit:function(t){return e.props.onSubmit(t,e.state.symptoms,e.state.triggers,e.state.remedies)}},r.a.createElement("label",{className:"new-migraine-question"},"When did the migraine start?"),r.a.createElement("input",{name:"start",type:"datetime-local",defaultValue:(new Date).toISOString().substring(0,16),max:(new Date).toISOString().substring(0,16),onChange:this.setStartTime}),r.a.createElement("label",{className:"new-migraine-question"},"When did the migraine end?"),r.a.createElement("label",{className:"sub-label"},"Leave empty if migraine hasn't ended yet."),r.a.createElement("input",{name:"end",type:"datetime-local",min:this.state.startTime}),r.a.createElement("label",{className:"new-migraine-question"},"How bad is the pain?"),r.a.createElement("label",{className:"sub-label"},"On a scale from 1(not too bad) to 5(very bad)."),r.a.createElement("div",{className:"radio-inline"},r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"painlevel",id:"1",value:"1"}),r.a.createElement("label",null," 1")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"painlevel",id:"2",value:"2"}),r.a.createElement("label",null," 2")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"painlevel",id:"3",value:"3"}),r.a.createElement("label",null," 3")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"painlevel",id:"4",value:"4"}),r.a.createElement("label",null," 4")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"painlevel",id:"5",value:"5"}),r.a.createElement("label",null," 5"))),r.a.createElement("label",{className:"new-migraine-question"},"What are your symptoms?"),r.a.createElement("div",{className:"select-inline"},this.state.possibleSymptoms.map((function(t,a){return r.a.createElement("div",{key:t+1,className:"select-option"},r.a.createElement("input",{onChange:e.checkSymptom,type:"checkbox",name:"symptoms",id:t,value:t}),r.a.createElement("label",null," ",t))}))),r.a.createElement("label",{className:"new-migraine-question"},"What may have triggered it?"),r.a.createElement("div",{className:"select-inline"},this.state.possibleTriggers.map((function(t,a){return r.a.createElement("div",{key:t+1,className:"select-option"},r.a.createElement("input",{onChange:e.checkTrigger,type:"checkbox",name:"triggers",id:t,value:t}),r.a.createElement("label",null," ",t))}))),r.a.createElement("label",{className:"new-migraine-question"},"What remedies have you tried?"),r.a.createElement("div",{className:"select-inline"},this.state.possibleRemedies.map((function(t,a){return r.a.createElement("div",{key:t+1,className:"select-option"},r.a.createElement("input",{onChange:e.checkRemedy,type:"checkbox",name:"remedies",id:t,value:t}),r.a.createElement("label",null," ",t))}))),r.a.createElement("label",{className:"new-migraine-question"},"Which remedy helped you most?"),r.a.createElement("select",{name:"faveRemedy",id:"faveRemedy"},r.a.createElement("option",{value:"none"},"none"),this.state.remedies.map((function(e,t){return r.a.createElement("option",{key:e+t,value:e},e)}))),r.a.createElement("label",{className:"new-migraine-question"},"Notes"),r.a.createElement("textarea",{name:"notes",cols:"1",rows:"5"}),this.props.errorMessage&&r.a.createElement("p",{className:"auth-error"},this.props.errorMessage),r.a.createElement("button",{className:"button",type:"submit"},"Submit")),r.a.createElement(v,null)):r.a.createElement("p",null,"Loading")}}]),a}(r.a.Component),y=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={possibleSymptoms:["Headache","Nausea","Aura","Light Sensitivity","Sore Throat","Dizziness","Blocked Nose","Anxiety","Fever","Tinnitus","Eye Pain","Blurry Vision","Diarrhea"],possibleTriggers:["Stress","Lack of Sleep","Depression","Skipped Meal","Weather Change","High Humidity","Alcohol","Storm","Bright Light","Dehydration","Sinus Problem","Chocolate","Cheese"],possibleRemedies:["Rest","Sleep","Yoga","Coolpack","Heatpack","Food","Caffeine","Hot shower/bath","Water","Paracetamol","Aspirin","Ibuprofen","Triptan"],symptoms:[],remedies:[],triggers:[],startTime:"",migraine:e.props.migraine},e.setMigraineDetails=function(){var t=e.props.match.params.id;p.a.get("".concat(g,"/migraines/").concat(t),{withCredentials:!0}).then((function(t){e.setState({migraine:t.data,symptoms:t.data.symptoms,triggers:t.data.triggers,remedies:t.data.remedies})}))},e.checkSymptom=function(t){var a=t.currentTarget.value,n=e.state.symptoms;n.includes(a)?n.splice(n.indexOf(a),1):n.push(a),e.setState({symptoms:n})},e.checkTrigger=function(t){var a=t.currentTarget.value,n=e.state.triggers;n.includes(a)?n.splice(n.indexOf(a),1):n.push(a),e.setState({triggers:n})},e.checkRemedy=function(t){var a=t.currentTarget.value,n=e.state.remedies;n.includes(a)?n.splice(n.indexOf(a),1):n.push(a),e.setState({remedies:n})},e.setStartTime=function(t){e.setState({startTime:t.currentTarget.value})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.state.migraine||this.setMigraineDetails()}},{key:"componentDidUpdate",value:function(e){e.migraine||this.state.migraine||this.setMigraineDetails()}},{key:"render",value:function(){var e=this;return this.props.loggedInUser?this.state.migraine?r.a.createElement("div",{className:"new-migraine-screen user-screen"},r.a.createElement(f,{onLogout:this.props.onLogout,onNightmode:this.props.onNightmode}),r.a.createElement("div",null,r.a.createElement("h2",null,"Edit your migraine")),r.a.createElement("form",{className:"new-migraine-form",onSubmit:function(t){return e.props.onEdit(t,e.state.symptoms,e.state.triggers,e.state.remedies,e.state.migraine)}},r.a.createElement("label",{className:"new-migraine-question"},"When did the migraine start?"),r.a.createElement("input",{name:"start",type:"datetime-local",defaultValue:this.state.migraine.start.slice(0,16),max:(new Date).toISOString().substring(0,16),onChange:this.setStartTime}),r.a.createElement("label",{className:"new-migraine-question"},"When did the migraine end?"),r.a.createElement("input",{name:"end",defaultValue:this.state.migraine.end.slice(0,16),type:"datetime-local",min:this.state.startTime}),r.a.createElement("label",{className:"new-migraine-question"},"How bad is the pain?"),r.a.createElement("label",{className:"sub-label"},"On a scale from 1(not too bad) to 5(very bad)."),r.a.createElement("div",{className:"radio-inline"},r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"painlevel",id:"1",value:"1",defaultChecked:1===this.state.migraine.painlevel}),r.a.createElement("label",null," 1")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"painlevel",id:"2",value:"2",defaultChecked:2===this.state.migraine.painlevel}),r.a.createElement("label",null," 2")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"painlevel",id:"3",value:"3",defaultChecked:3===this.state.migraine.painlevel}),r.a.createElement("label",null," 3")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"painlevel",id:"4",value:"4",defaultChecked:4===this.state.migraine.painlevel}),r.a.createElement("label",null," 4")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"painlevel",id:"5",value:"5",defaultChecked:5===this.state.migraine.painlevel}),r.a.createElement("label",null," 5"))),r.a.createElement("label",{className:"new-migraine-question"},"What are your symptoms?"),r.a.createElement("div",{className:"select-inline"},this.state.possibleSymptoms.map((function(t,a){return r.a.createElement("div",{key:t+1,className:"select-option"},r.a.createElement("input",{onChange:e.checkSymptom,type:"checkbox",name:"symptoms",id:t,value:t,defaultChecked:!!e.state.migraine.symptoms.includes(t)}),r.a.createElement("label",null," ",t))}))),r.a.createElement("label",{className:"new-migraine-question"},"What may have triggered it?"),r.a.createElement("div",{className:"select-inline"},this.state.possibleTriggers.map((function(t,a){return r.a.createElement("div",{key:t+1,className:"select-option"},r.a.createElement("input",{onChange:e.checkTrigger,type:"checkbox",name:"triggers",id:t,value:t,defaultChecked:!!e.state.migraine.triggers.includes(t)}),r.a.createElement("label",null," ",t))}))),r.a.createElement("label",{className:"new-migraine-question"},"What remedies have you tried?"),r.a.createElement("div",{className:"select-inline"},this.state.possibleRemedies.map((function(t,a){return r.a.createElement("div",{key:t+1,className:"select-option"},r.a.createElement("input",{onChange:e.checkRemedy,type:"checkbox",name:"remedies",id:t,value:t,defaultChecked:!!e.state.migraine.remedies.includes(t)}),r.a.createElement("label",null," ",t))}))),r.a.createElement("label",{className:"new-migraine-question"},"Which remedy helped you most?"),r.a.createElement("select",{name:"faveRemedy",id:"faveRemedy"},r.a.createElement("option",{defaultValue:this.state.migraine.faveRemedy},this.state.migraine.faveRemedy),this.state.remedies.map((function(e,t){return r.a.createElement("option",{key:e+t,value:e},e)}))),r.a.createElement("label",{className:"new-migraine-question"},"Notes"),r.a.createElement("textarea",{name:"notes",cols:"1",rows:"5",defaultValue:this.state.migraine.notes}),this.props.errorMessage&&r.a.createElement("p",{className:"auth-error"},this.props.errorMessage),r.a.createElement("button",{className:"button",type:"submit"},"Edit")),r.a.createElement(v,null)):r.a.createElement("p",null,"Loading ... "):r.a.createElement(u.a,{to:"/login"})}}]),a}(r.a.Component),N=a(26),k=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={triggerData:null,symptomData:{},timeData:{}},e.setTriggerDetails=function(){var t={};e.props.migraines.forEach((function(e){e.triggers.forEach((function(e){t[e]=e in t?t[e]+1:1}))}));var a={labels:Object.keys(t),datasets:[{data:Object.values(t),backgroundColor:["#FF6384","#36A2EB","#FFCE56","#9ec76b","#d27fd4","#7f8cd4","#f58936","#92e1e8","#ffff8f","#4049ff","#adffc9","#ffadbc","#7a9465"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56","#9ec76b","#d27fd4","#7f8cd4","#f58936","#92e1e8","#ffff8f","#4049ff","#adffc9","#ffadbc","#7a9465"]}]},n={};e.props.migraines.forEach((function(e){e.symptoms.forEach((function(e){n[e]=e in n?n[e]+1:1}))}));var r={labels:Object.keys(n),datasets:[{data:Object.values(n),backgroundColor:["#FF6384","#36A2EB","#FFCE56","#9ec76b","#d27fd4","#7f8cd4","#f58936","#92e1e8","#ffff8f","#4049ff","#adffc9","#ffadbc","#7a9465"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56","#9ec76b","#d27fd4","#7f8cd4","#f58936","#92e1e8","#ffff8f","#4049ff","#adffc9","#ffadbc","#7a9465"]}]},i=["January","February","March","April","May","June","July","August","September","October","November","December"],l=[0,0,0,0,0,0,0,0,0,0,0,0],s=(new Date).getMonth(),o=i.slice(s+1).concat(i.slice(0,s+1));e.props.migraines.forEach((function(e){var t;if(t="0"===e.start.slice(5,6)?e.start.slice(6,7):e.start.slice(5,7),e.start.slice(0,10)===e.end.slice(0,10))l[t]=l[t]+1;else if(e.start.slice(0,7)===e.end.slice(0,7)){var a=e.end.slice(8,10)-e.start.slice(8,10)+1;l[t]=l[t]+a}else e.start.slice(0,5),e.end.slice(0,5)}));var c={labels:o,datasets:[{label:"Migraine days each month",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:l.slice(s+2).concat(l.slice(0,s+2))}]};e.setState({triggerData:a,symptomData:r,timeData:c})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.migraines.length&&this.setTriggerDetails()}},{key:"componentDidUpdate",value:function(e){this.props.migraines.length!==e.migraines.length&&this.setTriggerDetails()}},{key:"render",value:function(){return this.state.triggerData?this.props.migraines.length?r.a.createElement("div",{className:"user-screen"},r.a.createElement(f,{onLogout:this.props.onLogout,onNightmode:this.props.onNightmode}),r.a.createElement("h2",null,"Stats"),r.a.createElement("div",{className:"stats-graph"},r.a.createElement("h3",null,"Your migraines this year"),r.a.createElement(N.Line,{data:this.state.timeData})),r.a.createElement("div",{className:"stats-graph"},r.a.createElement("h3",null,"Your most common triggers"),r.a.createElement(N.Doughnut,{data:this.state.triggerData})),r.a.createElement("div",{className:"stats-graph"},r.a.createElement("h3",null,"Your most common symptoms"),r.a.createElement(N.Pie,{data:this.state.symptomData})),r.a.createElement(h.b,{to:"/migraines/history"},r.a.createElement("button",{className:"button"},"See History")),r.a.createElement(v,null)):r.a.createElement("div",{className:"user-screen"},r.a.createElement(f,{onLogout:this.props.onLogout,onNightmode:this.props.onNightmode}),r.a.createElement("h2",null,"Stats"),r.a.createElement("p",null,"No data yet.")):r.a.createElement("p",null,"Loading ....")}}]),a}(r.a.Component),S=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={loggedInUser:e.props.loggedInUser},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.state.loggedInUser||p.a.get("".concat(g,"/user"),{withCredentials:!0}).then((function(t){e.setState({loggedInUser:t.data})})).catch((function(){return r.a.createElement(u.a,{to:"/login"})}))}},{key:"componentDidUpdate",value:function(e){var t=this;this.state.loggedInUser!==e.loggedInUser&&p.a.get("".concat(g,"/user"),{withCredentials:!0}).then((function(e){t.setState({loggedInUser:e.data})})).catch((function(){return r.a.createElement(u.a,{to:"/login"})}))}},{key:"render",value:function(){var e=this;return this.state.loggedInUser?r.a.createElement("div",{className:"user-screen"},r.a.createElement(f,{onLogout:this.props.onLogout,onNightmode:this.props.onNightmode}),r.a.createElement("h2",null,"History"),r.a.createElement("div",{className:"history-box-outer"},this.props.migraines.map((function(t,a){return r.a.createElement("div",{className:"history-box",key:t+a},r.a.createElement("p",null,r.a.createElement("span",null,"Started at"),r.a.createElement("br",null)," ",t.start.slice(11,16)," on"," ",t.start.slice(8,10),".",t.start.slice(5,7),".",t.start.slice(0,4)),r.a.createElement("p",null,r.a.createElement("span",null,"Ended at"),r.a.createElement("br",null)," ",t.end.slice(11,16)," on"," ",t.end.slice(8,10),".",t.end.slice(5,7),".",t.end.slice(0,4)),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("span",null,"Pain level: "),t.painlevel),r.a.createElement("div",{className:"history-box-inner"},r.a.createElement("div",{className:"history-box-inner-group"},r.a.createElement("p",null,r.a.createElement("span",null,"Symptoms:")),r.a.createElement("ul",null,t.symptoms.map((function(e,t){return r.a.createElement("li",{key:e+1},e)})))),r.a.createElement("div",{className:"history-box-inner-group"},r.a.createElement("p",null,r.a.createElement("span",null,"Triggers:")),r.a.createElement("ul",null,t.triggers.map((function(e,t){return r.a.createElement("li",{key:e+1},e)})))),r.a.createElement("div",{className:"history-box-inner-group"},r.a.createElement("p",null,r.a.createElement("span",null,"Remedies tried:")),r.a.createElement("ul",null,t.remedies.map((function(e,t){return r.a.createElement("li",{key:e+1},e)})))),r.a.createElement("p",null,r.a.createElement("span",null,"Remedy that worked best:"),r.a.createElement("br",null)," ",t.faveRemedy)),r.a.createElement("p",null,r.a.createElement("span",null,"Notes:"),r.a.createElement("br",null)," ",t.notes),r.a.createElement("div",{className:"history-buttons"},r.a.createElement("button",{className:"button",onClick:function(){return e.props.onDelete(t._id)}},"Delete"),r.a.createElement(h.b,{to:"/migraines/".concat(t._id,"/edit")},r.a.createElement("button",{className:"button"},"Edit"))))}))),r.a.createElement(v,null)):r.a.createElement("p",null,"Loading")}}]),a}(r.a.Component),w=a(1),C=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={guardianArticles:[],nytArticles:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;w.get("https://content.guardianapis.com/search?q=migraine&api-key=".concat("1019989d-238b-41b0-bcbd-14f849519a7b")).then((function(t){e.setState({guardianArticles:t.data.response.results})})),w.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=migraine&api-key=".concat("SuACcCfgkvdsX6AlGBNsnwqNqTHvGsFf")).then((function(t){e.setState({nytArticles:t.data.response.docs})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"user-screen"},r.a.createElement(f,{onLogout:this.props.onLogout,onNightmode:this.props.onNightmode}),r.a.createElement("h2",null,"Explore Media"),r.a.createElement("div",{className:"media-box-outer"},r.a.createElement("div",{className:"media-box"},r.a.createElement("h4",null,"The Guardian"),this.state.guardianArticles.filter((function(e,t){return t<3})).map((function(e,t){return r.a.createElement("div",{className:"media-box-inner",key:e+t},r.a.createElement("h5",null,e.webTitle),r.a.createElement("a",{href:e.webUrl,target:"_blank",rel:"noopener noreferrer"},"Read more on The Guardian Website"))}))),r.a.createElement("div",{className:"media-box"},r.a.createElement("h4",null,"The New York Times"),this.state.nytArticles.filter((function(e,t){return t<3})).map((function(e,t){return r.a.createElement("div",{className:"media-box-inner",key:e+t},r.a.createElement("h5",null,e.abstract),r.a.createElement("a",{href:e.web_url,target:"_blank",rel:"noopener noreferrer"},"Read more on The New York Times Website"))})))),r.a.createElement(h.b,{to:"/recommendations"},r.a.createElement("button",{className:"button"},"See Tips")),r.a.createElement(v,null))}}]),a}(n.Component),T=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={loggedInUser:e.props.loggedInUser},e.handleSubmit=function(t){e.props.onSubmit(t),document.getElementById("tipname").value="",document.getElementById("tipdescription").value=""},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.state.loggedInUser||p.a.get("".concat(g,"/user"),{withCredentials:!0}).then((function(t){e.setState({loggedInUser:t.data})})).catch((function(){return r.a.createElement(u.a,{to:"/login"})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"user-screen"},r.a.createElement(f,{onLogout:this.props.onLogout,onNightmode:this.props.onNightmode}),r.a.createElement("h2",null,"Community tips"),r.a.createElement("div",{className:"tip-box-outer"},r.a.createElement("div",{className:"tip-box-inner"},r.a.createElement("form",{className:"new-migraine-form",onSubmit:this.handleSubmit},r.a.createElement("label",{className:"new-migraine-question",htmlFor:"tip-name"},"What helps me"),r.a.createElement("input",{id:"tipname",name:"tipname",type:"text"}),r.a.createElement("label",{className:"new-migraine-question",htmlFor:"tip-description"},"Description"),r.a.createElement("textarea",{id:"tipdescription",name:"tipdescription",cols:"1",rows:"3",type:"text"}),r.a.createElement("button",{className:"button",type:"submit"},"Add tip"))),r.a.createElement("div",{className:"tip-box-inner tip-box-list"},this.props.tips.map((function(t,a){return r.a.createElement("article",{key:t+a},r.a.createElement("h4",null,t.name),r.a.createElement("p",null,t.description," (Rating: ",t.rating,")"),e.state.loggedInUser._id===t.userID?r.a.createElement("button",{onClick:function(){return e.props.onDelete(t._id)},className:"tip-button button"},"Delete"):r.a.createElement("button",{className:"tip-button tip-like-button button",onClick:function(){return e.props.onLike(t._id)}},"Like"))})))),r.a.createElement(v,null))}}]),a}(r.a.Component);function D(e){return r.a.createElement("div",{className:"auth-screen"},r.a.createElement("h2",null,"Log In"),r.a.createElement("form",{className:"auth-form",onSubmit:e.onLogin},r.a.createElement("input",{name:"email",type:"email",placeholder:"Email"}),r.a.createElement("input",{name:"password",type:"password",placeholder:"Password"}),r.a.createElement("button",{className:"button",type:"submit"},"Log In")),e.errorMessage&&r.a.createElement("p",{className:"auth-error"},e.errorMessage))}function L(e){return r.a.createElement("div",{className:"auth-screen"},r.a.createElement("h2",null,"Sign Up"),r.a.createElement("form",{className:"auth-form",onSubmit:e.onSignup},r.a.createElement("input",{name:"username",type:"text",placeholder:"Username"}),r.a.createElement("input",{name:"email",type:"email",placeholder:"Email"}),r.a.createElement("input",{name:"password",type:"password",placeholder:"Password"}),r.a.createElement("button",{className:"button",type:"submit"},"Sign Up")),e.errorMessage&&r.a.createElement("p",{className:"auth-error"},e.errorMessage))}var O=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={migraines:[],tips:[],loggedInUser:null,signUpError:null,logInError:null,migraineFormError:null,tipFormError:null},e.handleCreateMigraine=function(t,a,n,r){t.preventDefault();var i=t.currentTarget,l=i.start,s=i.end,o=i.painlevel,c=i.notes,m=i.faveRemedy;p.a.post("".concat(g,"/migraines/create"),{start:l.value,end:s.value,painlevel:o.value,symptoms:a,triggers:n,remedies:r,notes:c.value,faveRemedy:m.value},{withCredentials:!0}).then((function(t){var a=JSON.parse(JSON.stringify(e.state.migraines));a.unshift(t.data),e.setState({migraines:a},(function(){e.props.history.push("/migraines/history")}))})).catch((function(t){e.setState({migraineFormError:t.response.data.errorMessage})}))},e.handleDeleteMigraine=function(t){console.log(e.state.migraines),p.a.delete("".concat(g,"/migraines/").concat(t),{withCredentials:!0}).then((function(){var a=e.state.migraines.filter((function(e){return e._id!==t}));e.setState({migraines:a},(function(){e.props.history.push("/migraines/history")}))}))},e.handleEditMigraine=function(t,a,n,r,i){t.preventDefault();var l=t.currentTarget,s=l.start,o=l.end,c=l.painlevel,m=l.notes,u=l.faveRemedy;console.log("UpdatedMigraine",i);var d={start:s.value,end:o.value,painlevel:c.value,symptoms:a,triggers:n,remedies:r,notes:m.value,faveRemedy:u.value};p.a.patch("".concat(g,"/migraines/").concat(i._id),d,{withCredentials:!0}).then((function(){var t=e.state.migraines.map((function(e){return console.log(e._id),console.log(i._id),e._id===i._id&&(e=d),e}));console.log("cloneMigraines",t),e.setState({migraines:t},(function(){e.props.history.push("/migraines/history")}))}))},e.handleSignup=function(t){t.preventDefault();var a=t.currentTarget,n=a.username,r=a.email,i=a.password;p.a.post("".concat(g,"/signup"),{username:n.value,email:r.value,password:i.value},{withCredentials:!0}).then((function(t){e.setState({loggedInUser:t.data},(function(){e.props.history.push("/migraines/new")}))})).catch((function(t){e.setState({signUpError:t.response.data.errorMessage})}))},e.handleLogin=function(t){t.preventDefault();var a=t.currentTarget,n=a.email,r=a.password;p.a.post("".concat(g,"/signin"),{email:n.value,password:r.value},{withCredentials:!0}).then((function(t){e.setState({loggedInUser:t.data},(function(){e.props.history.push("/migraines/new")}))})).catch((function(t){console.log(t.response),e.setState({logInError:t.response.data.error})}))},e.handleLogout=function(){console.log("TIME TO LOG OUT"),p.a.post("".concat(g,"/logout"),{},{withCredentials:!0}).then((function(){e.setState({loggedInUser:null},(function(){e.props.history.push("/")}))}))},e.handleNightmode=function(){var e=document.querySelector("body");e.classList.contains("nightmode")?e.classList.remove("nightmode"):e.classList.add("nightmode")},e.handleCreateTip=function(t){t.preventDefault();var a=t.currentTarget,n=a.tipname,r=a.tipdescription;p.a.post("".concat(g,"/tips/create"),{name:n.value,description:r.value},{withCredentials:!0}).then((function(t){var a=JSON.parse(JSON.stringify(e.state.tips));a.unshift(t.data),e.setState({tips:a},(function(){e.props.history.push("/recommendations")}))})).catch((function(t){e.setState({tipFormError:t.response.data.errorMessage})}))},e.handleDeleteTip=function(t){p.a.delete("".concat(g,"/tips/").concat(t),{withCredentials:!0}).then((function(){var a=e.state.tips.filter((function(e){return e._id!==t}));e.setState({tips:a},(function(){e.props.history.push("/recommendations")}))}))},e.handleLikeTip=function(t){p.a.patch("".concat(g,"/tips/").concat(t),{},{withCredentials:!0}).then((function(a){var n=e.state.tips.map((function(e){return e._id===t&&(e=a.data),e}));e.setState({tips:n},(function(){e.props.history.push("/recommendations")}))}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("".concat(g,"/migraines"),{withCredentials:!0}).then((function(t){p.a.get("".concat(g,"/tips"),{withCredentials:!0}).then((function(a){e.setState({migraines:t.data,tips:a.data})}))})),this.state.loggedInUser||p.a.get("".concat(g,"/user"),{withCredentials:!0}).then((function(t){e.setState({loggedInUser:t.data})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/",component:E}),r.a.createElement(u.b,{path:"/migraines/new",render:function(t){return r.a.createElement(b,Object.assign({loggedInUser:e.state.loggedInUser,onSubmit:e.handleCreateMigraine,onLogout:e.handleLogout,onNightmode:e.handleNightmode,errorMessage:e.state.migraineFormError},t))}}),r.a.createElement(u.b,{path:"/migraines/stats",render:function(){return r.a.createElement(k,{loggedInUser:e.state.loggedInUser,migraines:e.state.migraines,onNightmode:e.handleNightmode,onLogout:e.handleLogout})}}),r.a.createElement(u.b,{path:"/migraines/history",render:function(){return r.a.createElement(S,{loggedInUser:e.state.loggedInUser,migraines:e.state.migraines,onNightmode:e.handleNightmode,onLogout:e.handleLogout,onDelete:e.handleDeleteMigraine})}}),r.a.createElement(u.b,{path:"/migraines/:id/edit",render:function(t){return r.a.createElement(y,Object.assign({loggedInUser:e.state.loggedInUser,onLogout:e.handleLogout,onNightmode:e.handleNightmode,onEdit:e.handleEditMigraine},t))}}),r.a.createElement(u.b,{path:"/explore",render:function(){return r.a.createElement(C,{onLogout:e.handleLogout,onNightmode:e.handleNightmode})}}),r.a.createElement(u.b,{path:"/recommendations",render:function(){return r.a.createElement(T,{onLogout:e.handleLogout,onNightmode:e.handleNightmode,tips:e.state.tips,loggedInUser:e.state.loggedInUser,onSubmit:e.handleCreateTip,onDelete:e.handleDeleteTip,onLike:e.handleLikeTip})}}),r.a.createElement(u.b,{path:"/login",render:function(){return r.a.createElement(D,{onLogin:e.handleLogin,errorMessage:e.state.logInError})}}),r.a.createElement(u.b,{path:"/signup",render:function(){return r.a.createElement(L,{onSignup:e.handleSignup,errorMessage:e.state.signUpError})}})))}}]),a}(r.a.Component),I=Object(u.g)(O);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(h.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,t,a){e.exports=a(190)},73:function(e,t,a){},75:function(e,t,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.6aca76e0.chunk.js.map