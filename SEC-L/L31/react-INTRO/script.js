const head = React.createElement('h1',{id:'head'},"learning React");
console.log(head);


const elem = React.createElement('div',
    {},
    [
        React.createElement('div',
            {class:'child1'},
            [
                React.createElement('h1',{},"This is h1 tag"),
                React.createElement('h2',{},"his is h2 tag")
            ]
        ),
        React.createElement('div',
            {class:'child2'},
            [
                React.createElement('h1',{},"This is h1 tag"),
                React.createElement('h2',{},"his is h2 tag")
            ]
        )

    ]
)


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(elem)