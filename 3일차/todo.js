const containerBox = document.querySelector("#containerBox"),
    contents = containerBox.querySelector("#contents"),
    list = contents.querySelector("#list"),

    inputList = document.querySelector(".inputlist"),
    listForm = inputList.querySelector("#listForm"),
    input = listForm.querySelector("input");


const list_LS = "toDos";

let toDos = [];

function saveList(){
    localStorage.setItem(list_LS, JSON.stringify(toDos)); 
    //1.localStorage와 sessionStorage : 
    //1)localStorage
    //로컬 스토리지는 웹피이지의 세션이 끝나더라도 데이터가 지워지지 않는다.
    //여러 탭이나 창 간에 데이터가 서로 공유되며 탭이나 창을 닫아도
    //데이터는 브라우저에 그대로 남는다.

    //localStorage 예제
    //localStorage.setItem("key", value); -> 키에 데이터 쓰기
    //localStorage.getItem("key"); -> 키로부터 데이터 읽기
    //localStorage.removeItem("key"); -> 키의 데이터 삭제
    //localStorage.clear(); -> 모든 키의 데이터 삭제
    //localStorage.lengthl -> 저장된 키/값 쌍의 개수


    //2)sessionStorage
    //세션 스토리지는 웹페이지의 세션이 끝날 때 저장된 데이터가 지워진다. 
    //브라우저에서 같은 웹사이트를 여러 탭이나 창을 띄우면
    //여러개의 세션 스토리지에 데이터가 서로 격리되어 저장되며,
    //각 탭이나 창이 닫힐 때 저장해 둔 데이터도 함께 소멸된다.

    //2.JSON.stringify : 
    //JavaScript 값이나 객체를 JSON 문자열로 변환한다. 
    //선택적으로, replacer를 함수로 전달할 경우 변환 전 값을 변형할 수 있고,
    // 배열로 전달할 경우 지정한 속성만 결과에 포함한다.

    
}

function deleteList(event){
    const btn = event.target;
    //event.target
    //event interface의 target속성은 event가 전달한 객체에 대한 참조이다.
    //이는 이벤트의 버블링 또는 캡처 단계에서 이벤트 핸들러를 호출하는
    //event.currentTarget와는 다르다.
    const li = btn.parentNode;//->읽기 전용 소성은 DOM트리의 지정된 노드의 부모를 반환한다.
    list.removeChild(li);//->이 메서드는 DOM에서 자식 노드를 제거하고 제거된 노드를 반환한다.
    // 이쯤되면 DOM의 개념이 궁금해진다.
    //https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/Introduction
    //위의 링크로 가면 DOM에 대한 자세한 설명이 적혀있다. 오늘집에가서 확인해서 정리하라
    //쉽게 말하면 문서의 구조화된 표현을 제공하며 프로그래밍 언어가 DOM구조에 접근할 수 있는 방법을 제공하여
    //그들이 문서 구조, 스타일, 내용 등을 변경할 수 있게 돕는다.
    //DOM은 구조화된 nodes와 property와 method를 갖고 있는 objects로 문서를 표현한다.
    // 이들은 웹페이지를 스크립트 또는 프로그래밍 언어들에서 사용될수 있게 연결시켜주는 역할을 담당한다.
    toDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    saveList();
}

function showingList(text){
    const li = document.createElement("li");
    const div = document.createElement("div");
    const delbtn = document.createElement("button");
    const listNum = toDos.length+1;

    div.innerText = text;
    delbtn.innerText = "지우기";

    delbtn.addEventListener("click", deleteList);
    list.appendChild(li);
    li.appendChild(div);
    li.appendChild(delbtn);
    li.id = listNum;
    const toDoObj = {
        text: text,
        id: listNum
    };
    toDos.push(toDoObj);
    saveList();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    showingList(currentValue);
    input.value = "";
}

function loadList(){
    const loadedList = localStorage.getItem(list_LS);
    if(loadedList !== null){
        const parsedData = JSON.parse(loadedList);
        parsedData.forEach(function(toDo){
            showingList(toDo.text);
        });
    }
}

function init(){
    loadList();
    listForm.addEventListener("submit", handleSubmit);
}

init();

//로컬스토리지에 저장되도록 구현 -> 비전공자들은 코드를 보면서 해석하기
//html,css로 올라온 사진의 모양으로 UI를 구현해야 한다.
//새로고침해도 ui가 남아있도록 해야한다. 
//객체를 최대한 활요아면서 localstoryge와 todolist를 연결시켜야한다. 
//정답은 온려놓았다. 그런데 정말 감이 안오는 사람들은 답지를 공부해라 이거를 정리해서 깃허브에 올려라 
//-> 비전공자분들은 이렇게해도 용서를 한다. 그런데 전공자분들은 만들어 오세요 전공하신 분들은 만들어 오세요 