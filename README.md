<div align="center">

# LINKSPACE
### URL SHORTENER

![Angular](https://img.shields.io/badge/angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

<br />

**Plataforma moderna de encurtamento de URLs com analytics em tempo real.**
**Interface intuitiva e dashboard completo para gerenciamento de links.**

[Getting Started](#-getting-started) • [License](#-license)

</div>

---

## 🏗️ Architecture

Fullstack application with **Angular** frontend and **Node.js/Express** backend.

```mermaid
graph TD;
    User-->Frontend[Angular App];
    Frontend-->Backend[Express API];
    Backend-->DB[(MongoDB)];
```

---

## 🚀 Applications

<div align="center">

| Application | Description | Tech Stack |
|:-----------:|:----------- |:---------- |
| **Frontend** | User dashboard and link management. | `Angular` `Bootstrap` `TypeScript` |
| **Backend** | API for link generation and analytics. | `Node.js` `Express` `MongoDB` |

</div>

---

## 🛠️ Getting Started

### Prerequisites

*   **Node.js 18+**
*   **MongoDB**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/DionathaGoulart/link-shortener--Angular.git

# 2. Setup Backend
cd backend
npm install
npm start

# 3. Setup Frontend (in a new terminal)
cd ../frontend
npm install
npm start
```

---

## 📄 License

This project is proprietary and confidential.

**Copyright © 2026 Dionatha Goulart.**
All Rights Reserved.
