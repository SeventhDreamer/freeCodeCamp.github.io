var clearOnNextOperation = false;
var previouslyAnOperator = true;

var integers = []; //holds numbers that will be processed later
var operators = []; //holds operators that will be processed later

function processHighPriority(){
  var n =[];
  var hop =[];
  //pop off higher priority operators on the stack so they can be evaluated left to right
  //also pop off associated values
      while (operators[operators.length - 1] == "x" || operators[operators.length - 1] == "/") {
        n.push(integers.pop());
        hop.push(operators.pop());
      }
  //execute the high priority operators
      for(var i =n.length-1; i >=0; i--){
        if (hop[i] == "/") {
          integers[integers.length - 1] = integers[integers.length - 1] / n[i];
        } else {
          integers[integers.length - 1] = integers[integers.length - 1] * n[i];
        }
      }
}

//adds the next number to the equation
function addValue(op) {
  integers.push(Number(document.getElementById("elm").innerHTML));

  if (operators.length == 0) {
    //the first operator is always pushed on the stack
    operators.push(op);
  } else {
    if (op == "+" || op == "-") {
      processHighPriority();
      operators.push(op);
    } else {
      operators.push(op);
    }
  }  
}

//evaluate the final expression
function equals() {
  processHighPriority();
  
  var result = integers.shift();
  var op = operators.shift();
  while (integers.length > 0) {
    var num = integers.shift();
    switch (op) {
      case "+":
        result += num;
        break;
      case "-":
        result -= num;
        break;
      case "x":
        result *= num;
        break;
      case "/":
        result /= num;
        break;
    }
    op = operators.shift();
  }
  return Math.round(result*100)/100;
}

//reset everything to the initial state
document.getElementById("clear").onclick = clear;
function clear() {
  document.getElementById("elm").innerHTML = "";
  document.getElementById("exp").innerHTML = "";
  integers = [];
  operators = [];
  previouslyAnOperator = true;
  clearOnNextOperation = false;
}


//remove the last typed number
document.getElementById("backspace").onclick = backspace;
function backspace() {
  if (document.getElementById("elm").innerHTML != "") {
    var temp = "";
    temp = document.getElementById("elm").innerHTML;
    if (temp.length == 1) previouslyAnOperator = true;

    document.getElementById("elm").innerHTML = temp.substring(
      0,
      temp.length - 1
    );
  }
};

//updates the display to reflect the actions taken
function numberComplete() {
  if (clearOnNextOperation) {
    document.getElementById("exp").innerHTML = "";
    clearOnNextOperation = false;
  }
  document.getElementById("exp").innerHTML += document.getElementById(
    "elm"
  ).innerHTML;
  document.getElementById("elm").innerHTML = "";
}

document.getElementById("multiply").onclick = multiply;
function multiply() {
  if (!previouslyAnOperator) {
    addValue("x");
    numberComplete();
    document.getElementById("exp").innerHTML += "x";
    previouslyAnOperator = true;
  }
};
document.getElementById("add").onclick = add;
function add() {
  if (!previouslyAnOperator) {
    addValue("+");
    numberComplete();
    document.getElementById("exp").innerHTML += "+";
    previouslyAnOperator = true;
  }
};
document.getElementById("subtract").onclick = subtract;
function subtract() {
  if (!previouslyAnOperator) {
    addValue("-");
    numberComplete();
    document.getElementById("exp").innerHTML += "-";
    previouslyAnOperator = true;
  }
};
document.getElementById("divide").onclick = divide;
function divide() {
  if (!previouslyAnOperator) {
    addValue("/");
    numberComplete();
    document.getElementById("exp").innerHTML += "/";
    previouslyAnOperator = true;
  }
};
document.getElementById("equal").onclick = equal;
function equal() {
  if (!previouslyAnOperator) {
    integers.push(Number(document.getElementById("elm").innerHTML));
    numberComplete();
    document.getElementById("exp").innerHTML += " = " + equals();
    clearOnNextOperation = true;
    previouslyAnOperator = true;
  }
};


