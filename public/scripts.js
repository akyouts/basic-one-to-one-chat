const socket = io("http://localhost:8000");
  socket.emit('dataFromCient',{ data:"This message is comming from client API" });
      socket.on('dataFromServer',(data)=>{
          console.log(data);
      })
       

      document.getElementById('message-form').addEventListener('submit',(event)=>{
             event.preventDefault();
             const newMsg = document.getElementById('user-message').value;
             socket.emit('messageFromCliet',{text : newMsg });


             
      })

      socket.on('messageFromServer',(data)=>{
                 console.log(data);
                 document.querySelector('#messages').innerHTML+= `<li>${data.text}</li>`;
             });