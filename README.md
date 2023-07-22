
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
# Desplegar proyecto

Para desplegar el proyecto corre el siguiente comando: 

````
Crear imagen: 

docker build -t validarcedula .

Iniciar contenedor: 

docker run -dp <<PUERTO>>:80 --name validarcedula validarcedula

````