document.getElementById("one").onclick = a1;
  function a1() {
  document.getElementById("elm").innerHTML += 1;
  previouslyAnOperator = false;
}
document.getElementById("two").onclick = a2;
function a2() {
  document.getElementById("elm").innerHTML += 2;
  previouslyAnOperator = false;
}
document.getElementById("three").onclick = a3;
function a3() {
  document.getElementById("elm").innerHTML += 3;
  previouslyAnOperator = false;
}
document.getElementById("four").onclick = a4;
function a4() {
  document.getElementById("elm").innerHTML += 4;
  previouslyAnOperator = false;
}
document.getElementById("five").onclick = a5;
function a5() {
  document.getElementById("elm").innerHTML += 5;
  previouslyAnOperator = false;
}
document.getElementById("six").onclick = a6;
function a6() {
  document.getElementById("elm").innerHTML += 6;
  previouslyAnOperator = false;
}
document.getElementById("seven").onclick = a7;
function a7() {
  document.getElementById("elm").innerHTML += 7;
  previouslyAnOperator = false;
}
document.getElementById("eight").onclick = a8;
function a8() {
  document.getElementById("elm").innerHTML += 8;
  previouslyAnOperator = false;
}
document.getElementById("nine").onclick = a9;
function a9() {
  document.getElementById("elm").innerHTML += 9;
  previouslyAnOperator = false;
}
document.getElementById("zero").onclick = a0;
function a0() {
  document.getElementById("elm").innerHTML += 0;
  previouslyAnOperator = false;
}
document.getElementById("period").onclick = a;
function a() {
  if(document.getElementById("elm").innerHTML.indexOf(".") == -1)
  document.getElementById("elm").innerHTML += ".";
}

