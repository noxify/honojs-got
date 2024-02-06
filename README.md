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
