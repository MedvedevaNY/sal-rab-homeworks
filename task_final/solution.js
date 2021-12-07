

function sendRequest(name, phone, address, goods, sum) {
    let data = {client, order: {}, goods: []};
    
    data.client = name + phone;

    data.order.address = address;
    data.order.sum = sum;

    let countOfGoods = goods.length;

    for (let i = 0; i <= countOfGoods; i += 1) {
        data.goods.push(goods[i].title);
        data.goods.push(goods[i].count);
    }

    let jsonData = JSON.stringify(data);

    return jsonData;
}
