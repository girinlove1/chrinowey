



const btn = document.getElementById('button');
const basic = document.getElementById('basic');
const clicked = document.getElementById('clicked');
const backb = document.querySelector('.backb');
const ddd = document.getElementById('ddd');


const ccc = document.getElementById('ccc');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = '보내는 중...';

   const serviceID = 'default_service';
   const templateID = 'template_y5apofn';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = '보내기!';
      // alert('Sent!');
      
        basic.classList.remove('on');
        clicked.classList.add('on');

       ddd.classList.add('on');


        ccc.classList.add('on');
  
       
    }, (err) => {
      btn.value = '보내기!';
      alert(JSON.stringify(err));
    });

  
});




backb.addEventListener('click',()=>{
 clicked.classList.remove('on');

ddd.classList.remove('on'); 
ccc.classList.remove('on');
  basic.classList.add('on');

  })







  function printName()  {
    const name = document.getElementById('from_name').value;
    document.getElementById("nickname").innerText = name;
    
    console.log(name);
  }



const ii = document.querySelector('.ii');
const afbox = document.querySelector('.afterbox');
const clic = document.getElementById('clicked');
const topline = clic.querySelector('.topline');

// ii.addEventListener('click', ()=>{
//   afbox.classList.add('on');
// })


const left = document.querySelector('.left');
const right = document.querySelector('.right');

left.addEventListener('click', ()=>{
  afbox.classList.toggle('on');
  topline.classList.toggle('on');
  let a = Math.floor(Math.random() * 10)
  singer.innerHTML= ss[a];
 tit.innerHTML= st[a];
 songadd.href= sa[a];
});
right.addEventListener('click', ()=>{
  afbox.classList.toggle('on');
  topline.classList.toggle('on');
  let a = Math.floor(Math.random() * 10)
  singer.innerHTML= ss[a];
 tit.innerHTML= st[a];
 songadd.href= sa[a];
 order.innerHTML=[a+1];
});

window.addEventListener('mousemove', e=>{

  const bgbg = document.querySelector('.bgbg');
      let x = e.pageX;
      let y = e.pageY;
      
      let cx = -x/30;
      let cy = -y/30;
  //너무 급격하게 움직이는 거 방지
  
      bgbg.style.transform = `translate(${cx}px, ${cy}px)`;
  
  })


const rand = document.getElementById("random");

const songadd = document.getElementById("songadd");

const singer = document.querySelector('.titi');
const tit = document.querySelector('.sonsons');

const order = document.getElementById('order');
// let a = parseInt(Math.random());
const ss = ["Vince Guaraldi Trio", "김수영", "Yogee New Waves", "Kirinji", "Hata Motohiro", "Ardyn", "Lamp", "Colde", "the Natsuyasumi Band", "Lorde"];

const st = ["Christmas Time Is Here", "Don’t Cry", "C.A.M.P.", "Sennenki Matsuni Furu Yukiwa", "Koi No Dorei", "Call Up", "Sachiko", "난 아직도", "Kuroi Inu", "Swingin Party"];

const sa = ["https://www.youtube.com/watch?v=4PzetPqepXA", "https://youtu.be/BmCWCS274VU?si=9x-ooOzFnGw25LTN&t=641", "https://www.youtube.com/watch?v=WMmbDJTyuSs", "https://www.youtube.com/watch?v=TZn3EzmJzRw", "https://www.youtube.com/watch?v=T5xZvZKuje4", "https://www.youtube.com/watch?v=KGXxSg9nvrM", "https://www.youtube.com/watch?v=meF_vnE_uAw", "https://www.youtube.com/watch?v=9i0JJnLvM9E", "https://www.youtube.com/watch?v=DZTzJgjUaM4", "https://www.youtube.com/watch?v=PamfQ1AGZqM"];


let a = Math.floor(Math.random() * 10)
  singer.innerHTML= ss[a];
 tit.innerHTML= st[a];
 songadd.href= sa[a];
 order.innerHTML=[a+1];

rand.addEventListener('click', ()=>{
  // afbox.classList.toggle('on');
  // topline.classList.toggle('on');


  

let a = Math.floor(Math.random() * 10)
  singer.innerHTML= ss[a];
 tit.innerHTML= st[a];

 songadd.href= sa[a];
 order.innerHTML=[a+1];
  console.log(a);

});






// let cnt = 1;
// function c(){

// let form= document.getElementById('form');

// let name1= document.getElementById('from_name');

// let messa= document.getElementById('message');

//   let writer = name1.value;
// 	let content = messa.value; // 입력양식. id가 아닌 이름으로 접근하고 있음, 변수에 담음.(위 세줄)

//   console.log(writer, content);
// 	let el = mkDiv(writer, content); //(위 내용을 파라메터로 받음) , mkDiv 함수에 다녀온 결과 mkDiv(writer, pwd, content)=newDiv
// 	//mkDiv에서 return 된 값 el로 받아옴

// 	let list = document.getElementById("list"); //
// 	list.appendChild(el); 
// }

// function mkDiv(writer, content){
    
//     //파라메터로 받음, div 태그에 감싸서 내용을 프린트하기 위해 만듬

// 	let newDiv = document.createElement("div"); //div 요소 하나 생성 (영역을 하나 만들어 새로운 영역에 추가)
// 	// <div id = "d_1" pwd = '111'>
// 	//새 div 태그 생성
	
//     newDiv.id = "d_" + cnt++; //고유 id 할당. 생성한 div에 id를 지정. d_1, d_2의 형식. cnt 값을 붙여줌

// 	let html = ""; //생성된 div에 출력될 내용을 작성한 변수
// 	html += "writer:"+writer+"<br/>";
// 	html += "content:"+content+"<br/>";
	
// 	html += "<input type = 'button' value = '삭제'>"; //html 위 4개를 아래 innerHTML에 넣어줌.
// 	newDiv.innerHTML = html; //위의 html 내용을 전부 받아옴
// 	return newDiv; //받아온 내용 return
// }






// console.log();