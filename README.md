# Developer Portfolio

![Portfolio HomePage](https://github.com/user-attachments/assets/079ef830-d608-4b46-8b1d-b09929250b00)

A modern and customizable **developer portfolio website** built with **React, TypeScript, Tailwind CSS**.  
The site is designed for showcasing your **projects, experience, education, and skills** in a clean and professional format.

---

## 🚀 Features

- ⚡ **React + TypeScript** for robust and scalable code
- 🎨 **Tailwind CSS** styling and UI components
- 📂 Modular structure: easy to add or remove sections
- 📝 Centralized data in config files (`src/data/`)
- 📱 Fully responsive and mobile-friendly
- 🌗 Light/Dark mode support

---

## 📦 Installation

1. **Clone the repository**

```bash
    git clone https://github.com/jroyantor/developer-portfolio.git
    
    cd portfolio
```

2. **Install dependencies**

```bash
    npm install
    # or
    yarn install
```
3. **Run development server**

```bash
    npm run dev
    # or
    yarn dev
```

The site will be available at http://localhost:5173/ (default Vite port).


## 🔧 Customization

All site content is managed via configuration files inside the src/data/ folder.
Example structure:

```bash
    src/
    ├─ components/     # UI components
    ├─ data/           # Config files (modify these for your content)
    │   ├─ experience.ts
    │   ├─ education.ts
    │   ├─ projects.ts
    │   ├─ skills.ts
    │   └─ about.ts
    |   |_ contact.tsx
    ├─ pages/          # Page components
    └─ App.tsx
```

Steps to modify content:

    Experience → src/data/experience.ts

    Education → src/data/education.ts

    Projects → src/data/projects.ts

    Skills → src/data/skills.ts

    About → src/data/about.ts

    Contact → src/data/contact.tsx

Each file exports an array/object that is directly consumed by the section components.
Simply edit the data and the site will update.


## 📂 Deployment

This project is built with Vite

and can be deployed on:

- [Vercel](https://vercel.com/)

- [Netlify](https://www.netlify.com/)

- GitHub Pages

Any static hosting provider

To build for production:

```bash
 npm run build
```

This will output static files into the dist/ folder, which can be deployed.


## 📝 License

This project is licensed under the **MIT License**.
You are free to use, modify, and distribute it for personal or commercial purposes.

## ✨ Credits

Built with ❤️ using React, TypeScript, Tailwind CSS.
Inspired by modern portfolio best practices and optimized for easy customization.

