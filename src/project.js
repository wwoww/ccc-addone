window.__require=function e(t,i,c){function o(s,l){if(!i[s]){if(!t[s]){var r=s.split("/");if(r=r[r.length-1],!t[r]){var a="function"==typeof __require&&__require;if(!l&&a)return a(r,!0);if(n)return n(r,!0);throw new Error("Cannot find module '"+s+"'")}}var h=i[s]={exports:{}};t[s][0].call(h.exports,function(e){return o(t[s][1][e]||e)},h,h.exports,e,t,i,c)}return i[s].exports}for(var n="function"==typeof __require&&__require,s=0;s<c.length;s++)o(c[s]);return o}({Colors:[function(e,t,i){"use strict";cc._RF.push(t,"e9e05xFVUZMZJxSkDzATeiN","Colors"),t.exports={startBg:new cc.color(89,69,61,255),overBg:new cc.color(89,69,61,255),gameBg:new cc.color(89,69,61,255),topBg:new cc.color(166,137,124,255),tileBg:new cc.color(166,137,124,255),powerBarBg:new cc.color(166,137,124,255),power:new cc.color(100,107,48,255),num1:new cc.color(217,202,184,255),num2:new cc.color(191,177,159,255),num3:new cc.color(166,133,104,255),num4:new cc.color(115,86,69,255),num5:new cc.color(64,40,32,255),num6:new cc.color(115,100,56,255),num7:new cc.color(140,89,70,255),num8:new cc.color(115,56,50,255),num9:new cc.color(115,32,32,255),num10:new cc.color(115,103,88,255),num11:new cc.color(140,121,97,255),num12:new cc.color(191,146,107,255),num13:new cc.color(191,140,11,255),num14:new cc.color(213,185,112,255),num15:new cc.color(174,122,98,255),num16:new cc.color(181,91,82,255),num17:new cc.color(107,86,85,255),num18:new cc.color(73,58,61,255),num19:new cc.color(176,125,98,255),num20:new cc.color(232,171,127,255),nums:new cc.color(222,153,36,255)},cc._RF.pop()},{}],Game:[function(e,t,i){"use strict";cc._RF.push(t,"39193I/GjtNX5AeIUv04rSw","Game");var c=e("Global"),o=e("Colors");cc.Class({extends:cc.Component,properties:{tilePre:{default:null,type:cc.Prefab},powerPre:{default:null,type:cc.Prefab},bg:{default:null,type:cc.Node},topBg:{default:null,type:cc.Node},tiles:{default:null,type:Array},powers:{default:null,type:Array},scoreLabel:{default:null,type:cc.Label},scoreNum:{default:null,type:cc.Label},tileBg:{default:null,type:cc.Node},powerBarBg:{default:null,type:cc.Node},star1:cc.AudioClip,star2:cc.AudioClip,star3:cc.AudioClip,star4:cc.AudioClip,star5:cc.AudioClip,star6:cc.AudioClip,star7:cc.AudioClip,bgMusic:cc.AudioClip,maxNum:0,isCal:!1},onDestroy:function(){cc.audioEngine.stopMusic(this.bgMusic)},onLoad:function(){cc.audioEngine.playMusic(this.bgMusic,!0),this.tiles=[[null,null,null,null,null],[null,null,null,null,null],[null,null,null,null,null],[null,null,null,null,null],[null,null,null,null,null]],this.powers=[null,null,null,null,null],this.bg.width=cc.winSize.width,this.bg.height=cc.winSize.height,this.bg.setPosition(-cc.winSize.width/2,-cc.winSize.height/2),this.bg.color=o.gameBg,this.topBg.width=cc.winSize.width-30,this.topBg.height=100,this.topBg.setPosition(-cc.winSize.width/2+15,(cc.winSize.width-30)/2),this.powerBarBg.width=cc.winSize.width-30,this.powerBarBg.height=this.powerBarBg.width/5/2,this.powerBarBg.setPosition(15-cc.winSize.width/2,this.topBg.y-200),this.powerBarBg.color=o.powerBarBg,this.tileBg.width=cc.winSize.width-30,this.tileBg.height=this.tileBg.width,this.tileBg.setPosition(15-cc.winSize.width/2,this.powerBarBg.y-10-this.tileBg.height),this.tileBg.color=o.tileBg;for(var e=0;e<5;e++){var t=cc.instantiate(this.powerPre);t.width=(this.powerBarBg.width-30)/5,t.height=this.powerBarBg.height-10,this.powerBarBg.addChild(t),t.setPosition(5+(5+t.width)*e+t.width/2,5+t.height/2),t.color=o.power,this.powers[e]=t}var i=new Array;this.maxNum=8;for(var c=0;c<this.maxNum-3;c++)i[c]=this.maxNum-3-c;var n=0;for(c=0;c<i.length;c++)n+=i[c];for(var s=0;s<5;s++)for(var l=0;l<5;l++){var r=cc.instantiate(this.tilePre);r.getComponent("Tile").game=this,r.width=(this.tileBg.width-30)/5,r.height=(this.tileBg.height-30)/5;for(var a=0;;){0;var h=new Array,u=new Array;a=Math.random()*n;var d=0,g=0;for(c=0;c<i.length;c++){if(a>=g&&a<=g+i[c]){d=c+1;break}g+=i[c]}if(r.getComponent("Tile").setNum(d,!1,!1),r.setPosition(5+(5+r.width)*l+r.width/2,5+(5+r.height)*s+r.height/2),this.tiles[s][l]=r,this.scanAround(s,l,-1,-1,d,h,u),h.length<3)break}r.getComponent("Tile").setArrPosition(s,l),this.tileBg.addChild(r)}},scanAround:function(e,t,i,c,o,n,s){if(null!=this.tiles[e][t]){var l=!1;if(void 0==s&&(s=new Array),-1==s.indexOf(e+"#"+t)){if(s.push(e+"#"+t),e<4&&(i!=e+1||c!=t)&&null!=this.tiles[e+1][t])parseInt(this.tiles[e+1][t].getComponent("Tile").numLabel.string)==o&&(-1==n.indexOf(e+"#"+t)&&n.push(e+"#"+t),this.scanAround(e+1,t,e,t,o,n,s),l=!0);if(e>0&&(i!=e-1||c!=t)&&null!=this.tiles[e-1][t])parseInt(this.tiles[e-1][t].getComponent("Tile").numLabel.string)==o&&(-1==n.indexOf(e+"#"+t)&&n.push(e+"#"+t),this.scanAround(e-1,t,e,t,o,n,s),l=!0);if(t>0&&(i!=e||c!=t-1)&&null!=this.tiles[e][t-1])parseInt(this.tiles[e][t-1].getComponent("Tile").numLabel.string)==o&&(-1==n.indexOf(e+"#"+t)&&n.push(e+"#"+t),this.scanAround(e,t-1,e,t,o,n,s),l=!0);if(t<4&&(i!=e||c!=t+1)&&null!=this.tiles[e][t+1])parseInt(this.tiles[e][t+1].getComponent("Tile").numLabel.string)==o&&(-1==n.indexOf(e+"#"+t)&&n.push(e+"#"+t),this.scanAround(e,t+1,e,t,o,n,s),l=!0);if(!l&&-1!=i&&-1!=c)parseInt(this.tiles[e][t].getComponent("Tile").numLabel.string)==o&&-1==n.indexOf(e+"#"+t)&&n.push(e+"#"+t)}}},operateLogic:function(e,t,i,n){var s=new Array,l=new Array;if(this.scanAround(e,t,-1,-1,i,s,l),s.length>=3){var r=0;for(var a in s){var h=s[a].split("#")[0],u=s[a].split("#")[1];r+=parseInt(10*this.tiles[h][u].getComponent("Tile").numLabel.string),h!=e||u!=t?(this.tiles[h][u].getComponent("Tile").destoryTile(),this.tiles[h][u]=null):(this.tiles[h][u].getComponent("Tile").setNum(i+1,!1,!0),this.maxNum=i+1>this.maxNum?i+1:this.maxNum)}if(this.scoreNum.string=parseInt(this.scoreNum.string)+r,this.scheduleOnce(function(){this.moveAllTileDown()},.1),!n)for(var d=0;d<5;d++)if(null==this.powers[d]){var g=cc.instantiate(this.powerPre);g.width=(this.powerBarBg.width-30)/5,g.height=this.powerBarBg.height-10,this.powerBarBg.addChild(g),g.setPosition(5+(5+g.width)*d+g.width/2,5+g.height/2),g.color=o.power,g.setScale(0),g.runAction(cc.scaleTo(.1,1)),this.powers[d]=g;break}switch(c.combo++,c.combo){case 1:cc.audioEngine.playEffect(this.star1);break;case 2:cc.audioEngine.playEffect(this.star2);break;case 3:cc.audioEngine.playEffect(this.star3);break;case 4:cc.audioEngine.playEffect(this.star4);break;case 5:cc.audioEngine.playEffect(this.star5);break;case 6:cc.audioEngine.playEffect(this.star6);break;case 7:default:cc.audioEngine.playEffect(this.star7)}return!0}return this.isCal=!1,!1},moveAllTileDown:function(){for(var e=0;e<5;e++)for(var t=0;t<5;t++)if(null!=this.tiles[t][e])for(var i=t;i>0;i--)null==this.tiles[i-1][e]&&(this.tiles[i-1][e]=this.tiles[i][e],this.tiles[i][e]=null,this.tiles[i-1][e].getComponent("Tile").moveTo(i-1,e));this.scheduleOnce(function(){for(var e=new Array,t=0;t<this.maxNum-3;t++)e[t]=this.maxNum-3-t;var i=0;for(t=0;t<e.length;t++)i+=e[t];for(var c=0;c<5;c++)for(var o=0;o<5;o++)if(null==this.tiles[o][c]){var n=cc.instantiate(this.tilePre);n.getComponent("Tile").game=this,n.width=(this.tileBg.width-30)/5,n.height=(this.tileBg.height-30)/5;var s=Math.random()*i,l=0,r=0;for(t=0;t<e.length;t++){if(s>=r&&s<=r+e[t]){l=t+1;break}r+=e[t]}n.getComponent("Tile").setNum(l,!1,!1),n.getComponent("Tile").newTile(o,c),this.tiles[o][c]=n,this.tileBg.addChild(n)}this.scheduleOnce(function(){for(var e=!1,t=0;t<5;t++)for(var i=0;i<5;i++)e||(e=null!=this.tiles[i][t]&&this.operateLogic(i,t,parseInt(this.tiles[i][t].getComponent("Tile").numLabel.string),!1))},.5)},.3)}}),cc._RF.pop()},{Colors:"Colors",Global:"Global"}],Global:[function(e,t,i){"use strict";cc._RF.push(t,"33082e5T1NOqoNc6g/OQ8Mo","Global"),t.exports={score:0,combo:0},cc._RF.pop()},{}],Over:[function(e,t,i){"use strict";cc._RF.push(t,"abb92FkKAJAcZ76wc009Hlx","Over");var c=e("Global"),o=e("Colors");cc.Class({extends:cc.Component,properties:{bg:{default:null,type:cc.Node},gameText:{default:null,type:cc.Node},backBtn:{default:null,type:cc.Node},textLabel:{default:null,type:cc.Label},scoreLabel:{default:null,type:cc.Label},scoreText:{default:null,type:cc.Node},overEffect:cc.AudioClip,addCoin:cc.AudioClip,btnEffect:cc.AudioClip,score:0,changeScore:0},onLoad:function(){this.bg.width=cc.winSize.width,this.bg.height=cc.winSize.height,this.bg.setPosition(this.bg.width/2,this.bg.height/2),this.bg.color=o.overBg,this.gameText.setPosition(cc.winSize.width/2,cc.winSize.height/2);var e=cc.repeatForever(cc.sequence(cc.scaleTo(1,1.5),cc.scaleTo(1,1)));this.gameText.runAction(e),cc.audioEngine.playEffect(this.overEffect),this.scoreText.setPosition(this.gameText.x,this.gameText.y+200),this.score=c.score,this.schedule(this.updateScore,.1,cc.REPEAT_FOREVER,2);var t=this;this.bg.on(cc.Node.EventType.TOUCH_START,function(e){cc.log("score text touch"),cc.audioEngine.playEffect(t.addCoin),t.changeScore=t.score,t.scoreLabel.string="\u6700\u7ec8\u5206\u6570\uff1a"+t.changeScore},this.bg),this.backBtn.setPosition(this.gameText.x,this.gameText.y-200)},updateScore:function(){this.score<=this.changeScore&&this.unschedule(this.updateScore),this.changeScore+=20,this.changeScore=this.changeScore>this.score?this.score:this.changeScore,cc.audioEngine.playEffect(this.addCoin),this.scoreLabel.string="\u6700\u7ec8\u5206\u6570\uff1a"+this.changeScore},back:function(){c.score=0,cc.audioEngine.playEffect(this.btnEffect),cc.director.loadScene("startScene")}}),cc._RF.pop()},{Colors:"Colors",Global:"Global"}],Start:[function(e,t,i){"use strict";cc._RF.push(t,"34814nzs3pO+a9mpV/mWE6Q","Start");var c=e("Colors");cc.Class({extends:cc.Component,properties:{gameName:{default:null,type:cc.Node},bg:{default:null,type:cc.Node},startBtn:{default:null,type:cc.Node},btnEffect:cc.AudioClip},onLoad:function(){this.bg.width=cc.winSize.width,this.bg.height=cc.winSize.height,this.bg.setPosition(this.bg.width/2,this.bg.height/2),this.bg.color=c.startBg;var e=cc.repeatForever(cc.sequence(cc.scaleTo(1,1.5),cc.scaleTo(1,1)));this.gameName.runAction(e),this.gameName.setPosition(cc.winSize.width/2,cc.winSize.height/2),this.startBtn.setPosition(this.gameName.x,this.gameName.y-210)},startGame:function(){cc.audioEngine.playEffect(this.btnEffect),cc.director.loadScene("gameScene")}}),cc._RF.pop()},{Colors:"Colors"}],Tile:[function(e,t,i){"use strict";cc._RF.push(t,"33c61KUhGtMdKlxBheGl7E0","Tile");var c=e("Global"),o=e("Colors");cc.Class({extends:cc.Component,properties:{numLabel:{default:null,type:cc.Label},clickEffect:cc.AudioClip},onLoad:function(){var e=this;this.node.on(cc.Node.EventType.TOUCH_START,function(t){e.game.isCal||(cc.audioEngine.playEffect(e.clickEffect),e.game.isCal=!0,c.combo=0,cc.audioEngine.playEffect(this.addCoin),e.setNum(parseInt(e.numLabel.string)+1,!0,!1))},this.node)},newTile:function(e,t){this.node.setPosition(5+(5+this.node.width)*t+this.node.width/2,5+(5+this.node.height)*e+this.node.height/2),this.node.setScale(0),this.node.runAction(cc.scaleTo(.1,1)),this.setArrPosition(e,t)},moveTo:function(e,t){this.row=e,this.col=t,this.node.stopActionByTag(1);var i=cc.moveTo(.2,cc.p(5+(5+this.node.width)*t+this.node.width/2,5+(5+this.node.height)*e+this.node.height/2));this.node.runAction(i),i.setTag(1)},destoryTile:function(){var e=cc.sequence(cc.scaleTo(.1,0),cc.callFunc(function(e){e.destroy()},this.node,this.node));this.node.runAction(e)},setArrPosition:function(e,t){this.row=e,this.col=t},setNum:function(e,t,i){switch(this.game.maxNum=e>this.game.maxNum?e:this.game.maxNum,this.numLabel.string=e,e){case 1:this.node.color=o.num1;break;case 2:this.node.color=o.num2;break;case 3:this.node.color=o.num3;break;case 4:this.node.color=o.num4;break;case 5:this.node.color=o.num5;break;case 6:this.node.color=o.num6;break;case 7:this.node.color=o.num7;break;case 8:this.node.color=o.num8;break;case 9:this.node.color=o.num9;break;case 10:this.node.color=o.num10;break;case 11:this.node.color=o.num11;break;case 12:this.node.color=o.num12;break;case 13:this.node.color=o.num13;break;case 14:this.node.color=o.num14;break;case 15:this.node.color=o.num15;break;case 16:this.node.color=o.num16;break;case 17:this.node.color=o.num17;break;case 18:this.node.color=o.num18;break;case 19:this.node.color=o.num19;break;case 20:this.node.color=o.num20;break;default:this.node.color=o.nums}if(i&&this.node.runAction(cc.sequence(cc.scaleTo(.15,1.5),cc.scaleTo(.15,1))),t){var n=this.game.operateLogic(this.row,this.col,parseInt(this.numLabel.string),!0),s=this.game.powers;if(!n){for(var l=s.length-1;l>=0;l--)if(null!=s[l]){var r=cc.sequence(cc.scaleTo(.1,0),cc.callFunc(function(e){e.destroy()},null,s[l]));s[l].runAction(r),s[l]=null;break}null==s[0]&&(c.score=this.game.scoreNum.string,cc.director.loadScene("overScene"))}}}}),cc._RF.pop()},{Colors:"Colors",Global:"Global"}]},{},["Colors","Game","Global","Over","Start","Tile"]);