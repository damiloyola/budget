
const p = {
    flag: true,
    value:""
}
const toggle = () => {
  
    if (p.flag){
        p.value='Hello World !!';
        p.flag = false;
    }else{
        p.value = '';
        p.flag = true;
    }
    render();
}

const appRoot = document.getElementById('app');
const render = () => {
    const template = (
        <div>
            <h1>Toggle</h1>
            <button onClick = {toggle}>Click Me!</button>
            <p>{p.value}</p>
        </div>
    )   

    ReactDOM.render(template, appRoot)
}
render();