/*
  Keypress version 2.1.5 (c) 2018 David Mauro.
  Licensed under the Apache License, Version 2.0
  http://www.apache.org/licenses/LICENSE-2.0
*/
(function(){var o,u,x,y,z,r,v,A,E,B,F,G,q,s,p,k,t,C,H,D={}.hasOwnProperty,j=[].indexOf||function(a){for(var c=0,b=this.length;c<b;c++)if(c in this&&this[c]===a)return c;return-1};r={is_unordered:!1,is_counting:!1,is_exclusive:!1,is_solitary:!1,prevent_default:!1,prevent_repeat:!1,normalize_caps_lock:!1};C="meta alt option ctrl shift cmd".split(" ");k="ctrl";o={debug:!1};var w=function(a){var c,b;for(c in a)D.call(a,c)&&(b=a[c],!1!==b&&(this[c]=b));this.keys=this.keys||[];this.count=this.count||0};
w.prototype.allows_key_repeat=function(){return!this.prevent_repeat&&"function"===typeof this.on_keydown};w.prototype.reset=function(){this.count=0;return this.keyup_fired=null};var g=function(a,c){var b,d;"undefined"!==typeof jQuery&&null!==jQuery&&a instanceof jQuery&&(1!==a.length&&p("Warning: your jQuery selector should have exactly one object."),a=a[0]);this.should_force_event_defaults=this.should_suppress_event_defaults=!1;this.sequence_delay=800;this._registered_combos=[];this._keys_down=[];
this._active_combos=[];this._sequence=[];this._sequence_timer=null;this._prevent_capture=!1;this._defaults=c||{};for(b in r)D.call(r,b)&&(d=r[b],this._defaults[b]=this._defaults[b]||d);this.element=a||document.body;b=function(a,b,c){a.addEventListener?a.addEventListener(b,c):a.attachEvent&&a.attachEvent("on"+b,c);return c};var e=this;this.keydown_event=b(this.element,"keydown",function(a){a=a||window.event;e._receive_input(a,true);return e._bug_catcher(a)});var f=this;this.keyup_event=b(this.element,
"keyup",function(a){a=a||window.event;return f._receive_input(a,false)});var h=this;this.blur_event=b(window,"blur",function(){var a,b,c,d;d=h._keys_down;b=0;for(c=d.length;b<c;b++){a=d[b];h._key_up(a,{})}return h._keys_down=[]})};g.prototype.destroy=function(){var a;a=function(a,b,d){if(null!=a.removeEventListener)return a.removeEventListener(b,d);if(null!=a.removeEvent)return a.removeEvent("on"+b,d)};a(this.element,"keydown",this.keydown_event);a(this.element,"keyup",this.keyup_event);return a(window,
"blur",this.blur_event)};g.prototype._bug_catcher=function(a){var c,b;if("cmd"===k&&0<=j.call(this._keys_down,"cmd")&&"cmd"!==(c=y(null!=(b=a.keyCode)?b:a.key))&&"shift"!==c&&"alt"!==c&&"caps"!==c&&"tab"!==c)return this._receive_input(a,!1)};g.prototype._cmd_bug_check=function(a){return"cmd"===k&&0<=j.call(this._keys_down,"cmd")&&0>j.call(a,"cmd")?!1:!0};g.prototype._prevent_default=function(a,c){if((c||this.should_suppress_event_defaults)&&!this.should_force_event_defaults)if(a.preventDefault?a.preventDefault():
a.returnValue=!1,a.stopPropagation)return a.stopPropagation()};g.prototype._get_active_combos=function(a){var c,b;c=[];b=v(this._keys_down,function(b){return b!==a});b.push(a);this._match_combo_arrays(b,function(a){return function(b){if(a._cmd_bug_check(b.keys))return c.push(b)}}(this));this._fuzzy_match_combo_arrays(b,function(a){return function(b){if(!(0<=j.call(c,b))&&!b.is_solitary&&a._cmd_bug_check(b.keys))return c.push(b)}}(this));return c};g.prototype._get_potential_combos=function(a){var c,
b,d,e,f;b=[];f=this._registered_combos;d=0;for(e=f.length;d<e;d++)c=f[d],c.is_sequence||0<=j.call(c.keys,a)&&this._cmd_bug_check(c.keys)&&b.push(c);return b};g.prototype._add_to_active_combos=function(a){var c,b,d,e,f,h,i,g,n,l,m;h=!1;f=!0;d=!1;if(0<=j.call(this._active_combos,a))return!0;if(this._active_combos.length){e=i=0;for(l=this._active_combos.length;0<=l?i<l:i>l;e=0<=l?++i:--i)if((c=this._active_combos[e])&&c.is_exclusive&&a.is_exclusive){c=c.keys;if(!h){g=0;for(n=c.length;g<n;g++)if(b=c[g],
h=!0,0>j.call(a.keys,b)){h=!1;break}}if(f&&!h){m=a.keys;g=0;for(n=m.length;g<n;g++)if(b=m[g],f=!1,0>j.call(c,b)){f=!0;break}}h&&(d?(c=this._active_combos.splice(e,1)[0],null!=c&&c.reset()):(c=this._active_combos.splice(e,1,a)[0],null!=c&&c.reset(),d=!0),f=!1)}}f&&this._active_combos.unshift(a);return h||f};g.prototype._remove_from_active_combos=function(a){var c,b,d,e;b=d=0;for(e=this._active_combos.length;0<=e?d<e:d>e;b=0<=e?++d:--d)if(c=this._active_combos[b],c===a){a=this._active_combos.splice(b,
1)[0];a.reset();break}};g.prototype._get_possible_sequences=function(){var a,c,b,d,e,f,h,i,g,n,l,m;d=[];n=this._registered_combos;f=0;for(g=n.length;f<g;f++){a=n[f];c=h=1;for(l=this._sequence.length;1<=l?h<=l:h>=l;c=1<=l?++h:--h)if(e=this._sequence.slice(-c),a.is_sequence){if(0>j.call(a.keys,"shift")&&(e=v(e,function(a){return"shift"!==a}),!e.length))continue;c=i=0;for(m=e.length;0<=m?i<m:i>m;c=0<=m?++i:--i)if(a.keys[c]===e[c])b=!0;else{b=!1;break}b&&d.push(a)}}return d};g.prototype._add_key_to_sequence=
function(a,c){var b,d,e,f;this._sequence.push(a);d=this._get_possible_sequences();if(d.length){e=0;for(f=d.length;e<f;e++)b=d[e],this._prevent_default(c,b.prevent_default);this._sequence_timer&&clearTimeout(this._sequence_timer);if(-1<this.sequence_delay){var h=this;this._sequence_timer=setTimeout(function(){return h._sequence=[]},this.sequence_delay)}}else this._sequence=[]};g.prototype._get_sequence=function(a){var c,b,d,e,f,h,i,g,n,l,m,k;l=this._registered_combos;h=0;for(n=l.length;h<n;h++)if(c=
l[h],c.is_sequence){b=i=1;for(m=this._sequence.length;1<=m?i<=m:i>=m;b=1<=m?++i:--i)if(f=v(this._sequence,function(a){return 0<=j.call(c.keys,"shift")?!0:"shift"!==a}).slice(-b),c.keys.length===f.length){b=g=0;for(k=f.length;0<=k?g<k:g>k;b=0<=k?++g:--g)if(e=f[b],!(0>j.call(c.keys,"shift")&&"shift"===e)&&!("shift"===a&&0>j.call(c.keys,"shift")))if(c.keys[b]===e)d=!0;else{d=!1;break}}if(d)return c.is_exclusive&&(this._sequence=[]),c}return!1};g.prototype._receive_input=function(a,c){var b,d;if(this._prevent_capture)this._keys_down.length&&
(this._keys_down=[]);else if(b=y(null!=(d=a.keyCode)?d:a.key),(c||this._keys_down.length||!("alt"===b||b===k))&&b)return c?this._key_down(b,a):this._key_up(b,a)};g.prototype._fire=function(a,c,b,d){"function"===typeof c["on_"+a]&&this._prevent_default(b,!0!==c["on_"+a].call(c["this"],b,c.count,d));"release"===a&&(c.count=0);if("keyup"===a)return c.keyup_fired=!0};g.prototype._match_combo_arrays=function(a,c){var b,d,e,f,h;h=this._registered_combos;e=0;for(f=h.length;e<f;e++)d=h[e],b=a.slice(0),d.normalize_caps_lock&&
0<=j.call(b,"caps")&&b.splice(b.indexOf("caps"),1),(!d.is_unordered&&x(b,d.keys)||d.is_unordered&&u(b,d.keys))&&c(d)};g.prototype._fuzzy_match_combo_arrays=function(a,c){var b,d,e,f;f=this._registered_combos;d=0;for(e=f.length;d<e;d++)b=f[d],(!b.is_unordered&&B(b.keys,a)||b.is_unordered&&E(b.keys,a))&&c(b)};g.prototype._keys_remain=function(a){var c,b,d,e;e=a.keys;b=0;for(d=e.length;b<d;b++)if(a=e[b],0<=j.call(this._keys_down,a)){c=!0;break}return c};g.prototype._key_down=function(a,c){var b,d,e,
f,h;(b=z(a,c))&&(a=b);this._add_key_to_sequence(a,c);(b=this._get_sequence(a))&&this._fire("keydown",b,c);for(e in t)b=t[e],c[b]&&(e===a||0<=j.call(this._keys_down,e)||this._keys_down.push(e));for(e in t)if(b=t[e],e!==a&&0<=j.call(this._keys_down,e)&&!c[b]&&!("cmd"===e&&"cmd"!==k)){b=d=0;for(f=this._keys_down.length;0<=f?d<f:d>f;b=0<=f?++d:--d)this._keys_down[b]===e&&this._keys_down.splice(b,1)}d=this._get_active_combos(a);e=this._get_potential_combos(a);f=0;for(h=d.length;f<h;f++)b=d[f],this._handle_combo_down(b,
e,a,c);if(e.length){d=0;for(f=e.length;d<f;d++)b=e[d],this._prevent_default(c,b.prevent_default)}0>j.call(this._keys_down,a)&&this._keys_down.push(a)};g.prototype._handle_combo_down=function(a,c,b,d){var e,f,h,g,k;if(0>j.call(a.keys,b))return!1;this._prevent_default(d,a&&a.prevent_default);e=!1;if(0<=j.call(this._keys_down,b)&&(e=!0,!a.allows_key_repeat()))return!1;h=this._add_to_active_combos(a,b);b=a.keyup_fired=!1;if(a.is_exclusive){g=0;for(k=c.length;g<k;g++)if(f=c[g],f.is_exclusive&&f.keys.length>
a.keys.length){b=!0;break}}if(!b&&(a.is_counting&&"function"===typeof a.on_keydown&&(a.count+=1),h))return this._fire("keydown",a,d,e)};g.prototype._key_up=function(a,c){var b,d,e,f,h,g;b=a;(e=z(a,c))&&(a=e);e=s[b];c.shiftKey?e&&0<=j.call(this._keys_down,e)||(a=b):b&&0<=j.call(this._keys_down,b)||(a=e);(f=this._get_sequence(a))&&this._fire("keyup",f,c);if(0>j.call(this._keys_down,a))return!1;f=h=0;for(g=this._keys_down.length;0<=g?h<g:h>g;f=0<=g?++h:--h)if((d=this._keys_down[f])===a||d===e||d===b){this._keys_down.splice(f,
1);break}d=this._active_combos.length;e=[];g=this._active_combos;f=0;for(h=g.length;f<h;f++)b=g[f],0<=j.call(b.keys,a)&&e.push(b);f=0;for(h=e.length;f<h;f++)b=e[f],this._handle_combo_up(b,c,a);if(1<d){h=this._active_combos;d=0;for(f=h.length;d<f;d++)b=h[d],void 0===b||0<=j.call(e,b)||this._keys_remain(b)||this._remove_from_active_combos(b)}};g.prototype._handle_combo_up=function(a,c,b){var d,e;this._prevent_default(c,a&&a.prevent_default);e=this._keys_remain(a);if(!a.keyup_fired&&(d=this._keys_down.slice(),
d.push(b),!a.is_solitary||u(d,a.keys)))this._fire("keyup",a,c),a.is_counting&&("function"===typeof a.on_keyup&&"function"!==typeof a.on_keydown)&&(a.count+=1);e||(this._fire("release",a,c),this._remove_from_active_combos(a))};g.prototype.simple_combo=function(a,c){return this.register_combo({keys:a,on_keydown:c})};g.prototype.counting_combo=function(a,c){return this.register_combo({keys:a,is_counting:!0,is_unordered:!1,on_keydown:c})};g.prototype.sequence_combo=function(a,c){return this.register_combo({keys:a,
on_keydown:c,is_sequence:!0,is_exclusive:!0})};g.prototype.register_combo=function(a){var c,b,d;"string"===typeof a.keys&&(a.keys=a.keys.split(" "));d=this._defaults;for(c in d)D.call(d,c)&&(b=d[c],void 0===a[c]&&(a[c]=b));a=new w(a);if(H(a))return this._registered_combos.push(a),a};g.prototype.register_many=function(a){var c,b,d,e;e=[];b=0;for(d=a.length;b<d;b++)c=a[b],e.push(this.register_combo(c));return e};g.prototype.unregister_combo=function(a){var c,b,d,e,f,g;if(!a)return!1;var i=this;b=function(a){var b,
c,d,e;e=[];b=c=0;for(d=i._registered_combos.length;0<=d?c<d:c>d;b=0<=d?++c:--c)if(a===i._registered_combos[b]){i._registered_combos.splice(b,1);break}else e.push(void 0);return e};if(a instanceof w)return b(a);if("string"===typeof a){a=a.split(" ");c=d=0;for(e=a.length;0<=e?d<e:d>e;c=0<=e?++d:--d)"meta"===a[c]&&(a[c]=k)}f=this._registered_combos;g=[];d=0;for(e=f.length;d<e;d++)c=f[d],null!=c&&(c.is_unordered&&u(a,c.keys)||!c.is_unordered&&x(a,c.keys)?g.push(b(c)):g.push(void 0));return g};g.prototype.unregister_many=
function(a){var c,b,d,e;e=[];b=0;for(d=a.length;b<d;b++)c=a[b],e.push(this.unregister_combo(c));return e};g.prototype.get_registered_combos=function(){return this._registered_combos};g.prototype.reset=function(){return this._registered_combos=[]};g.prototype.listen=function(){return this._prevent_capture=!1};g.prototype.stop_listening=function(){return this._prevent_capture=!0};g.prototype.get_meta_key=function(){return k};o.Listener=g;y=function(a){return q[a]};v=function(a,c){var b;if(a.filter)return a.filter(c);
var d,e,f;f=[];d=0;for(e=a.length;d<e;d++)b=a[d],c(b)&&f.push(b);return f};u=function(a,c){var b,d,e;if(a.length!==c.length)return!1;d=0;for(e=a.length;d<e;d++)if(b=a[d],!(0<=j.call(c,b)))return!1;return!0};x=function(a,c){var b,d,e;if(a.length!==c.length)return!1;b=d=0;for(e=a.length;0<=e?d<e:d>e;b=0<=e?++d:--d)if(a[b]!==c[b])return!1;return!0};E=function(a,c){var b,d,e;d=0;for(e=a.length;d<e;d++)if(b=a[d],0>j.call(c,b))return!1;return!0};A=Array.prototype.indexOf||function(a,c){var b,d,e;b=d=0;
for(e=a.length;0<=e?d<=e:d>=e;b=0<=e?++d:--d)if(a[b]===c)return b;return-1};B=function(a,c){var b,d,e,f;e=d=0;for(f=a.length;e<f;e++)if(b=a[e],b=A.call(c,b),b>=d)d=b;else return!1;return!0};p=function(){if(o.debug)return console.log.apply(console,arguments)};F=function(a){var c,b,d;c=!1;for(d in q)if(b=q[d],a===b){c=!0;break}if(!c)for(d in s)if(b=s[d],a===b){c=!0;break}return c};H=function(a){var c,b,d,e,f,g,i;f=!0;a.keys.length||p("You're trying to bind a combo with no keys:",a);b=g=0;for(i=a.keys.length;0<=
i?g<i:g>i;b=0<=i?++g:--g)d=a.keys[b],(c=G[d])&&(d=a.keys[b]=c),"meta"===d&&a.keys.splice(b,1,k),"cmd"===d&&p('Warning: use the "meta" key rather than "cmd" for Windows compatibility');i=a.keys;c=0;for(g=i.length;c<g;c++)d=i[c],F(d)||(p('Do not recognize the key "'+d+'"'),f=!1);if(0<=j.call(a.keys,"meta")||0<=j.call(a.keys,"cmd")){c=a.keys.slice();g=0;for(i=C.length;g<i;g++)d=C[g],-1<(b=A.call(c,d))&&c.splice(b,1);1<c.length&&(p("META and CMD key combos cannot have more than 1 non-modifier keys",a,
c),f=!1)}for(e in a)"undefined"===r[e]&&p("The property "+e+" is not a valid combo property. Your combo has still been registered.");return f};z=function(a,c){var b;if(!c.shiftKey)return!1;b=s[a];return null!=b?b:!1};t={cmd:"metaKey",ctrl:"ctrlKey",shift:"shiftKey",alt:"altKey"};G={escape:"esc",control:"ctrl",command:"cmd","break":"pause",windows:"cmd",option:"alt",caps_lock:"caps",apostrophe:"'",semicolon:";",tilde:"~",accent:"`",scroll_lock:"scroll",num_lock:"num"};s={"/":"?",".":">",",":"<","'":'"',
";":":","[":"{","]":"}","\\":"|","`":"~","=":"+","-":"_",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(","0":")"};q={"0":"\\",8:"backspace",9:"tab",12:"num",13:"enter",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"caps",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",44:"print",45:"insert",46:"delete",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",
75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",91:"cmd",92:"cmd",93:"cmd",96:"num_0",97:"num_1",98:"num_2",99:"num_3",100:"num_4",101:"num_5",102:"num_6",103:"num_7",104:"num_8",105:"num_9",106:"num_multiply",107:"num_add",108:"num_enter",109:"num_subtract",110:"num_decimal",111:"num_divide",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",124:"print",144:"num",145:"scroll",
186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",223:"`",224:"cmd",225:"alt",57392:"ctrl",63289:"num",59:";",61:"=",173:"-"};o._keycode_dictionary=q;o._is_array_in_array_sorted=B;-1!==navigator.userAgent.indexOf("Mac OS X")&&(k="cmd");-1!==navigator.userAgent.indexOf("Opera")&&(q["17"]="cmd");"function"===typeof define&&define.amd?define([],function(){return o}):"undefined"!==typeof exports&&null!==exports?exports.keypress=o:window.keypress=o}).call(this);

/////////////////////////////////////////////////////////////////////end of keypress library//////////////////////////////////////////////////////

var keyPressListener = new window.keypress.Listener();

keyPressListener.simple_combo("backspace", function() {
  backspace();
});

keyPressListener.register_combo({
  "keys"              : "shift *",
  "on_keydown"        : function() {
    multiply();
  },
  "is_exclusive"      : true
});
keyPressListener.simple_combo("num_multiply", function() {
  multiply();
});
keyPressListener.simple_combo("/", function() {
  divide();
});
keyPressListener.simple_combo("num_divide", function() {
  divide();
});

keyPressListener.register_combo({
  "keys"              : "shift +",
  "on_keydown"        : function() {
    add();
  },
  "is_exclusive"      : true
});
keyPressListener.simple_combo("num_add", function() {
  add();
});
keyPressListener.simple_combo("-", function() {
  subtract();
});
keyPressListener.simple_combo("num_subtract", function() {
  subtract();
});
keyPressListener.simple_combo("=", function() {
  equal();
});
keyPressListener.simple_combo("enter", function() {
  equal();
});

keyPressListener.simple_combo("1", function() {
  a1();
});
keyPressListener.simple_combo("num_1", function() {
  a1();
});
keyPressListener.simple_combo("2", function() {
  a2();
});
keyPressListener.simple_combo("num_2", function() {
  a2();
});
keyPressListener.simple_combo("3", function() {
  a3();
});
keyPressListener.simple_combo("num_3", function() {
  a3();
});
keyPressListener.simple_combo("4", function() {
  a4();
});
keyPressListener.simple_combo("num_4", function() {
  a4();
});
keyPressListener.simple_combo("5", function() {
  a5();
});
keyPressListener.simple_combo("num_5", function() {
  a5();
});
keyPressListener.simple_combo("6", function() {
  a6();
});
keyPressListener.simple_combo("num_6", function() {
  a6();
});
keyPressListener.simple_combo("7", function() {
  a7();
});
keyPressListener.simple_combo("num_7", function() {
  a7();
});
keyPressListener.simple_combo("8", function() {
  a8();
});
keyPressListener.simple_combo("num_8", function() {
  a8();
});
keyPressListener.simple_combo("9", function() {
  a9();
});
keyPressListener.simple_combo("num_9", function() {
  a9();
});
keyPressListener.simple_combo("0", function() {
  a0();
});
keyPressListener.simple_combo("num_0", function() {
  a0();
});
keyPressListener.simple_combo(".", function() {
  a();
});
keyPressListener.simple_combo("num_decimal", function() {
  a();
});