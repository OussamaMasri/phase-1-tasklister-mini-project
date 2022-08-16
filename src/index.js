document.addEventListener("DOMContentLoaded", () => {
  let form=document.querySelector('form')
  form.addEventListener('submit',(e)=>{
      console.log(e.target.new-task-description.value)
      handleTask(e.target.new-task-description.value)
      e.preventDefault();
      form.reset()
  })
  
  function handleTask(work){
      const li=document.createElement('li');
      li.innerText=`${work}  `;
      const item=document.querySelector('#tasks')
      item.appendChild(li)
      const btn=document.createElement('button');
      btn.setAttribute('id','#btn')
      btn.innerHTML='X'
      li.appendChild(btn)
      btn.addEventListener('click',(e)=>{e.target.parentNode.remove()})
  }
  

});
