# UseLessJs
UseLessJs is a library with some special HTML Elements to make common operations easy. The elements will help to reduce JavaScript code. 

## How to implement
To implement UseLessJs to you project you need to link your script tag as module type. An example bellow : 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>How to implement</title>
</head>
<body>
    <!-- Other tags -->
    <script src="/lib/useless.js" type="module"></script>
</body>
</html>
```



## Currently this library has 6 special elements. 

### ```<form-submit></form-submit>``` 
This element helps you to submit form data to backend without refresh and JavaScript. This only support GET & POST Requests. Here an example below : 

```html
<!-- You need to wrap your form with the element -->
<form-submit url="http://localhost:9000/test-submit" method="get" response="myfunc">
    <form>
        <input type="email" name="email"/>
        <input type="password" name="password"/>
        <button>Submit</button>
    </form>
</form-submit>
<script>
  function myfunc(response){
    console.log(response); // You can get response from server with callback function.
  }
</script>
```

### ```<fetch-data><fetch-data>```
This element helps you to fetch data like posts from backend server without any JavaScript.

```html
<!-- You need to wrap your item with the element -->
<fetch-data src="https://api.thecatapi.com/v1/images/search?limit=4&breed_ids=beng&api_key=REPLACE_ME">
    <div class="post">
        <img src="{url}" width="100" height="100">
        <h3>{id}</h3>
    </div>
</fetch-data>
<!-- use {property_name} literal to show the JSON object property -->
```

### ```<send-data></send-data>```
If you need to send data on button click this element will help you to do it without JavaScript. An example below:

```html
<!-- You need to wrap your button with the element -->
<send-data url="http://localhost:9000/test-submit" method="post" data-user="1" response="myfunc">
    <button>Send Data</button> 
</send-data>
```

### ```<count-num></count-num>```
You can create counter without any JavaScript. An Example : 

```html
<count-num initial="0">
    <div>{value}</div>
    <button data-action="+" data-by="1">Increament ({value})</button>
    <button data-action="-" data-by="1">Decreament ({value})</button>
</count-num>
```

### ```<input-validate></input-validate>```
To validate your input data you can use the this element. You can validate input value with Regular Expressions. An Example below : 

```html
<!-- Wrap your input tag with the element, the valid/invalid attribute use to add class by valid/invalid data. -->
<input-validate valid="valid" invalid="invalid" regex="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$">
    <input type="text" placeholder="Enter something...."/>
</input-validate>
```

### ```<load-script></load-script>```
To load script file after page load this element helps you. It's possible to set a delay to load the script on document.

```html
<!-- Simply set your src to load js. And set after attribute to specify delay -->
<load-script after="5000" src="/path/to/script.js"></load-script>
```

### ```<load-image></load-image>```
This is a new feature on UseLessJS to load images efficiently. This feature has built in skeleton loading feature. Sekeleton loading will be shown until the image load.
```html
<load-image src="/images/img-1.jpg" width="340" height="220"></load-image>
```


