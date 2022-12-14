$(function() {
    //The passed argument has to be at least a empty object or a object with your desired options
    //$("body").overlayScrollbars({ });
    $("#items").height(552);
    $("#items").overlayScrollbars({
        overflowBehavior: {
            x: "hidden",
            y: "scroll"
        }
    });
    $("#cart").height(445);
    $("#cart").overlayScrollbars({});
});


$(document).ready(function() {


    // console.log('Working');
    var url = "https://testing.paynet.co.in/pos-api/public/index.php/api/v1/";
    var bearer = 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZDhmNjEwYTRhZWFmYzIzNjcxY2RiNWUzNTE4YjY1NTcyNzcyZWEzMDYwMjQ2YzgyYWEzNzc1MDA4YmRhZTViYmYyYWU0Yzk3ZDZiYWMxOTIiLCJpYXQiOiIxNjY2MzU2OTg5LjU3MjE2NCIsIm5iZiI6IjE2NjYzNTY5ODkuNTcyMTY4IiwiZXhwIjoiMTY5Nzg5Mjk4OS41NDc2NDAiLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.k1s5Hw7sbHPCJMApOsCDTt-BSoZAD-MDGcEYnK-Dpfs1drofYwuJwoKE6W2blkrT0xY8I0zBmH5UiJrmL08IPWk0RidgAHhHtizT4znklJa9hzyrCnuiHNJdqdhOkUl7YcPORbgOAu9ppzxtpUCd2pyGnm93rExOmCB-uIKqCftep8Mt8beW89mY1fQv46OCNLSSFtJ92-48n7HhK6w1cZ4PsBHFxeb_xJaAfbGxNCncPU02yl1zCouPsh03Ms5MNV2zw3rb0YQgi2C8yTpdBG29Ud919DxpkwkfVWafFzAMqTSibn-ChKU-UXnz99c5B-KGflZulb84RVNcEMd_0-VdsK5CmGctUSvWvc0D83C2W-STvRLzUk66gdCYBho3uiMc2wbTtpJ6C6FHPO-b_R-Ap9LTezXVP6aok7o8zKFzo-cEgGxSN_s4IZr2dlr7X_6QIAWbilyyXq9f3D6NyThqAI7XpKKouK_Jg8teuN_lyJV3VwZ_VL24twwjh74oRjNeVQUeBtM7bi8yleKw1DfAXt85uXwB4CG4QuvQ8WwTUwWKtS0MdXgl1MMTB8wH8HVfLnA502dWVychNujH7RpF3shZ-qcqboP0d35BxArjOu8nUsGA9fKuShoHzMYWtDTGHYa1f3yvVghljQbumlQeCp_KAQcTwTg8oqBKSmk';


    // select dropdown all category select
    fetch(url + 'product_category', {
            method: 'GET',
            headers: {
                'Authorization': bearer,
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Origin": "https://testing.paynet.co.in/",
                "Access-Control-Allow-Methods": "POST, PUT, PATCH, GET, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization",
                'Content-Type': 'application/json'
            },

        })
        .then(
            (res) => {
                return res.json();
            }
        )
        .then(
            (data) => {
                // console.log(data.data);
                let htmlData = '';

                data.data.forEach(
                    (item, index) => {
                        // console.log(item);;
                        htmlData += `
                        <option value="${item.product_category_id}">${item.product_category_name}</option>
                       `;
                    }
                )
                let appendHtml = document.getElementById('productCategory').innerHTML = htmlData;
            }
        )
        // close fetch api select dropdown all category select       

    /*****************************************************
     * 
     * all Product Display With Price Image title etc.
     * 
     * ***************************************************
     */
    fetch(url + 'product', {
            method: 'GET',
            headers: {
                'Authorization': bearer,
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Origin": "https://testing.paynet.co.in/",
                "Access-Control-Allow-Methods": "POST, PUT, PATCH, GET, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization",
                'Content-Type': 'application/json'
            },

        })
        .then(
            (res) => {
                return res.json();
            }
        )
        .then(
            (data) => {
                console.log(data.data);
                let htmlProductInfoData = '';

                data.data.forEach(
                    (item, index) => {
                        // console.log(item);;
                        htmlProductInfoData += `
                        <div class="col-md-3">
                        <figure class="card card-product">
                            <span class="badge-new"> NEW </span>
                <div class="img-wrap">
                    <img src="${item.product_image_path}">

                </div>
                <figcaption class="info-wrap">
                    <a href="#" class="title">${item.product_image_title
                    }</a>
                    <div class="action-wrap">
                        <a class="btn btn-primary btn-sm float-end addToCart" onclick="addtoCart(${item.product_id})"> <i class="fa fa-cart-plus"></i> Add </a>
                        <div class="price-wrap h5">
                            <span class="price-new">Rs. ${item.product_price
                            }</span>
                        </div>
                    </div>
                </figcaption>
                </figure>
            </div>

                        `;

                    }
                )
                let appendProductHtml = document.getElementById('productItems').innerHTML = htmlProductInfoData;

                if (localStorage.getItem("products") == null) {
                    localStorage.setItem('products', JSON.stringify(data.data));

                } else {
                    var products = JSON.parse(localStorage.getItem("products"));
                }
            }
        )





    /*******
     * 
     */
    // addEventListener('DOMContentLoaded', () => {
    //     console.log('DOM Content Loaded');
    //     // function addProductList(index) {
    //     //     console.log(index)
    //     // }

    //     let addbtn = document.querySelectorAll('.addToCart');
    //     console.log(addbtn)
    //     addbtn.forEach((a, index) => {
    //         console.log(a, index)
    //     })


    // })



})