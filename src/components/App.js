import '../styles/App.css';
import React from 'react';

const data = [
    {
        id: 1,
        title: 'Продукт 1',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.',
        image: './images/1.jpg'
    },
    {
        id: 2,
        title: 'Продукт 2',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.',
        image: './images/2.jpg'
    },
    {
        id: 3,
        title: 'Продукт 3',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.',
        image: './images/3.jpg'
    },
    {
        id: 4,
        title: 'Продукт 4',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.',
        image: './images/4.jpg'
    }
];


const Card = props => {
    const { image, title, description, onBuyClick } = props;
    const [item1, setItem1] = React.useState(1);

    return <div className="card">
        <div className="card-image">
            <img src={image} alt=""/>
        </div>
        <div className="card-content">
            <div className="card-title">{title}</div>
            <div className="description">
                {description}
            </div>
            <div className="actions">
                <div className="calc">
                    <div className="minus"
                         onClick={() => {
                             if (item1 > 1) {
                                 setItem1(item1 - 1)
                             }
                         }}>-</div>
                    <div className="calc-result">{item1}</div>
                    <div className="plus" onClick={() => setItem1(item1 + 1)}>+</div>
                </div>
                <button onClick={() => onBuyClick(item1)}>Купить</button>
            </div>
        </div>
    </div>
}

