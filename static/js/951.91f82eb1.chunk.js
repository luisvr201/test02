"use strict";(self.webpackChunkauto_mindmapping=self.webpackChunkauto_mindmapping||[]).push([[951],{3951:(e,t,i)=>{i.d(t,{diagram:()=>x});var n=i(2954),r=i(6009),s=i(8586),a=i(9836),c=i(8584),o=i(8433),l=i(4299),h=(i(8703),i(7892),i(504),function(){var e=function(e,t,i,n){for(i=i||{},n=e.length;n--;i[e[n]]=t);return i},t=[1,3],i=[1,5],n=[1,6],r=[1,7],s=[1,8],a=[5,6,8,14,16,18,19,40,41,42,43,44,45,53,71,72],c=[1,22],o=[2,13],l=[1,26],h=[1,27],u=[1,28],d=[1,29],y=[1,30],p=[1,31],_=[1,24],g=[1,32],E=[1,33],R=[1,36],f=[71,72],m=[5,8,14,16,18,19,40,41,42,43,44,45,53,60,62,71,72],I=[1,56],b=[1,57],k=[1,58],S=[1,59],T=[1,60],N=[1,61],v=[1,62],x=[62,63],A=[1,74],q=[1,70],O=[1,71],w=[1,72],C=[1,73],D=[1,75],L=[1,79],F=[1,80],M=[1,77],P=[1,78],V=[5,8,14,16,18,19,40,41,42,43,44,45,53,71,72],Y={trace:function(){},yy:{},symbols_:{error:2,start:3,directive:4,NEWLINE:5,RD:6,diagram:7,EOF:8,openDirective:9,typeDirective:10,closeDirective:11,":":12,argDirective:13,acc_title:14,acc_title_value:15,acc_descr:16,acc_descr_value:17,acc_descr_multiline_value:18,open_directive:19,type_directive:20,arg_directive:21,close_directive:22,requirementDef:23,elementDef:24,relationshipDef:25,requirementType:26,requirementName:27,STRUCT_START:28,requirementBody:29,ID:30,COLONSEP:31,id:32,TEXT:33,text:34,RISK:35,riskLevel:36,VERIFYMTHD:37,verifyType:38,STRUCT_STOP:39,REQUIREMENT:40,FUNCTIONAL_REQUIREMENT:41,INTERFACE_REQUIREMENT:42,PERFORMANCE_REQUIREMENT:43,PHYSICAL_REQUIREMENT:44,DESIGN_CONSTRAINT:45,LOW_RISK:46,MED_RISK:47,HIGH_RISK:48,VERIFY_ANALYSIS:49,VERIFY_DEMONSTRATION:50,VERIFY_INSPECTION:51,VERIFY_TEST:52,ELEMENT:53,elementName:54,elementBody:55,TYPE:56,type:57,DOCREF:58,ref:59,END_ARROW_L:60,relationship:61,LINE:62,END_ARROW_R:63,CONTAINS:64,COPIES:65,DERIVES:66,SATISFIES:67,VERIFIES:68,REFINES:69,TRACES:70,unqString:71,qString:72,$accept:0,$end:1},terminals_:{2:"error",5:"NEWLINE",6:"RD",8:"EOF",12:":",14:"acc_title",15:"acc_title_value",16:"acc_descr",17:"acc_descr_value",18:"acc_descr_multiline_value",19:"open_directive",20:"type_directive",21:"arg_directive",22:"close_directive",28:"STRUCT_START",30:"ID",31:"COLONSEP",33:"TEXT",35:"RISK",37:"VERIFYMTHD",39:"STRUCT_STOP",40:"REQUIREMENT",41:"FUNCTIONAL_REQUIREMENT",42:"INTERFACE_REQUIREMENT",43:"PERFORMANCE_REQUIREMENT",44:"PHYSICAL_REQUIREMENT",45:"DESIGN_CONSTRAINT",46:"LOW_RISK",47:"MED_RISK",48:"HIGH_RISK",49:"VERIFY_ANALYSIS",50:"VERIFY_DEMONSTRATION",51:"VERIFY_INSPECTION",52:"VERIFY_TEST",53:"ELEMENT",56:"TYPE",58:"DOCREF",60:"END_ARROW_L",62:"LINE",63:"END_ARROW_R",64:"CONTAINS",65:"COPIES",66:"DERIVES",67:"SATISFIES",68:"VERIFIES",69:"REFINES",70:"TRACES",71:"unqString",72:"qString"},productions_:[0,[3,3],[3,2],[3,4],[4,3],[4,5],[4,2],[4,2],[4,1],[9,1],[10,1],[13,1],[11,1],[7,0],[7,2],[7,2],[7,2],[7,2],[7,2],[23,5],[29,5],[29,5],[29,5],[29,5],[29,2],[29,1],[26,1],[26,1],[26,1],[26,1],[26,1],[26,1],[36,1],[36,1],[36,1],[38,1],[38,1],[38,1],[38,1],[24,5],[55,5],[55,5],[55,2],[55,1],[25,5],[25,5],[61,1],[61,1],[61,1],[61,1],[61,1],[61,1],[61,1],[27,1],[27,1],[32,1],[32,1],[34,1],[34,1],[54,1],[54,1],[57,1],[57,1],[59,1],[59,1]],performAction:function(e,t,i,n,r,s,a){var c=s.length-1;switch(r){case 6:this.$=s[c].trim(),n.setAccTitle(this.$);break;case 7:case 8:this.$=s[c].trim(),n.setAccDescription(this.$);break;case 9:n.parseDirective("%%{","open_directive");break;case 10:n.parseDirective(s[c],"type_directive");break;case 11:s[c]=s[c].trim().replace(/'/g,'"'),n.parseDirective(s[c],"arg_directive");break;case 12:n.parseDirective("}%%","close_directive","pie");break;case 13:this.$=[];break;case 19:n.addRequirement(s[c-3],s[c-4]);break;case 20:n.setNewReqId(s[c-2]);break;case 21:n.setNewReqText(s[c-2]);break;case 22:n.setNewReqRisk(s[c-2]);break;case 23:n.setNewReqVerifyMethod(s[c-2]);break;case 26:this.$=n.RequirementType.REQUIREMENT;break;case 27:this.$=n.RequirementType.FUNCTIONAL_REQUIREMENT;break;case 28:this.$=n.RequirementType.INTERFACE_REQUIREMENT;break;case 29:this.$=n.RequirementType.PERFORMANCE_REQUIREMENT;break;case 30:this.$=n.RequirementType.PHYSICAL_REQUIREMENT;break;case 31:this.$=n.RequirementType.DESIGN_CONSTRAINT;break;case 32:this.$=n.RiskLevel.LOW_RISK;break;case 33:this.$=n.RiskLevel.MED_RISK;break;case 34:this.$=n.RiskLevel.HIGH_RISK;break;case 35:this.$=n.VerifyType.VERIFY_ANALYSIS;break;case 36:this.$=n.VerifyType.VERIFY_DEMONSTRATION;break;case 37:this.$=n.VerifyType.VERIFY_INSPECTION;break;case 38:this.$=n.VerifyType.VERIFY_TEST;break;case 39:n.addElement(s[c-3]);break;case 40:n.setNewElementType(s[c-2]);break;case 41:n.setNewElementDocRef(s[c-2]);break;case 44:n.addRelationship(s[c-2],s[c],s[c-4]);break;case 45:n.addRelationship(s[c-2],s[c-4],s[c]);break;case 46:this.$=n.Relationships.CONTAINS;break;case 47:this.$=n.Relationships.COPIES;break;case 48:this.$=n.Relationships.DERIVES;break;case 49:this.$=n.Relationships.SATISFIES;break;case 50:this.$=n.Relationships.VERIFIES;break;case 51:this.$=n.Relationships.REFINES;break;case 52:this.$=n.Relationships.TRACES}},table:[{3:1,4:2,6:t,9:4,14:i,16:n,18:r,19:s},{1:[3]},{3:10,4:2,5:[1,9],6:t,9:4,14:i,16:n,18:r,19:s},{5:[1,11]},{10:12,20:[1,13]},{15:[1,14]},{17:[1,15]},e(a,[2,8]),{20:[2,9]},{3:16,4:2,6:t,9:4,14:i,16:n,18:r,19:s},{1:[2,2]},{4:21,5:c,7:17,8:o,9:4,14:i,16:n,18:r,19:s,23:18,24:19,25:20,26:23,32:25,40:l,41:h,42:u,43:d,44:y,45:p,53:_,71:g,72:E},{11:34,12:[1,35],22:R},e([12,22],[2,10]),e(a,[2,6]),e(a,[2,7]),{1:[2,1]},{8:[1,37]},{4:21,5:c,7:38,8:o,9:4,14:i,16:n,18:r,19:s,23:18,24:19,25:20,26:23,32:25,40:l,41:h,42:u,43:d,44:y,45:p,53:_,71:g,72:E},{4:21,5:c,7:39,8:o,9:4,14:i,16:n,18:r,19:s,23:18,24:19,25:20,26:23,32:25,40:l,41:h,42:u,43:d,44:y,45:p,53:_,71:g,72:E},{4:21,5:c,7:40,8:o,9:4,14:i,16:n,18:r,19:s,23:18,24:19,25:20,26:23,32:25,40:l,41:h,42:u,43:d,44:y,45:p,53:_,71:g,72:E},{4:21,5:c,7:41,8:o,9:4,14:i,16:n,18:r,19:s,23:18,24:19,25:20,26:23,32:25,40:l,41:h,42:u,43:d,44:y,45:p,53:_,71:g,72:E},{4:21,5:c,7:42,8:o,9:4,14:i,16:n,18:r,19:s,23:18,24:19,25:20,26:23,32:25,40:l,41:h,42:u,43:d,44:y,45:p,53:_,71:g,72:E},{27:43,71:[1,44],72:[1,45]},{54:46,71:[1,47],72:[1,48]},{60:[1,49],62:[1,50]},e(f,[2,26]),e(f,[2,27]),e(f,[2,28]),e(f,[2,29]),e(f,[2,30]),e(f,[2,31]),e(m,[2,55]),e(m,[2,56]),e(a,[2,4]),{13:51,21:[1,52]},e(a,[2,12]),{1:[2,3]},{8:[2,14]},{8:[2,15]},{8:[2,16]},{8:[2,17]},{8:[2,18]},{28:[1,53]},{28:[2,53]},{28:[2,54]},{28:[1,54]},{28:[2,59]},{28:[2,60]},{61:55,64:I,65:b,66:k,67:S,68:T,69:N,70:v},{61:63,64:I,65:b,66:k,67:S,68:T,69:N,70:v},{11:64,22:R},{22:[2,11]},{5:[1,65]},{5:[1,66]},{62:[1,67]},e(x,[2,46]),e(x,[2,47]),e(x,[2,48]),e(x,[2,49]),e(x,[2,50]),e(x,[2,51]),e(x,[2,52]),{63:[1,68]},e(a,[2,5]),{5:A,29:69,30:q,33:O,35:w,37:C,39:D},{5:L,39:F,55:76,56:M,58:P},{32:81,71:g,72:E},{32:82,71:g,72:E},e(V,[2,19]),{31:[1,83]},{31:[1,84]},{31:[1,85]},{31:[1,86]},{5:A,29:87,30:q,33:O,35:w,37:C,39:D},e(V,[2,25]),e(V,[2,39]),{31:[1,88]},{31:[1,89]},{5:L,39:F,55:90,56:M,58:P},e(V,[2,43]),e(V,[2,44]),e(V,[2,45]),{32:91,71:g,72:E},{34:92,71:[1,93],72:[1,94]},{36:95,46:[1,96],47:[1,97],48:[1,98]},{38:99,49:[1,100],50:[1,101],51:[1,102],52:[1,103]},e(V,[2,24]),{57:104,71:[1,105],72:[1,106]},{59:107,71:[1,108],72:[1,109]},e(V,[2,42]),{5:[1,110]},{5:[1,111]},{5:[2,57]},{5:[2,58]},{5:[1,112]},{5:[2,32]},{5:[2,33]},{5:[2,34]},{5:[1,113]},{5:[2,35]},{5:[2,36]},{5:[2,37]},{5:[2,38]},{5:[1,114]},{5:[2,61]},{5:[2,62]},{5:[1,115]},{5:[2,63]},{5:[2,64]},{5:A,29:116,30:q,33:O,35:w,37:C,39:D},{5:A,29:117,30:q,33:O,35:w,37:C,39:D},{5:A,29:118,30:q,33:O,35:w,37:C,39:D},{5:A,29:119,30:q,33:O,35:w,37:C,39:D},{5:L,39:F,55:120,56:M,58:P},{5:L,39:F,55:121,56:M,58:P},e(V,[2,20]),e(V,[2,21]),e(V,[2,22]),e(V,[2,23]),e(V,[2,40]),e(V,[2,41])],defaultActions:{8:[2,9],10:[2,2],16:[2,1],37:[2,3],38:[2,14],39:[2,15],40:[2,16],41:[2,17],42:[2,18],44:[2,53],45:[2,54],47:[2,59],48:[2,60],52:[2,11],93:[2,57],94:[2,58],96:[2,32],97:[2,33],98:[2,34],100:[2,35],101:[2,36],102:[2,37],103:[2,38],105:[2,61],106:[2,62],108:[2,63],109:[2,64]},parseError:function(e,t){if(!t.recoverable){var i=new Error(e);throw i.hash=t,i}this.trace(e)},parse:function(e){var t=this,i=[0],n=[],r=[null],s=[],a=this.table,c="",o=0,l=0,h=s.slice.call(arguments,1),u=Object.create(this.lexer),d={yy:{}};for(var y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,y)&&(d.yy[y]=this.yy[y]);u.setInput(e,d.yy),d.yy.lexer=u,d.yy.parser=this,"undefined"==typeof u.yylloc&&(u.yylloc={});var p=u.yylloc;s.push(p);var _=u.options&&u.options.ranges;function g(){var e;return"number"!==typeof(e=n.pop()||u.lex()||1)&&(e instanceof Array&&(e=(n=e).pop()),e=t.symbols_[e]||e),e}"function"===typeof d.yy.parseError?this.parseError=d.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var E,R,f,m,I,b,k,S,T={};;){if(R=i[i.length-1],this.defaultActions[R]?f=this.defaultActions[R]:(null!==E&&"undefined"!=typeof E||(E=g()),f=a[R]&&a[R][E]),"undefined"===typeof f||!f.length||!f[0]){var N="";for(I in S=[],a[R])this.terminals_[I]&&I>2&&S.push("'"+this.terminals_[I]+"'");N=u.showPosition?"Parse error on line "+(o+1)+":\n"+u.showPosition()+"\nExpecting "+S.join(", ")+", got '"+(this.terminals_[E]||E)+"'":"Parse error on line "+(o+1)+": Unexpected "+(1==E?"end of input":"'"+(this.terminals_[E]||E)+"'"),this.parseError(N,{text:u.match,token:this.terminals_[E]||E,line:u.yylineno,loc:p,expected:S})}if(f[0]instanceof Array&&f.length>1)throw new Error("Parse Error: multiple actions possible at state: "+R+", token: "+E);switch(f[0]){case 1:i.push(E),r.push(u.yytext),s.push(u.yylloc),i.push(f[1]),E=null,l=u.yyleng,c=u.yytext,o=u.yylineno,p=u.yylloc;break;case 2:if(b=this.productions_[f[1]][1],T.$=r[r.length-b],T._$={first_line:s[s.length-(b||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(b||1)].first_column,last_column:s[s.length-1].last_column},_&&(T._$.range=[s[s.length-(b||1)].range[0],s[s.length-1].range[1]]),"undefined"!==typeof(m=this.performAction.apply(T,[c,l,o,d.yy,f[1],r,s].concat(h))))return m;b&&(i=i.slice(0,-1*b*2),r=r.slice(0,-1*b),s=s.slice(0,-1*b)),i.push(this.productions_[f[1]][0]),r.push(T.$),s.push(T._$),k=a[i[i.length-2]][i[i.length-1]],i.push(k);break;case 3:return!0}}return!0}},$={EOF:1,parseError:function(e,t){if(!this.yy.parser)throw new Error(e);this.yy.parser.parseError(e,t)},setInput:function(e,t){return this.yy=t||this.yy||{},this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var e=this._input[0];return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},unput:function(e){var t=e.length,i=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t),this.offset-=t;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===n.length?this.yylloc.first_column:0)+n[n.length-i.length].length-i[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-t]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput(),t=new Array(e.length+1).join("-");return e+this.upcomingInput()+"\n"+t+"^"},test_match:function(e,t){var i,n,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),(n=e[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],i=this.performAction.call(this,this.yy,this,t,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack){for(var s in r)this[s]=r[s];return!1}return!1},next:function(){if(this.done)return this.EOF;var e,t,i,n;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var r=this._currentRules(),s=0;s<r.length;s++)if((i=this._input.match(this.rules[r[s]]))&&(!t||i[0].length>t[0].length)){if(t=i,n=s,this.options.backtrack_lexer){if(!1!==(e=this.test_match(i,r[s])))return e;if(this._backtrack){t=!1;continue}return!1}if(!this.options.flex)break}return t?!1!==(e=this.test_match(t,r[n]))&&e:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var e=this.next();return e||this.lex()},begin:function(e){this.conditionStack.push(e)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(e){return(e=this.conditionStack.length-1-Math.abs(e||0))>=0?this.conditionStack[e]:"INITIAL"},pushState:function(e){this.begin(e)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(e,t,i,n){switch(i){case 0:return this.begin("open_directive"),19;case 1:return this.begin("type_directive"),20;case 2:return this.popState(),this.begin("arg_directive"),12;case 3:return this.popState(),this.popState(),22;case 4:return 21;case 5:return"title";case 6:return this.begin("acc_title"),14;case 7:return this.popState(),"acc_title_value";case 8:return this.begin("acc_descr"),16;case 9:return this.popState(),"acc_descr_value";case 10:this.begin("acc_descr_multiline");break;case 11:case 53:this.popState();break;case 12:return"acc_descr_multiline_value";case 13:return 5;case 14:case 15:case 16:break;case 17:return 8;case 18:return 6;case 19:return 28;case 20:return 39;case 21:return 31;case 22:return 30;case 23:return 33;case 24:return 35;case 25:return 37;case 26:return 40;case 27:return 41;case 28:return 42;case 29:return 43;case 30:return 44;case 31:return 45;case 32:return 46;case 33:return 47;case 34:return 48;case 35:return 49;case 36:return 50;case 37:return 51;case 38:return 52;case 39:return 53;case 40:return 64;case 41:return 65;case 42:return 66;case 43:return 67;case 44:return 68;case 45:return 69;case 46:return 70;case 47:return 56;case 48:return 58;case 49:return 60;case 50:return 63;case 51:return 62;case 52:this.begin("string");break;case 54:return"qString";case 55:return t.yytext=t.yytext.trim(),71}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:(\r?\n)+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:$)/i,/^(?:requirementDiagram\b)/i,/^(?:\{)/i,/^(?:\})/i,/^(?::)/i,/^(?:id\b)/i,/^(?:text\b)/i,/^(?:risk\b)/i,/^(?:verifyMethod\b)/i,/^(?:requirement\b)/i,/^(?:functionalRequirement\b)/i,/^(?:interfaceRequirement\b)/i,/^(?:performanceRequirement\b)/i,/^(?:physicalRequirement\b)/i,/^(?:designConstraint\b)/i,/^(?:low\b)/i,/^(?:medium\b)/i,/^(?:high\b)/i,/^(?:analysis\b)/i,/^(?:demonstration\b)/i,/^(?:inspection\b)/i,/^(?:test\b)/i,/^(?:element\b)/i,/^(?:contains\b)/i,/^(?:copies\b)/i,/^(?:derives\b)/i,/^(?:satisfies\b)/i,/^(?:verifies\b)/i,/^(?:refines\b)/i,/^(?:traces\b)/i,/^(?:type\b)/i,/^(?:docref\b)/i,/^(?:<-)/i,/^(?:->)/i,/^(?:-)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[\w][^\r\n\{\<\>\-\=]*)/i],conditions:{acc_descr_multiline:{rules:[11,12],inclusive:!1},acc_descr:{rules:[9],inclusive:!1},acc_title:{rules:[7],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},unqString:{rules:[],inclusive:!1},token:{rules:[],inclusive:!1},string:{rules:[53,54],inclusive:!1},INITIAL:{rules:[0,5,6,8,10,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,55],inclusive:!0}}};function U(){this.yy={}}return Y.lexer=$,U.prototype=Y,Y.Parser=U,new U}());h.parser=h;const u=h;let d=[],y={},p={},_={},g={};const E={RequirementType:{REQUIREMENT:"Requirement",FUNCTIONAL_REQUIREMENT:"Functional Requirement",INTERFACE_REQUIREMENT:"Interface Requirement",PERFORMANCE_REQUIREMENT:"Performance Requirement",PHYSICAL_REQUIREMENT:"Physical Requirement",DESIGN_CONSTRAINT:"Design Constraint"},RiskLevel:{LOW_RISK:"Low",MED_RISK:"Medium",HIGH_RISK:"High"},VerifyType:{VERIFY_ANALYSIS:"Analysis",VERIFY_DEMONSTRATION:"Demonstration",VERIFY_INSPECTION:"Inspection",VERIFY_TEST:"Test"},Relationships:{CONTAINS:"contains",COPIES:"copies",DERIVES:"derives",SATISFIES:"satisfies",VERIFIES:"verifies",REFINES:"refines",TRACES:"traces"},parseDirective:function(e,t,i){r.m.parseDirective(this,e,t,i)},getConfig:()=>(0,n.g)().req,addRequirement:(e,t)=>(void 0===p[e]&&(p[e]={name:e,type:t,id:y.id,text:y.text,risk:y.risk,verifyMethod:y.verifyMethod}),y={},p[e]),getRequirements:()=>p,setNewReqId:e=>{void 0!==y&&(y.id=e)},setNewReqText:e=>{void 0!==y&&(y.text=e)},setNewReqRisk:e=>{void 0!==y&&(y.risk=e)},setNewReqVerifyMethod:e=>{void 0!==y&&(y.verifyMethod=e)},setAccTitle:s.s,getAccTitle:s.g,setAccDescription:s.b,getAccDescription:s.a,addElement:e=>(void 0===g[e]&&(g[e]={name:e,type:_.type,docRef:_.docRef},n.l.info("Added new requirement: ",e)),_={},g[e]),getElements:()=>g,setNewElementType:e=>{void 0!==_&&(_.type=e)},setNewElementDocRef:e=>{void 0!==_&&(_.docRef=e)},addRelationship:(e,t,i)=>{d.push({type:e,src:t,dst:i})},getRelationships:()=>d,clear:()=>{d=[],y={},p={},_={},g={},(0,s.f)()}},R={CONTAINS:"contains",ARROW:"arrow"},f=R,m=(e,t)=>{let i=e.append("defs").append("marker").attr("id",R.CONTAINS+"_line_ending").attr("refX",0).attr("refY",t.line_height/2).attr("markerWidth",t.line_height).attr("markerHeight",t.line_height).attr("orient","auto").append("g");i.append("circle").attr("cx",t.line_height/2).attr("cy",t.line_height/2).attr("r",t.line_height/2).attr("fill","none"),i.append("line").attr("x1",0).attr("x2",t.line_height).attr("y1",t.line_height/2).attr("y2",t.line_height/2).attr("stroke-width",1),i.append("line").attr("y1",0).attr("y2",t.line_height).attr("x1",t.line_height/2).attr("x2",t.line_height/2).attr("stroke-width",1),e.append("defs").append("marker").attr("id",R.ARROW+"_line_ending").attr("refX",t.line_height).attr("refY",.5*t.line_height).attr("markerWidth",t.line_height).attr("markerHeight",t.line_height).attr("orient","auto").append("path").attr("d","M0,0\n      L".concat(t.line_height,",").concat(t.line_height/2,"\n      M").concat(t.line_height,",").concat(t.line_height/2,"\n      L0,").concat(t.line_height)).attr("stroke-width",1)};let I={},b=0;const k=(e,t)=>e.insert("rect","#"+t).attr("class","req reqBox").attr("x",0).attr("y",0).attr("width",I.rect_min_width+"px").attr("height",I.rect_min_height+"px"),S=(e,t,i)=>{let n=I.rect_min_width/2,r=e.append("text").attr("class","req reqLabel reqTitle").attr("id",t).attr("x",n).attr("y",I.rect_padding).attr("dominant-baseline","hanging"),s=0;i.forEach((e=>{0==s?r.append("tspan").attr("text-anchor","middle").attr("x",I.rect_min_width/2).attr("dy",0).text(e):r.append("tspan").attr("text-anchor","middle").attr("x",I.rect_min_width/2).attr("dy",.75*I.line_height).text(e),s++}));let a=1.5*I.rect_padding+s*I.line_height*.75;return e.append("line").attr("class","req-title-line").attr("x1","0").attr("x2",I.rect_min_width).attr("y1",a).attr("y2",a),{titleNode:r,y:a}},T=(e,t,i,n)=>{let r=e.append("text").attr("class","req reqLabel").attr("id",t).attr("x",I.rect_padding).attr("y",n).attr("dominant-baseline","hanging"),s=0;let a=[];return i.forEach((e=>{let t=e.length;for(;t>30&&s<3;){let i=e.substring(0,30);t=(e=e.substring(30,e.length)).length,a[a.length]=i,s++}if(3==s){let e=a[a.length-1];a[a.length-1]=e.substring(0,e.length-4)+"..."}else a[a.length]=e;s=0})),a.forEach((e=>{r.append("tspan").attr("x",I.rect_padding).attr("dy",I.line_height).text(e)})),r},N=function(e,t,i,r,s){const c=i.edge(v(t.src),v(t.dst)),o=(0,a.jvg)().x((function(e){return e.x})).y((function(e){return e.y})),l=e.insert("path","#"+r).attr("class","er relationshipLine").attr("d",o(c.points)).attr("fill","none");t.type==s.db.Relationships.CONTAINS?l.attr("marker-start","url("+n.d.getUrl(I.arrowMarkerAbsolute)+"#"+t.type+"_line_ending)"):(l.attr("stroke-dasharray","10,7"),l.attr("marker-end","url("+n.d.getUrl(I.arrowMarkerAbsolute)+"#"+f.ARROW+"_line_ending)")),((e,t,i,n)=>{const r=t.node().getTotalLength(),s=t.node().getPointAtLength(.5*r),a="rel"+b;b++;const c=e.append("text").attr("class","req relationshipLabel").attr("id",a).attr("x",s.x).attr("y",s.y).attr("text-anchor","middle").attr("dominant-baseline","middle").text(n).node().getBBox();e.insert("rect","#"+a).attr("class","req reqLabelBox").attr("x",s.x-c.width/2).attr("y",s.y-c.height/2).attr("width",c.width).attr("height",c.height).attr("fill","white").attr("fill-opacity","85%")})(e,l,0,"<<".concat(t.type,">>"))},v=e=>e.replace(/\s/g,"").replace(/\./g,"_"),x={parser:u,db:E,renderer:{draw:(e,t,i,r)=>{I=(0,n.g)().requirement,r.db.clear(),r.parser.parse(e);const s=I.securityLevel;let h;"sandbox"===s&&(h=(0,a.Ys)("#i"+t));const u=("sandbox"===s?(0,a.Ys)(h.nodes()[0].contentDocument.body):(0,a.Ys)("body")).select("[id='".concat(t,"']"));m(u,I);const d=new o.k({multigraph:!1,compound:!1,directed:!0}).setGraph({rankdir:I.layoutDirection,marginx:20,marginy:20,nodesep:100,edgesep:100,ranksep:100}).setDefaultEdgeLabel((function(){return{}}));let y=r.db.getRequirements(),p=r.db.getElements(),_=r.db.getRelationships();var g,E,R;g=y,E=d,R=u,Object.keys(g).forEach((e=>{let t=g[e];e=v(e),n.l.info("Added new requirement: ",e);const i=R.append("g").attr("id",e),r=k(i,"req-"+e);let s=S(i,e+"_title",["<<".concat(t.type,">>"),"".concat(t.name)]);T(i,e+"_body",["Id: ".concat(t.id),"Text: ".concat(t.text),"Risk: ".concat(t.risk),"Verification: ".concat(t.verifyMethod)],s.y);const a=r.node().getBBox();E.setNode(e,{width:a.width,height:a.height,shape:"rect",id:e})})),((e,t,i)=>{Object.keys(e).forEach((n=>{let r=e[n];const s=v(n),a=i.append("g").attr("id",s),c="element-"+s,o=k(a,c);let l=S(a,c+"_title",["<<Element>>","".concat(n)]);T(a,c+"_body",["Type: ".concat(r.type||"Not Specified"),"Doc Ref: ".concat(r.docRef||"None")],l.y);const h=o.node().getBBox();t.setNode(s,{width:h.width,height:h.height,shape:"rect",id:s})}))})(p,d,u),((e,t)=>{e.forEach((function(e){let i=v(e.src),n=v(e.dst);t.setEdge(i,n,{relationship:e})}))})(_,d),(0,c.bK)(d),function(e,t){t.nodes().forEach((function(i){void 0!==i&&void 0!==t.node(i)&&(e.select("#"+i),e.select("#"+i).attr("transform","translate("+(t.node(i).x-t.node(i).width/2)+","+(t.node(i).y-t.node(i).height/2)+" )"))}))}(u,d),_.forEach((function(e){N(u,e,d,t,r)}));const f=I.rect_padding,b=u.node().getBBox(),x=b.width+2*f,A=b.height+2*f;(0,l.c)(u,A,x,I.useMaxWidth),u.attr("viewBox","".concat(b.x-f," ").concat(b.y-f," ").concat(x," ").concat(A))}},styles:e=>"\n\n  marker {\n    fill: ".concat(e.relationColor,";\n    stroke: ").concat(e.relationColor,";\n  }\n\n  marker.cross {\n    stroke: ").concat(e.lineColor,";\n  }\n\n  svg {\n    font-family: ").concat(e.fontFamily,";\n    font-size: ").concat(e.fontSize,";\n  }\n\n  .reqBox {\n    fill: ").concat(e.requirementBackground,";\n    fill-opacity: 100%;\n    stroke: ").concat(e.requirementBorderColor,";\n    stroke-width: ").concat(e.requirementBorderSize,";\n  }\n  \n  .reqTitle, .reqLabel{\n    fill:  ").concat(e.requirementTextColor,";\n  }\n  .reqLabelBox {\n    fill: ").concat(e.relationLabelBackground,";\n    fill-opacity: 100%;\n  }\n\n  .req-title-line {\n    stroke: ").concat(e.requirementBorderColor,";\n    stroke-width: ").concat(e.requirementBorderSize,";\n  }\n  .relationshipLine {\n    stroke: ").concat(e.relationColor,";\n    stroke-width: 1;\n  }\n  .relationshipLabel {\n    fill: ").concat(e.relationLabelColor,";\n  }\n\n")}}}]);
//# sourceMappingURL=951.91f82eb1.chunk.js.map