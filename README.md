# ExpressBlog

A full-stack **blogging platform** built with **React, Node.js, Express, and MongoDB** that allows users to create, read, update, and delete blog posts with authentication and role-based access control.

## 🚀 Features
- **User Authentication** (JWT-based, stored in httpOnly cookies)
- **Role-Based Access Control** (Admin & Users)
- **Create, Read, Update, Delete (CRUD) Blogs**
- **Real-Time Notifications** using WebSockets (Socket.io)
- **Image Uploads** with Cloudinary Integration**
- **Pagination & Search Functionality**
- **Secure API with CORS & CSRF Protection**
- **Fully Responsive Frontend** using Tailwind CSS

---

## 🛠️ Tech Stack

### **Frontend**
- React.js (with React Router)
- Context API for State Management (`useAuth`)
- Tailwind CSS for UI Styling
- Axios for API Requests
- React Hot Toast for Notifications

### **Backend**
- Node.js & Express.js
- MongoDB with Mongoose
- JWT Authentication with `httpOnly` Cookies
- Multer for File Uploads
- Cloudinary for Image Storage
- Socket.io for Real-Time Updates
- CORS & CSRF Protection

---

## 📂 Folder Structure
ExpressBlog/ │── frontend/ # React Frontend │ ├── src/ │ │ ├── components/ # Reusable UI Components │ │ ├── pages/ # Pages (Home, Blogs, Login, etc.) │ │ ├── context/ # AuthProvider.js (Authentication) │ │ ├── utils/ # Utility Functions │ │ ├── App.js # Main App Component │ ├── public/ # Static Assets │ ├── package.json │ │── backend/ # Express Backend │ ├── models/ # Mongoose Models (User, Blog) │ ├── routes/ # API Routes (Auth, Blog, User) │ ├── middleware/ # Middleware (Auth, Error Handling) │ ├── config/ # DB & Cloudinary Configuration │ ├── server.js # Main Express Server │ ├── package.json │ │── README.md # Project Documentation



---

## 🚀 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/ExpressBlog.git
cd ExpressBlog

cd backend
npm install  # Install dependencies
cp .env.example .env  # Configure environment variables
npm start  # Start the backend server

cd ../frontend
npm install  # Install dependencies
npm start  # Run React frontend

PORT=4001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret


⚡ API Endpoints
Auth Routes
Method	Endpoint	Description
POST	/api/users/register	Register a new user
POST	/api/users/login	Login user & get token
GET	/api/users/me	Get authenticated user
GET	/api/users/logout	Logout user
Blog Routes
Method	Endpoint	Description
GET	/api/blogs	Get all blogs (paginated)
GET	/api/blogs/:id	Get a single blog
POST	/api/blogs	Create a new blog (Auth)
PUT	/api/blogs/:id	Update blog (Auth)
DELETE	/api/blogs/:id	Delete blog (Auth)



🛠 Challenges & Solutions
1️⃣ Authentication & Security
Problem: Storing JWT in localStorage made it vulnerable to XSS attacks.
Solution: Used httpOnly cookies to store authentication tokens securely.
2️⃣ Efficient Data Fetching & State Management
Problem: Fetching user data on every page reload was inefficient.
Solution: Implemented a global useAuth context to store user data globally.
3️⃣ Image Upload & Storage
Problem: Storing images in MongoDB was inefficient.
Solution: Integrated Cloudinary for image storage & optimized image delivery.
4️⃣ Handling CORS Issues Between Frontend & Backend
Problem: Frontend couldn't access backend APIs due to CORS restrictions.
Solution: Enabled CORS with credentials: true to allow cross-origin requests.
🎯 Future Improvements
✅ Add Like & Comment Features for Blogs
✅ Implement Dark Mode
✅ Improve SEO Optimization
✅ Enhance UI with Animations

💡 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

📜 License
This project is open-source and available under the MIT License.

⭐ Show Your Support
If you like this project, please ⭐ star the repository and share it with others!

🔗 GitHub Repo: https://github.com/your-username/ExpressBlog
