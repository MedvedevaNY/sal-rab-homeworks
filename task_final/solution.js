

function sendRequest(name, phone, adress, goods, sum) {
    let data = {client, order: {}, goods: []};
    
    data.client = name + " " +phone;

    data.order.address = "ул. " + address.street + ", дом " + adress.house + ", " + adress.entrance + " подъезд, " + adress.floor + "этаж, квартира " + adress.flat ;
    data.order.sum = sum;

    let countOfGoods = goods.length;
    let goods = {
        title,
        counte,
    }; 

    for (let i = 0; i < countOfGoods; i += 1) {
        data.goods.push(goods[i]);
    }

    let jsonData = JSON.stringify({data: data});
    console.log(data);

    return jsonData;
}
