

function sendRequest(name, phone, adress, goods, sum) {
    let data = {order: {}, goods: []};
    
    data.client = name + " " + phone;

    data.order.address = "ул. " + address.street + ", дом " + adress.house + ", " + adress.entrance + " подъезд, " + adress.floor + "этаж, квартира " + adress.flat ;
    data.order.sum = sum;

    let countOfGoods = goods.length; 

    for (let i = 0; i < countOfGoods; i += 1) {
        let goods = {
            title: goods[i].title,
            count: goods[i].count
        };
        data.goods.push(goods);
    }

    let jsonData = JSON.stringify({data});
    console.log(data);

    return jsonData;
}
