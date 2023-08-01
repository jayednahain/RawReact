const Person = props =>{
    return React.createElement('div',{},[
        React.createElement('h1',{},props.name),
        React.createElement('p',{},props.occupation),

    ])
}

const personData = [
    {name:'jayed',occupation:"Software engineer"},
    {name:'Nahian',occupation:"Data engineer"},
    {name:'chowdhury',occupation:"super star"}
];

const App= ()=>{
    return React.createElement('div',{className:'container'},[
        React.createElement('h1',{className:'title',key:'90'},"React is rendered"),
        personData.map((item)=>{
           return React.createElement(Person,{name:item.name,occupation:item.occupation},[])
        }),
    ]);
};

// ReactDOM.render(
//     React.createElement(App),
//     document.getElementById('root')
// );

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));