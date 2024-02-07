## Usage

### 1. Start the dev Server

```
npm run dev
```

### 2. Run with retry

```
npm run retry
```

In the log for the dev server, you will see something like this:

```
Server is running on port 3000
  <-- GET /retry
  --> GET /retry 400 1ms
  <-- GET /retry
  --> GET /retry 400 1ms
  <-- GET /retry
  --> GET /retry 400 1ms
```


In the logs for the script execustion, you will see the following log entry multiple times ( in our case it's 3x):

```
Request: GET http://localhost:3000/retry
Response: GET 400 /retry %s
Request: GET http://localhost:3000/retry
Response: GET 400 /retry %s
Request: GET http://localhost:3000/retry
Response: GET 400 /retry %s
```

### 2. Run with noretry

```
npm run noretry
```

In the log for the dev server, you will see something like this:

```
Server is running on port 3000
  <-- GET /noretry
  --> GET /noretry 400 4ms
```

In the logs for the script execustion, you will see the following log entry only once:

```
Request: GET http://localhost:3000/noretry
Response: GET 400 /noretry %s
```

### 3. Run with extend and norety

```
npm run extend
```

In the log for the dev server, you will see something like this:

```
Server is running on port 3000
  <-- GET /noretry
  --> GET /noretry 400 4ms
```

In the logs for the script execustion, you will see the following log entry only once:

```
Request: GET http://localhost:3000/noretry
Response: GET 400 /noretry %s
```
