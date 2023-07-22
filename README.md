
# Validar Cedula

La intención de este proyecto es probar el uso del endpoint **/v3/cedulas/{id}/validate** provisto por el portal público de API's del gobierno Dominicano 🇩🇴


## Cedula Validation API RESTful


#### Validation

```http
  GET /v3/cedulas/{id}/validate

```

| Parametro | Tipo     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `int` | Cedula or Hash |

#### Ejemplo

````
Request: 

curl -X 'GET' \
  'https://api.digital.gob.do/v3/cedulas/40225999348/validate' \
  -H 'accept: application/json'

````

````
Response: 

{
  "valid": false
}

````
