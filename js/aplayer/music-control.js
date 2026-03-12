// (function() {
//     ap = null
//     Object.defineProperty(document.querySelector('meting-js'),"aplayer",{
//         set: function(aplayer) {
//             ap=aplayer
//             ready();
//         }
//     });
//     isRecover = false;
//
//     // 配置区
//     const musicConfig = {
//         enableRecover: true,      // 启用恢复功能
//         autoPlay: true,           // 自动播放
//         specificMode: "first",    // 模式：first|index|name|random
//         specificIndex: 3,         // 当模式为index时有效
//         specificName: "晴天"      // 当模式为name时有效
//     };
//
//     function ready(){
//         ap.on('canplay', function () {
//             if(!isRecover){
//                 // 恢复播放检查
//                 if(musicConfig.enableRecover && localStorage.getItem("musicIndex") != null){
//                     musicIndex = localStorage.getItem("musicIndex");
//                     musicTime = localStorage.getItem("musicTime");
//                     if(ap.list.index != musicIndex){
//                         ap.list.switch(musicIndex);
//                     }else{
//                         ap.seek(musicTime);
//                         ap.play();
//                         localStorage.clear();
//                         isRecover = true;
//                         return;
//                     }
//                 }
//
//                 // 根据配置选择播放策略
//                 switch(musicConfig.specificMode){
//                     case "index":
//                         if(ap.list.index != musicConfig.specificIndex){
//                             ap.list.switch(musicConfig.specificIndex);
//                         }
//                         break;
//                     case "name":
//                         const targetIndex = ap.list.audios.findIndex(song =>
//                             song.name.includes(musicConfig.specificName)
//                         );
//                         if(targetIndex !== -1 && targetIndex !== ap.list.index){
//                             ap.list.switch(targetIndex);
//                         }
//                         break;
//                     case "random":
//                         const randomIndex = Math.floor(Math.random() * ap.list.audios.length);
//                         if(randomIndex !== ap.list.index){
//                             ap.list.switch(randomIndex);
//                         }
//                         break;
//                     case "first":
//                     default:
//                         // 默认播放第一首
//                         break;
//                 }
//
//                 if(musicConfig.autoPlay && !ap.audio.paused){
//                     ap.play();
//                 }
//                 isRecover = true;
//             }
//         });
//     }
//
//     window.onbeforeunload = function(event) {
//         if(!ap.audio.paused){
//             localStorage.setItem("musicIndex", ap.list.index);
//             localStorage.setItem("musicTime", ap.audio.currentTime);
//         }
//     };
// })();