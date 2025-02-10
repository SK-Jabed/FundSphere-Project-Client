# **FundSphere - A Modern Crowdfunding Platform** 🚀💰  

![CasePix Banner](https://github.com/SK-Jabed/FundSphere-Project-Client/blob/0c96772db2c1e3d89f35cc6865b1af1a5d4640b0/src/assets/Screenshot%202025-02-07%20155724.png)

## 📌 **Project Overview**  
**FundSphere** is a **modern, secure, and user-friendly** crowdfunding platform designed for **entrepreneurs, creators, and individuals** looking to raise funds for their ideas, causes, or startups. The client-side of **FundSphere** is built with **React, Tailwind CSS, and Firebase**, ensuring a **smooth and interactive** user experience with secure authentication and real-time campaign tracking.  

This platform **empowers users** by providing a **seamless interface to create, manage, and donate to campaigns** while ensuring secure transactions and optimized performance.  

---

## 🌍 **Live Demo & Deployment**  

🔗 **Live Site**: [FundSphere Live](https://b10-assignment-10-6b3b9.web.app/)  

---

## 🔑 **Key Features**  

### 🎯 **User & Authentication Features**  
✅ **Secure Authentication** – Firebase authentication (Email/Password & Google login).  
✅ **User Dashboard** – Manage personal campaigns and track donations.  
✅ **Protected Routes** – Only authenticated users can create, edit, or manage campaigns.  

### 💸 **Campaign & Fundraising Features**  
✅ **Create & Manage Campaigns** – Users can create, update, and delete campaigns easily.  
✅ **Secure Donations** – Users can donate securely with real-time tracking.  
✅ **Campaign Sorting & Filtering** – Find campaigns based on category, amount raised, or popularity.  
✅ **Real-Time Updates** – Firebase integration ensures live updates for campaigns and donations.  

### 🌟 **Enhanced UI & Experience**  
✅ **Dark/Light Mode** – Customizable UI experience.  
✅ **Engaging Animations** – Powered by Framer Motion and Lottie animations.  
✅ **Loading Spinners & Error Handling** – Smooth UX with real-time feedback.  
✅ **Custom Alerts & Toasters** – Notifications using `react-toastify` and `sweetalert2`.  

---

## 📜 **Additional Features**  
🔹 **Search Functionality** – Quickly find campaigns using keywords.  
🔹 **Featured Campaigns** – Highlight trending or featured campaigns.  
🔹 **Campaign Goal Tracker** – Live progress tracking of fundraising goals.  
🔹 **Comment & Engagement System** – Users can interact with campaign owners.  
🔹 **Social Sharing** – Share campaigns on social media.  
🔹 **Admin Panel** *(Planned)* – Moderation tools for reviewing campaigns.  

---

## 🛠 **Technologies Used**  

| **Category**         | **Technologies**  |
|----------------------|------------------|
| **Frontend**        | React, Tailwind CSS, DaisyUI |
| **State Management**| React Context API |
| **Authentication**  | Firebase Authentication |
| **Routing**         | React Router |
| **UI Animations**   | Framer Motion, Lottie |
| **Notifications**   | React Toastify, SweetAlert2 |
| **Backend**         | Node.js, Express.js |
| **Database**        | MongoDB |
| **Hosting**         | Netlify (Client), Vercel (Server) |

---

## 📦 **Dependencies**  

### 🔹 **Main Dependencies**
- `react` – Core UI library.  
- `axios` – Handle API requests.  
- `firebase` – User authentication and real-time data updates.  
- `react-router-dom` – Routing and navigation.  
- `framer-motion` – Smooth animations and transitions.  
- `react-toastify` – Beautiful toast notifications.  
- `sweetalert2` – Modern pop-up alerts.  
- `swiper` – Responsive campaign carousels.  

### 🔹 **Dev Dependencies**
- `vite` – Fast development server.  
- `tailwindcss` – Utility-first CSS framework.  
- `eslint` – Code quality and linting.  

---

## 📡 **API Endpoints Reference**  

| Method | Endpoint             | Description                      |
|--------|----------------------|----------------------------------|
| **Auth Routes** |||
| POST   | `/auth/register`     | Register a new user              |
| POST   | `/auth/login`        | Authenticate user & generate token |
| GET    | `/auth/profile`      | Retrieve authenticated user profile |
| **Campaign Routes** |||
| GET    | `/campaigns`         | Fetch all campaigns              |
| POST   | `/campaigns`         | Create a new campaign            |
| GET    | `/campaigns/:id`     | Get details of a specific campaign |
| PUT    | `/campaigns/:id`     | Update an existing campaign      |
| DELETE | `/campaigns/:id`     | Remove a campaign from the platform |
| **Donation Routes** |||
| POST   | `/donations`         | Make a donation to a campaign    |
| GET    | `/donations/:id`     | Fetch donation details for a campaign |

📌 *For full API details, refer to API documentation (Swagger/Postman collection link).*  

---

## 📐 Design Philosophy
- Minimalistic yet modern.
- Mobile-first responsive design.
- Accessibility-focused with user-friendly interactions.

---

## 🔧 **Installation & Setup**  

### **1️⃣ Prerequisites**  
Ensure you have the following installed:  
✔ **Node.js** (LTS version) - [Download Here](https://nodejs.org/)  
✔ **Git** - [Download Here](https://git-scm.com/)  

---

### **2️⃣ Clone the Repository**  
```bash
git clone https://github.com/your-username/fundsphere-client.git
cd fundsphere-client
```

---

### **3️⃣ Install Dependencies**  
```bash
npm install
```

---

### **4️⃣ Configure Firebase & Environment Variables**  
Create a `.env` file in the root directory and add:  

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

### **5️⃣ Start the Development Server**  
```bash
npm run dev
```
The application should now be running at `http://localhost:5173/`.  

---

## 🚀 **Deployment**  

### **1️⃣ Deploy on Netlify** *(Frontend)*  
1. Push the repository to **GitHub**.  
2. Link **Netlify** to your GitHub repo.  
3. Configure environment variables in **Netlify Dashboard**.  
4. Click **Deploy** and monitor logs.  

### **2️⃣ Deploy on Vercel** *(Backend)*  
```bash
vercel deploy
```
Ensure that `.env` variables are configured in **Vercel Settings**.  

---

## 🔥 **Future Enhancements**  
🔹 **Real-Time WebSockets for Live Donations** – Users can see live donation updates.  
🔹 **Admin Panel for Moderation** – Platform moderation for removing fraudulent campaigns.  
🔹 **AI-Powered Fraud Detection** – Detect and block suspicious campaigns.  
🔹 **Blockchain Integration** *(Future Plan)* – Decentralized and transparent crowdfunding.  
🔹 **Multi-Currency Support** – Accept donations in different currencies.  

---

## 🤝 **Contributing**  
🔹 **Fork the repository.**  
🔹 **Create a new branch:** `git checkout -b feature-branch`  
🔹 **Commit your changes:** `git commit -m "Added a new feature"`  
🔹 **Push to your forked repo:** `git push origin feature-branch`  
🔹 **Submit a pull request for review.**  

---

## 📜 **License**  
This project is licensed under the **MIT License**.  

---

## 🎯 **Final Thoughts**  
**FundSphere** is designed to **empower individuals and organizations** by providing a **secure, modern, and accessible** crowdfunding platform. We are constantly improving and expanding its features.  

💡 **If you like this project, don't forget to ⭐ star the repository!**  