function App() {
    const [count, setCount] = React.useState(0);

    return (
        <div className='wrapper'>
            <div className='header'>
                <div className="container">
                    <div className="logo">Logo</div>
                    <div className="cart">
                        {count ? <div className="counter">{count}</div> : <></>}
                        <svg x="0px" y="0px" viewBox="0 0 494.059 494.059">
                            <path d="M94.293,322.206c1.168,11.504,7.392,21.823,16.249,28.792c-4.958,5.834-7.959,13.379-7.959,21.616v30.88
	c0,13.31,7.682,24.775,18.942,30.161c-0.638,3.076-0.976,6.261-0.976,9.523c0,25.815,21.002,46.817,46.816,46.817
	c25.815,0,46.817-21.002,46.817-46.817c0-2.116-0.154-4.196-0.428-6.238h77.006c-0.273,2.043-0.428,4.122-0.428,6.238
	c0,25.815,21.002,46.817,46.817,46.817c25.814,0,46.816-21.002,46.816-46.817c0-25.815-21.002-46.817-46.816-46.817
	c-15.66,0-29.538,7.736-38.042,19.579h-93.701c-8.504-11.843-22.382-19.579-38.042-19.579c-15.045,0-28.446,7.142-37.017,18.205
	c-4.032-2.058-6.767-6.232-6.767-11.071v-30.88c0-6.858,5.583-12.437,12.446-12.437c0.032,0,0.063-0.004,0.095-0.005
	c0.064,0.001,0.128,0.005,0.191,0.005h245.5c20.299,0,41.324-15.049,47.868-34.261l62.384-183.173
	c3.53-10.364,2.329-20.814-3.296-28.671c-5.624-7.857-15.129-12.364-26.077-12.364h-22.39l-67.472-67.795
	c-10.49-10.488-27.493-10.579-38.105-0.284L220.858,64.258L190.292,9.452c-2.824-5.064-9.218-6.879-14.284-4.056l-61.135,34.096
	c-2.433,1.356-4.226,3.624-4.986,6.303c-0.761,2.679-0.426,5.55,0.931,7.982l26.732,47.931h-25.325
	c-6.753,0-13.114,1.725-18.63,4.959l-4.958-49.569c-0.537-5.368-5.054-9.455-10.448-9.455H10.5c-5.799,0-10.5,4.701-10.5,10.5
	c0,5.799,4.701,10.5,10.5,10.5h58.187L94.293,322.206z M337.151,417.36c14.235,0,25.816,11.582,25.816,25.817
	c0,14.235-11.581,25.817-25.816,25.817c-14.235,0-25.817-11.581-25.817-25.817C311.334,428.941,322.916,417.36,337.151,417.36z
	 M167.366,417.36c14.235,0,25.817,11.582,25.817,25.817c0,14.235-11.582,25.817-25.817,25.817
	c-14.235,0-25.816-11.581-25.816-25.817C141.55,428.941,153.131,417.36,167.366,417.36z M357.967,48.745l52.71,52.963H296.333
	l52.943-52.944C351.677,46.363,355.582,46.363,357.967,48.745z M304.959,63.383l-38.324,38.325h-24.89l-10.34-18.539L304.959,63.383
	z M134.271,52.718l42.795-23.867l40.634,72.857h-56.106L134.271,52.718z M472.188,135.972l-62.384,183.173
	c-3.635,10.671-16.714,20.031-27.989,20.031h-245.5c-10.403,0-20.08-8.743-21.13-19.09l-3.71-36.594h225.748
	c5.799,0,10.5-4.701,10.5-10.5c0-5.799-4.701-10.5-10.5-10.5H109.347L96.921,139.92c0-0.003,0-0.004,0-0.006l-0.002-0.023
	c-0.473-4.669,0.879-9.024,3.809-12.266c2.865-3.171,6.948-4.917,11.497-4.917h323.618c0.035,0.001,0.068,0.005,0.103,0.005
	c0.034,0,0.068-0.004,0.102-0.005h26.647c4.148,0,7.346,1.274,9.001,3.587C473.352,128.607,473.526,132.044,472.188,135.972z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="container">
                <h1>Товары</h1>
            </div>
            <div className='content'>
                <div className="container">
                    {data.map((product, index) =>
                        <Card
                            key={index}
                            title={product.title}
                            description={product.description}
                            image={product.image}
                            onBuyClick={(value) => setCount(count + value)}
                        />
                    )}
                    {/*<div className="card">*/}
                    {/*    <div className="card-image">*/}
                    {/*        <img src="./images/1.jpg" alt=""/>*/}
                    {/*    </div>*/}
                    {/*    <div className="card-content">*/}
                    {/*        <div className="card-title">Предмет 1</div>*/}
                    {/*        <div className="description">*/}
                    {/*            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.*/}
                    {/*        </div>*/}
                    {/*        <div className="actions">*/}
                    {/*            <div className="calc">*/}
                    {/*                <div className="minus"*/}
                    {/*                     onClick={() => {*/}
                    {/*                         if (item1 > 1) {*/}
                    {/*                             setItem1(item1 - 1)*/}
                    {/*                         }*/}
                    {/*                     }}>-</div>*/}
                    {/*                <div className="calc-result">{item1}</div>*/}
                    {/*                <div className="plus" onClick={() => setItem1(item1 + 1)}>+</div>*/}
                    {/*            </div>*/}
                    {/*            <button onClick={() => setCount(count + item1)}>Купить</button>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="card">*/}
                    {/*    <div className="card-image">*/}
                    {/*        <img src="./images/2.jpg" alt=""/>*/}
                    {/*    </div>*/}
                    {/*    <div className="card-content">*/}
                    {/*        <div className="card-title">Предмет 2</div>*/}
                    {/*        <div className="description">*/}
                    {/*            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.*/}
                    {/*        </div>*/}
                    {/*        <div className="actions">*/}
                    {/*            <div className="calc">*/}
                    {/*                <div className="minus"*/}
                    {/*                     onClick={() => {*/}
                    {/*                         if (item2 > 1) {*/}
                    {/*                             setItem2(item2 - 1)*/}
                    {/*                         }*/}
                    {/*                     }}>-</div>*/}
                    {/*                <div className="calc-result">{item2}</div>*/}
                    {/*                <div className="plus" onClick={() => setItem2(item2 + 1)}>+</div>*/}
                    {/*            </div>*/}
                    {/*            <button onClick={() => setCount(count + item2)}>Купить</button>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
}

export default App;
