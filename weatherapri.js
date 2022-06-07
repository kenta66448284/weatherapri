 const Music_list ={
            1:[
                /* 爽快 */"PLGSAYk1sKnH6yaCluYyGCC8R4ToLNpx9C",
                /* 鬱 */"PLGSAYk1sKnH7UnpWLzkKPUB8PpUpM-m6J"
            ],
            2:[
                /* 爽快 */"PLGSAYk1sKnH6xkQFdtiq7ndo4YeUph7qK",
                /* 鬱 */"PLGSAYk1sKnH70fQis1qJO5zOLwI8fjclA"
            ],
            3:[
                /* 爽快 */"PLGSAYk1sKnH6rKKAmxF3Y_Q22cjiahNZO",
                /* 鬱 */"PLGSAYk1sKnH4c2BRIKsRzmViUmTZSLxUU"

            ],
            4:[
                /* 爽快 */"PLGSAYk1sKnH5dLc454yljeppbucdi2wwA",
                /* 鬱 */"PLGSAYk1sKnH69a_mquOdlVXcULOFz-vmS"
            ]
        }
        
        console.log(Music_list)
        
        let musican ={
            1:[
                "GrqW8m0RcRo",
                "MJeqcGPtTqQ",
                "_ZEGUfWSgls"
            ],
            2:[
                "ME_ZU0ME4vQ",
                "zb-CIijI214",
                "qaOVcOq2McE"
            ],
            3:[
                "gIEJm2yodm4",
                "XxGfrghh3-o",
                "5cvXmuuC1GI"
            ],
            4:[
                "bptF-yfdkPw",
                "0pQzSpOEBms",
                "wwmBAlispZI"
            ]
        };
        let musicname={
            1:[
                "sumika / Lamp",
                "amazarashi / 空に歌えば",
                "キュウソネコカミ / ハッピーポンコツ",
            ],
            2:[
                "official髭男dism / ゼロのままでいられたら",
                "sumika / Babel",
                "フレデリック / 飄々とエモーション"
            ],
            3:[
                "sumika / 雨天決行",
                "THE ORAL CIGARETTES / 嫌い",
                "SUPER BEAVER / 人として"
            ],
            4:[
                "moon drop / この雪に紛れて",
                "sumika / 願い",
                "マルシィ / 絵空"
            ]
        }
        // let color =[
        //     [],
        //     ["#fff","#000"],
        //     [],
        //     [],
        //     []
        // ]


    //東海4県のコード番号をオブジェクトの配列にしておきます。
	const codeNums = [{ 愛知県: 23 }, { 岐阜県: 21 }, { 三重県: 24 }, { 静岡県: 22 }];
	//テンプレートリテラルでconst urlに代入します。
	const url = `https://www.jma.go.jp/bosai/forecast/data/overview_forecast/${codeNums[0]['愛知県']}0000.json`;
    const todyaurl =`https://www.jma.go.jp/bosai/forecast/data/forecast/${codeNums[0][`愛知県`]}0000.json`
	// let musicurl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${Music_list.summersou}&key=AIzaSyC0QUgrDMD28Dtocuf9n7qw_IwWsj2UB6U`
    let three = document.querySelector(".threeDays");
    let we = document.querySelector(".precipitation");
    const text = ["今日の天気","明日の天気","あさっての天気"]
    const Btn = document.querySelectorAll('button');

    let youtubelist = [];
    let randam = Math.floor(Math.random()*3)
    let read = document.querySelector(".read");
    let textbun= document.createElement("p");
    let ul = document.createElement("ul");
    let list = document.querySelector(".list")
    let h2 = document.querySelector("h2");
    let youtubename = "";
    let body = document.querySelector("body");
    fetch(todyaurl)
    .then(function(response){
        return response.json();
    })
    
    .then(function(deta){
        console.log(deta)
        
        const code = deta[0].timeSeries[0].areas[0].weatherCodes[0].charAt(0);
        youtubeid=musican[code][randam]
        console.log(youtubeid)
        youtubename=musicname[code][randam]
        console.log(youtubename);
        h2.innerHTML=youtubename;
        console.log(code)
       if(code === "1"){
           console.log(code);
           body.setAttribute("style","color:#fff;background:#85d6ff")
       }else if(code === "2"){
            body.setAttribute("style","background:#8a969c")
       }else if(code === "3"){
            body.setAttribute("style","color:#82d6ff;background:#8a969c")
       }else if(code === "4"){
            body.setAttribute("style","color:#fff;background:#8a969c")
        }
        for(let i= 0;i<Btn.length;i++){
            Btn[i].addEventListener("click",function(){
                textbun.innerHTML="";
                three.innerHTML="";
                ul.innerHTML="";
                for(let i=0;i<deta[0].timeSeries[0].areas[0].weathers.length;i++){
                    let p = document.createElement("p");
                    const west = deta[0].timeSeries[0].areas[0].weathers[i];
                    p.innerHTML =text[i]+ west;
                    three.appendChild(p);
                    console.log(west)
                }
                if(i===0){
                    textbun.innerHTML= "そんなテンション高めなあなたにお勧めの曲はこちらっ！"
                    read.appendChild(textbun)
                    console.log(read)
                    const musicUrl=`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${Music_list[code][Btn[0].value]}&key=AIzaSyC0QUgrDMD28Dtocuf9n7qw_IwWsj2UB6U`
                    fetch(musicUrl)
                    .then(function (response) {
                    return response.json();
                    })
                    .then(function(deta){
                        console.log(deta)
                        
                        for(let i = 0;i<deta.items.length;i++){
                            let li = document.createElement("li");
                            let a = document.createElement("a");
                            let title = deta.items[i].snippet.title;
                            a.innerHTML = title;
                            console.log(deta.items[i].snippet.title);
                            youtubelist[i]=deta.items[i].snippet.resourceId.videoId;
                            a.setAttribute("href","https://www.youtube.com/watch?v="+youtubelist[i])
                            li.appendChild(a);
                            ul.appendChild(li);
                            console.log(ul)
                            list.appendChild(ul);
                        }
                        console.log(youtubelist)
                        random = Math.floor(Math.random()*3);
                        console.log(random)
                        youtubeid = youtubelist[random];
                        console.log(youtubeid)
                        
                        
                        // console.log(youtubelist)
                    })
                }else if(i===1){
                    textbun.innerHTML= "なんか元気ない…？？まぁこれ聴いて元気出せよ…"
                    read.appendChild(textbun)
                    console.log(read)
                    const musicUrl=`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${Music_list[code][Btn[1].value]}&key=AIzaSyC0QUgrDMD28Dtocuf9n7qw_IwWsj2UB6U`          
                    fetch(musicUrl)
                    .then(function (response) {
                    return response.json();
                    })
                    .then(function(deta){
                        // console.log(deta);
                        
                        for(let i = 0;i<deta.items.length;i++){
                            let li = document.createElement("li");
                            let a = document.createElement("a");
                            let title = deta.items[i].snippet.title;
                            a.innerHTML = title;
                            console.log(deta.items[i].snippet.title);
                            youtubelist[i]=deta.items[i].snippet.resourceId.videoId;
                            a.setAttribute("href","https://www.youtube.com/watch?v="+youtubelist[i])
                            li.appendChild(a);
                            ul.appendChild(li);
                            console.log(ul)
                            list.appendChild(ul);
                        }
                        console.log(youtubelist)
                        random = Math.floor(Math.random()*3);
                        console.log(random)
                        youtubeid = youtubelist[random];
                        console.log(youtubeid)
                        
                    })
                }
                
            
            })
            
        }
    })
    
    

			
    // }
    // 2. This code loads the IFrame Player API code asynchronously.
			// 2. 変数tagにscriptタグを作って入れる。Element=要素、Attrubute=属性
			var tag = document.createElement('script');

			tag.src = 'https://www.youtube.com/iframe_api';
			var firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

			// 3. This function creates an <iframe> (and YouTube player)
			//    after the API code downloads.
			// 3. APIのコードを読み込んでから、この関数を<iframe>内に影響させる。
			var player;
            let youtubeid=``;
            
			function onYouTubeIframeAPIReady() {
                console.log(youtubeid)
				player = new YT.Player('player', {
					height: '360',
					width: '640',
					videoId: youtubeid,
					events: {
						onReady: onPlayerReady, //エラーで効かない。
						// onStateChange: onPlayerStateChange
					}
                    
				});
                
			}

			// 4. The API will call this function when the video player is ready.
			// 4. このAPIは、video playderが準備でしたら、この関数を呼び出します。
			function onPlayerReady(event) {
				event.target.playVideo();
			}

			// 5. The API calls this function when the player's state changes.
			//    The function indicates that when playing a video (state=1),
			//    the player should play for six seconds and then stop.
			/* 5. video playerのステート（状態）が変更されたら、この関数を呼び出す。
          動画を再生するときの設定は、state=1にしておきます。
          プレイヤーは、6000ミリ秒後に終了します。 */
			var done = false;
			function onPlayerStateChange(event) {
				if (event.data == YT.PlayerState.PLAYING && !done) {
					setTimeout(stopVideo, 6000);
					done = true;
				}
			}
            function playTheVideo() {
                player.playVideo();
            }
            
            //再生イベント
            let doplayBtn = document.querySelector('#doplay');
            doplayBtn.addEventListener('click', function () {
                playTheVideo(); //関数名に変更
            });
			
            
            
            function pauseTheVideo() {
                player.pauseVideo();
            }
            
            //一時停止イベント
            let dopauseBtn = document.querySelector('#dopause');
            dopauseBtn.addEventListener('click', function () {
                pauseTheVideo();
            });
            
            //ボリューム関数
            function volumeFn(vol) {
                let currentVol = player.getVolume();
                player.setVolume(vol);
            }

            //ボリュームイベント
            let volumeBtn = document.querySelector('#volume');
            let volumeTxt = document.querySelector('#volumeNum');
            volumeBtn.addEventListener('change', function () {
                volumeFn(this.value);
                volumeTxt.textContent = this.value;
            });
            function onPlayerReady(event) {
                event.target.playVideo(); //①最初の再生を止める
                let currentVol = 100; //②最初のボリュームを設定（0〜100）
                event.target.setVolume(currentVol); //③Playerのボリュームに設定
                document.querySelector('#volume').value = currentVol; //④rangeFormに音量を設定
                document.querySelector('#volumeNum').textContent = currentVol; //⑤テキストにも音量を数値で表示
            }

            document.getElementById("dopause").style.display = "none";
            const p1 = document.getElementById("doplay");
            const p2 = document.getElementById("dopause")
            function clickBtn1(){
                p1.style.display="none";
                p2.style.display="block"
            }
            function clickBtn2(){
                p1.style.display="block";
                p2.style.display="none"
            }
            function onMute() {
                //ミュートの時、trueを返すのでミュートを解除します。
                if (player.isMuted()) {
                    player.unMute();
                } else {
                    //ミュートが解除されている時はfalseなので、ミュートにします。
                    player.mute();
                }
            }
            
            //ミュートイベント
            let onMuteBtn = document.querySelector('#mute');
            onMuteBtn.addEventListener('click', function () {
                onMute();
                if (onMuteBtn.innerText === 'ミュート') {
                    onMuteBtn.innerText = 'ミュート解除';
                } else {
                    onMuteBtn.innerText = 'ミュート';
                }
            });
            