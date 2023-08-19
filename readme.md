# API Documentation (For Backend Part)

## Install

    npm install

## Run the app

    npm start

# REST API

The REST API to the assignment is described below.

## Sign Up User
### Request

`POST /auth/sign-up`

    curl --location --request POST 'localhost:2001/auth/sign-up' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data-urlencode 'name=TestUser1' \
    --data-urlencode 'email=test1@gmail.com' \
    --data-urlencode 'password=123'

## Sign In User

### Request

`POST /auth/sign-in`

   curl --location --request POST 'localhost:2001/auth/sign-in' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data-urlencode 'email=test1@gmail.com' \
    --data-urlencode 'password=123'

## Create a Category

### Request

`POST /category/createCategory`

    curl --location --request POST 'localhost:2001/category/createCategory' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data-urlencode 'name=laptop'

## List All Categories

### Request

`GET /category/listCategories`

    curl --location --request GET 'localhost:2001/category/listCategories'

## Create Product

### Request

`POST /product/createProduct`

    curl --location --request POST 'localhost:2001/product/createProduct' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data-urlencode 'title=Product2' \
    --data-urlencode 'description=HP Laptop' \
    --data-urlencode 'price=55000' \
    --data-urlencode 'availibility=true' \
    --data-urlencode 'category=laptops'

## Get All Products

### Request

`GET /product/getAllProducts`

    curl --location --request GET 'localhost:2001/product/getAllProducts'

## Get A Single Product

### Request

`GET /product/getProduct/:id`

    curl --location --request GET 'localhost:2001/product/getProduct/{id}'

## Add Item To Cart

### Request (Add token here in Header)

`POST /cart/addItemToCart`

    curl --location --request POST 'localhost:2001/cart/addItemToCart' \
    --header 'Authorization: Bearer {token}' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data-urlencode 'product_ID={id}' \
    --data-urlencode 'quantity=5'

## View Cart

### Request(Add token here in Header)

`GET /cart/viewCart`

    curl --location --request GET 'localhost:2001/cart/viewCart' \
    --header 'Authorization: Bearer {token}'

## Update Quantity in Cart

### Request(Add token here in Header)

`PUT /cart/updateCart`

    curl --location --request PUT 'localhost:2001/cart/updateCart' \
    --header 'Authorization: Bearer {token}' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data-urlencode 'quantity=15' \
    --data-urlencode 'productName=Product3'

## Delete Item in Cart

### Request(Add token here in Header)

`DELETE /cart/deleteItemCart`

    curl --location --request DELETE 'localhost:2001/cart/deleteItemCart' \
    --header 'Authorization: Bearer {token}' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data-urlencode 'productName=Product2'

## Place Order

### Request (Add token here in Header)

`POST /orders/placeOrder`

    curl --location --request POST 'localhost:2001/orders/placeOrder' \
    --header 'Authorization: Bearer {token}'

## Order History

### Request (Add token here in Header)

`GET /orders/orderHistory`

    curl --location --request GET 'localhost:2001/orders/orderHistory' \
    --header 'Authorization: Bearer {token}'

## Single Order Detail

### Request (Add token here in Header)

`GET /orders/orderDetail/{orderId}`

    curl --location --request GET 'localhost:2001/orders/orderDetail/{orderId}' \
    --header 'Authorization: Bearer {token}'




