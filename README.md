
# hospitalApi

Simple Api to manage doctors and patients

Routes

- /doctors/register → with username and password
- /doctors/login → returns the JWT to be used
- /patients/register
- /patients/:id/create_report
- /patients/:id/all_reports → List all the reports of a patient oldest to latest
- /reports/:status → List all the reports of all the patients filtered by a specific status


## Run Locally

Clone the project

```bash
  git clone https://github.com/Nisarg39/hospitalApi.git
```

Go to the project directory

```bash
  cd hospitalApi
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## FileStructure

```
📦 
├─ .gitignore
├─ config
│  ├─ mongoose.js
│  └─ passport-jwt-strategy.js
├─ controller
│  └─ api
│     └─ v1
│        ├─ doctorsApi.js
│        ├─ patientsApi.js
│        └─ reportsApi.js
├─ index.js
├─ model
│  ├─ doctors.js
│  ├─ patients.js
│  └─ reports.js
├─ package-lock.json
├─ package.json
└─ routes
   ├─ api
   │  ├─ index.js
   │  └─ v1
   │     ├─ doctors.js
   │     ├─ index.js
   │     ├─ patients.js
   │     └─ reports.js
   └─ index.js
```
## Authors

- [@Nisarg39](https://github.com/Nisarg39)

