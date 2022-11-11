
## API Reference for Agency Client CRUD

#### Create Agency and Client

```http
  POST /create
```
### JSON body:
```
{
    "agency": {
        "name": "Agency3",
        "agencyId": 3,
        "address1": "Some address",
        "address2": "Some address",
        "state": "West bengal",
        "city": "bolpur",
        "phone": "8906780443"
    },
    "client": {
        "name": "Client 22",
        "email": "john@doe.com",
        "phone": "8906780443",
        "bill": 800
    }
}
```

#### Update Client

```http
  PUT /update-client
```
### JSON body:
``` 
{
    "_id": "636e1412e2323a41b64dee1b",
        "email": "john@doe.com",
        "phone": "1234568",
        "bill": 500
    }
```

#### Get Max Bill

```http
  GET /get-max-bill
```



