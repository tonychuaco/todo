(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(3),s=a.n(r),c=(a(14),a(6)),d=a(4),u=a(5),i=a(1),l=a(7),m=a(8),k=function(t){var e=t.todo.map((function(e){return o.a.createElement("li",{key:e.taskId},e.taskName,o.a.createElement("button",{type:"button",onClick:function(){return t.deleteTask(e)}},"Delete"),o.a.createElement("button",{type:"button",onClick:function(){return t.updateTask(e)}},"Update"))}));return o.a.createElement("ul",null,e)},h=function(t){Object(m.a)(a,t);var e=Object(l.a)(a);function a(){var t;return Object(d.a)(this,a),(t=e.call(this)).addItem=function(e){e.preventDefault();var a={taskId:t.state.taskId,taskName:t.state.currentToDo};t.setState({taskId:t.state.taskId+1,todos:[].concat(Object(c.a)(t.state.todos),[a])})},t.handleChange=function(e){t.setState({currentToDo:e.target.value})},t.deleteTask=function(e){var a=t.state.todos,n=[];for(var o in a)a[o]!==e&&n.push(a[o]);a=n,t.setState({todos:a})},t.updateTask=function(e){var a=t.state.currentToDo,n=t.state.todos;for(var o in n)n[o]===e&&(n[o].taskName=a);t.setState({todos:n})},t.state={todos:[],currentToDo:"",taskId:0},t.deleteTask=t.deleteTask.bind(Object(i.a)(t)),t}return Object(u.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("form",{onSubmit:this.addItem},o.a.createElement("label",{htmlFor:"taskName"},"Task Name:"),o.a.createElement("input",{onChange:this.handleChange,name:"taskName",type:"text",placeholder:"Add to do here!"}),o.a.createElement("button",{type:"submit"},"Add Task"),o.a.createElement(k,{todo:this.state.todos,deleteTask:this.deleteTask,updateTask:this.updateTask})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},9:function(t,e,a){t.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.172bde54.chunk.js.map