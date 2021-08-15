const rootElem:object = document.getElementById('root');

const element:object = (
    <div>
        <div className="box box--small" style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}>
            <span>small lightblue box</span>
        </div>
        <div className="box box--medium">
            <span>small lightblue box</span>
        </div>
        <div className="box box--large" style={{}} dir="">
            <span>small lightblue box</span>
        </div>
    </div>
);

React.createElement('div',null,'ciao')

// @ts-ignore
ReactDOM.render(element, rootElem);