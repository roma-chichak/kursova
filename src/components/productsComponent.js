import "./style.css"
import {useEffect, useState} from "react";


function ProductsList(props) {

    const [productsList, setProductsList] = useState([
        {id:1, name:"Держава", price:23, about:"«Держава» Платона є одним із найцікавіших і найоригінальніших творів давньогрецького мислителя. Обґрунтовуючи свою модель політичного устрою, Платон вимальовує картину ідеальної держави, у якій торжествують ідеї Добра й Справедливості, ліквідовано приватну власність. ", autor:"Платон", imgUrl:"img/book.png"},
        {id:2, name:"Наодинці з собою", price:23, about:"Книга «Наодинці з собою» видатного римського імператора Марка Аврелія залишається актуальною і в наш час. Могутній правитель гігантської імперії у часи її розквіту є незаперечним авторитетом. Тож крізь віки усі любителі історії, захоплені могутністю великої Римської імперії, ловлять кожне слово з уст імператора.", autor:"Марк Аврелій", imgUrl:"img/book2.png"},
        {id:3, name:"Про стійкість мудреця. Діалоги", price:23, about:"В опублікованих у цій книжці філософських «Діалогах» видатний римський мислитель-стоїк Сенека, блискучий майстер емоційного афористичного письма у живій бесіді з читачем радить, у який спосіб за умов моральної кризи споживацького суспільства протистояти знеособленню.", autor:"Сенека", imgUrl:"img/book3.png"},
        {id:4, name:"Моральні листи до Луцилія", price:23, about:"Луцій Анней Сенека (бл. 4 до Р. X. — 65 по Р. X.) — римський філософ і письменник, видатний представник стоїцизму. У його 'Моральних листах до Луцилія' звучать заклики жити у злагоді з природою, несхитно переносити удари долі, йти шляхом постійного духовного вдосконалення.", autor:"Сенека", imgUrl:"img/book4.png"},
        ]);

    const [binList, setBinList] = useState(setOrNull());
    const [update, setUpdate] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        localStorage.setItem('orderList', JSON.stringify(binList))
        getTotal();
    }, [update]);

    async function getTotal() {
        let total = 0;
        await binList.forEach(order => {
            total += Number(order.count) * Number(productsList[binList.indexOf(order)].price);
        })
        setTotal(total)
    }
    function setOrNull() {
        if (localStorage.getItem('orderList') === null){
            let order = [];
            productsList.forEach(product => {
                order.push({id: product.id, count:0})
            })
            return order
        }
        else {
            return JSON.parse(localStorage.getItem('orderList'));
        }
    }

    const addItemToOrder = (id) =>(e) => {
        e.preventDefault()
        console.log(binList)
        binList.forEach(item => {
                if(item.id == id){
                    item.count++;
                    console.log("++");
                    setUpdate(update+1);
                }
            }
        )
    }
    const removeItemFromOrder = (id) =>(e) => {
        e.preventDefault()
        binList.forEach(item => {
                if(item.id == id){
                    if(item.count > 0){
                        item.count--;
                        console.log("--");
                        setUpdate(update+1);
                    }
                }
            }
        )
    }

    if(props.variant == "main"){
        return(
            <>
                {
                    productsList.map((product, index) =>(
                        // <div className="shop__card">
                        //     <div className="shop__about"><img src="img/book.png" alt="" />
                        //         <p>'With fair-tressed Demeter, the sacred goddess, my song begins, With herself and her
                        //             slim-ankled daughter, whom Aidoneus once Abducted...' Most people are familiar, at
                        //             least by repute, with the two great epics of Homer, the Iliad and the Odyssey, but
                        //             few are aware that other poems survive that were </p>
                        //     </div>
                        //     <div className="shop__buy">
                        //         <div className="shop__info">
                        //             <h3>The Republic</h3><span>By Plato</span>
                        //             <p>₹285</p>
                        //         </div>
                        //         <div className="shop__button"><a href=""> Buy </a></div>
                        //     </div>
                        // </div>
                        <div className="shop__card" key={product.id}>
                            <div className="shop__about"><img src={product.imgUrl} alt="" />
                                <p>{product.about} </p>
                            </div>
                            <div className="shop__buy">
                                <div className="shop__info">
                                    <h3>{product.name}</h3><span> by {product.autor}</span>
                                    <p>₹{product.price}</p>
                                </div>
                                <div className="shop__button" onClick={addItemToOrder(product.id)}><a href=""> Buy </a></div>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
    else if(props.variant == "bin"){
        return(
            <>
                {
                    productsList.map((product, index) =>(
                        <div className="forms__product" key={product.id}>
                            <img src={product.imgUrl} alt=""/>
                            <div className="products__aboutbread">
                                <p>{product.name}</p>
                                <p>{product.price}</p>
                            </div>
                            <div className="products__count">
                                <a href="" onClick={removeItemFromOrder(product.id)}>-</a>
                                <p>{binList[index].count}</p>
                                <a href="" onClick={addItemToOrder(product.id)}>+</a>
                            </div>
                        </div>
                    ))
                }
                <div className="forms__total">
                    <p>Total: ₹{total}</p>
                </div>
            </>
        )
    }
}
export default ProductsList