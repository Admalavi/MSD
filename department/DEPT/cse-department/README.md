# CSE Department Website (React + Vite)

A React + Vite recreation of a college CSE department page, inspired by
the D. Y. Patil CSE department site layout (original design/content,
not copied source code).

## Setup

```bash
npm install
npm run dev
```

Open the URL Vite prints, usually http://localhost:5173/

## Build

```bash
npm run build
npm run preview
```

## Images

Add your own images to `public/images/` (and `public/images/faculty/`)
matching the filenames referenced in the components:

- college.jpg (hero background)
- cse-lab.jpg (about section)
- programming-lab.jpg, database-lab.jpg, network-lab.jpg, ai-lab.jpg (labs)
- faculty/faculty1.jpg ... faculty4.jpg
- logo.png (favicon)

## Structure

```
cse-department/
├── public/
│   ├── images/
│   └── logo.png
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```
