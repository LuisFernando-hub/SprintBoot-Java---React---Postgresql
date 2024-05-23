# SprintBoot-Java---React---Postgresql
Creating Application for learning java and react js with sprint boot

# FRONT END IN REACT TSX GET STARTED
## Install
    npm install

## Run the app

    npm run dev

## LIST FODDS
### ![image](https://github.com/LuisFernando-hub/SprintBoot-Java---React---Postgresql/assets/84160974/98238129-09d9-41e3-8096-a3ffd19d83e7)

## CREATED FOOD
### ![image](https://github.com/LuisFernando-hub/SprintBoot-Java---React---Postgresql/assets/84160974/232a9532-286f-4981-92c8-d4aacd852911)


# BACK END REST API

Api SprintBoot Java with postgresql.

## Get list of Foods

### Request

`GET /food/`

    curl -i -H 'Accept: application/json' http://localhost:8080/food/

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2
    [
  	{
  		"id": 1,
  		"title": "Cachorro Quente",
  		"image": "https://receidelicia.com.br/wp-content/uploads/2021/02/cachorros-quentes-da-burger-king-1024x683.png",
  		"price": 20
  	},]
  

## Create a new Food

### Request

`POST /food`

    curl -i -H 'Accept: application/json' -d 'title=Cachorro Quente&price=20&image=https://receidelicia.com.br/wp-content/uploads/2021/02/cachorros-quentes-da-burger-king-1024x683.png' http://localhost:8080/food

### Response

    HTTP/1.1 201 Created
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/1
    Content-Length: 36



