# 🧠 User Management API

This is a simple Express-based REST API for user management, including authentication, user roles, and profile handling.

## 🚀 Features

- Create, read, update, delete users
- User authentication (login/logout)
- Email verification
- Password change
- Admin management
- User filtering and search
- Profile picture upload
- Block/unblock users

---

## 📘 API Endpoints

| Method | Endpoint                     | Description                    |
|--------|------------------------------|--------------------------------|
| POST   | `/create-user`               | Create a new user              |
| GET    | `/read-user`                 | Read a user (example endpoint) |
| PUT    | `/update-user`               | Update user information        |
| DELETE | `/delete-user`               | Delete a user                  |
| GET    | `/all-users`                 | Get all users                  |
| GET    | `/user/:id`                  | Get user by ID                 |
| POST   | `/login`                     | User login                     |
| POST   | `/logout`                    | User logout                    |
| PUT    | `/change-password`           | Change user password           |
| PUT    | `/update-profile`            | Update profile details         |
| PUT    | `/make-admin/:id`            | Promote user to admin          |
| PUT    | `/remove-admin/:id`          | Revoke admin privileges        |
| GET    | `/search`                    | Search users                   |
| GET    | `/filter`                    | Filter users by criteria       |
| PATCH  | `/block-user/:id`            | Block a user                   |
| PATCH  | `/unblock-user/:id`          | Unblock a user                 |
| POST   | `/verify-email`              | Verify user email              |
| POST   | `/resend-verification`       | Resend email verification link |
| POST   | `/upload-profile-picture`    | Upload user profile picture    |
| DELETE | `/delete-account`            | Delete own account             |

---

## 📂 Project Structure
