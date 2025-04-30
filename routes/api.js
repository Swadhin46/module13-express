import express from 'express';
import { createUser, searchUsers, deleteAccount, deleteUser,verifyEmail, readUser, removeAdmin, resendVerification, getAllUsers, getUserById, makeAdmin, blockUser, unblockUser,updateProfile,updateUser,uploadProfilePicture,loginUser,logoutUser, filterUsers, changePassword } from '../controller/task.js';

const router = express.Router();

// ROUTE CODES WILL BE HERE

// Create Route
router.post("/create-user", createUser);

// Read Route
router.get("/read-user", readUser);

// Update Route
router.put("/update-user", updateUser);

// Delete Route
router.delete("/delete-user", deleteUser);

// Get All Users
router.get("/all-users", getAllUsers);

// Get User by ID
router.get("/user/:id", getUserById);

// User Login
router.post("/login", loginUser);

// User Logout
router.post("/logout", logoutUser);

// Change Password
router.put("/change-password", changePassword);

// Update Profile
router.put("/update-profile", updateProfile);

// Make Admin
router.put("/make-admin/:id", makeAdmin);

// Remove Admin
router.put("/remove-admin/:id", removeAdmin);

// Search Users
router.get("/search", searchUsers);

// Filter Users
router.get("/filter", filterUsers);

// Block User
router.patch("/block-user/:id", blockUser);

// Unblock User
router.patch("/unblock-user/:id", unblockUser);

// Verify Email
router.post("/verify-email", verifyEmail);

// Resend Verification
router.post("/resend-verification", resendVerification);

// Upload Profile Picture
router.post("/upload-profile-picture", uploadProfilePicture);

// Delete Account
router.delete("/delete-account", deleteAccount);

export default router;