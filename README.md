# Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

All static files are stored in public folder.

Second, get the static html files folder

run

```bash
yarn build
```

there will be an `out` folder, inside the folder are static files, you can use this folder to deploy on the server.

# How to update data

## 1. Update 3 buttons in Hero section

Go to `/components/HomeSection.tsx` and edit `BOX_DATA`

## 2. Update categories

Firstly, go to `/data/categories`, manually add new ts files `category2.ts` `category3.ts`. Please follow the same format/structure of `category1.ts`.  
Secondly, go to `/components/CompanySection.tsx`, import new ts files and edit the code like

```
<CompanyCategory mb={["60px", "80px", "100px"]} {...CATEGORY1} />
<CompanyCategory mb={["60px", "80px", "100px"]} {...CATEGORY2} />
<CompanyCategory {...CATEGORY3} />
```

## 3. Update companies and products

Go to `/data/companies`, add new company ts file and import it to `index.ts` following the same fortmat/structure.

> [!IMPORTANT]  
> `slug` field in `/data/companies/index.tsx` needs to match company name in `/data/categories/categories.ts` files.
