# Ecommerce Follow Along Project
Welcome to the *Ecommerce Follow Along Project*, this is a hands-on project where we will build a complete e-commerce application using the MERN stack(MongoDB,Express.js,React.js, and Node.js). The goal is to learn how to develop a full-stack web application step by step.

## Milestone 1: Project Overview 

#### 1.Understanding the MERN Stack:
*MongoDB :* A Database for storing application data ina felexible , document based format.
*Express.js :* A backend web application framework for building APIs and handling serve logics.
*React.js :* A framework library for building user Interfaces.
*Node.js :* A runtime environment that allows javascript to run on the server.

#### 2. REST API Structure
REST APIs are used to allow communicaton btween the frontend and backend.
we'll create APIs for :
- *User Authentication*: Allowing users to register and log in .
- *Product Management*: Adding , updating , and retrieving product data.
- *Order Handling*:Managing customer orders.

#### 3. Database Schema Design 
WE'll learn how to design and organize data using MongoDB . A schema helps us define how the data is stored and related.

#### 4. Authentication 
Authentication ensures only the right people can access certain features. For example:
- Users need to logm in to place orders or see their personal data.
- It keeps the app secure by verifying users' identities.
## Milestone 2: Project Setup and Login Page Development

In this milestone, we set up the foundational structure for the project and implemented the first user-facing feature: the Login Page. Here's what we completed:

### 1. Project Folder Structure
We organized the project into two separate directories:
- Frontend: Where the React app lives.
- Backend: Where the Node.js/Express backend resides.

This structure will make it easier to manage the frontend and backend code separately as the project grows.

### 2. React Frontend Setup
We initialized a new React application to build the user interface. This app will be the foundation for all the user-facing features of the e-commerce platform.

### 3. Node.js Backend Setup
We set up a simple Node.js server using Express to handle requests and API routes. This server will eventually power the various features, like user authentication, product management, and order processing.

### 4. Tailwind CSS Configuration
Tailwind CSS was configured to enable a utility-first styling approach for rapid and responsive design. This allows us to quickly style components without writing custom CSS.

### 5. Login Page Development
The main feature developed in this milestone is the Login Page:
- A functional login form where users can enter their credentials to authenticate.
- Responsive and styled using Tailwind CSS to ensure a modern user experience.

### Milestone 3:
Set up dedicated folders for organizing backend code effectively. Initialized and configured a Node.js server to handle API requests. Connected the application to MongoDB to store and manage data. Implemented basic error handling to ensure smooth server operation. 

### Milestone 4
Created a User Model to define how user data is structured in the database, also developed a User Controller to manage user interactions, like adding or retrieving data. Additionally, configured Multer to handle file uploads, allowing users to store files such as images.

### Milestone 5 
In this milestone, I built the Sign-Up page for user registration using HTML and CSS. I implemented form validation to ensure valid inputs, like email format and password security. This enhances user experience and prevents errors. All changes have been committed and pushed to the repository.

### Milestone 6 
In this milestone, I created a backend signup API that securely stores user data. Passwords are encrypted using bcrypt before saving to MongoDB. The API ensures secure user authentication and data privacy. All changes are committed and pushed. 

### Milestone 7 Summary
In this milestone, we implemented user login authentication by validating credentials and comparing encrypted passwords using bcrypt. The process involves retrieving user data, hashing the entered password, and matching it with the stored hash. If authenticated, access is granted; otherwise, an error is returned. This enhances security and protects user data. 

### Milestone 8
In this milestone, we created a reusable product card component and designed a homepage to display multiple cards dynamically. The component receives product details as props and is rendered using array mapping. This improves UI consistency, enhances user experience, and maintains an organized layout for showcasing products effectively. 🚀

## Milestone 9 :
In this milestone, we created a product page for the e-commerce website. The page displays a list of products with their details, including images, names, descriptions, and prices. Users can click on a product to view more information or add it to their cart. This page provides a user-friendly interface for browsing and selecting products 

### Milestone 10:
In this milestone, we created an API to allow product creation with image uploads using Multer. The images are stored in the uploads/ directory, and product data, including image paths, is saved to MongoDB for efficient storage and retrieval.

## 🌟 Milestone 11
In this milestone, we successfully fetched real-time product data from the backend and displayed it dynamically on the homepage. Additionally, we implemented an automatic image slider for each product, allowing multiple images to cycle every 3 seconds. This enhances user engagement and provides a more interactive browsing experience.

 ## 🌟 Milestone 12:
In this milestone, we implemented a ByProduct Page that displays products created by a specific email ID, while the Home Page continues to show all products.

 ## 🌟 Milestone 13:
In this milestone, we implemented the Update Product functionality, allowing users to edit product details. The update form dynamically loads the product's existing data, and changes are submitted via an API call. This ensures that users can modify product information easily while maintaining data integrity.

 ## 🌟 Milestone 14:
This milestone focused on integrating the Delete Product functionality, allowing users to remove products permanently. A confirmation prompt ensures accidental deletions are avoided 

### 🌟 Milestone 15:
Implement a responsive navigation bar using React and Tailwind CSS to enable smooth navigation between different pages in the application.

### 🌟 Milestone 16:
In this milestone, we create a product details page displaying all product data, including description, category, price, and tags, with quantity selection and an Add to Cart button. 🚀

## 🌟 Milestone 17: 
In this milestone, we implemented the backend functionality to add products to a cart and store them in the database. This feature allows users to add products to their cart, which persists in the database for future access.

## 🌟 Milestone 18: 
In this milestone, we implemented the backend functionality to add products to the user's cart and store them in the database


## 🌟 Milestone 19:
In this milestone, we create an frontend page UI for cart and write an endpoint to increase and decrease the quantity of product inside cart



## 🌟 Milestone 20:
In this milestone , we will profile page frontend and write an endpoint to receive user data and display.


## 🌟 Milestone 21:
In this milestone , we will create an frontend page form for address input.

## 🌟 Milestone 22:
In this milestone , we will create an backend endpoint that will save the address inside user profile in database.

## 🌟 Milestone 23:
In this milestone , we will make our create an select address page in frontend and we will write product schema for the orders in the backend.

## 🌟 Milestone 24:
In this milestone , we will make our create an order conformation page in frontend where will display products ordering and address selected and total price details. 


 ## 🌟Milestone 25:
 This endpoint allows users to place orders by sending product details, user information, and address details. The system retrieves the user's _id using their email and processes each product as a separate order while maintaining the same address. Each order is stored in the MongoDB orders collection using the previously defined Order schema. This ensures that every product is tracked as an independent order while linking all orders to the same user and delivery address.


 ## 🌟 Milestone 26:
 This endpoint allows retrieval of a user's order history using their email address. When a request is made, the server first searches for the user's _id based on the provided email. Once the _id is obtained, it queries the database to fetch all orders associated with that user. The response includes the complete list of orders, enabling seamless tracking of purchase history. This functionality ensures efficient data retrieval while maintaining a user-friendly experience 

  ## 🌟 Milestone 27
   focuses on implementing the My Orders page in the e-commerce project. This involves sending a GET request to the /my-orders endpoint, where the user's email is passed to retrieve all their orders from the database. The fetched orders will then be displayed dynamically on the My Orders page, ensuring users can easily view their purchase history. Additionally, a navigation link to this page will be added to the navbar for better accessibility. This update enhances the user experience by providing a dedicated section for order tracking and management.
 
  ## 🌟Milestone 28:
 Milestone 28 enhances the *My Orders* page by adding a *Cancel Order* button for each active order. This button will allow users to cancel an order if it has not already been canceled. If an order is already marked as canceled, the button will not be displayed. To achieve this, a new *API endpoint* will be created to handle order cancellations. When a user clicks the cancel button, the order *ID* will be sent to this endpoint, which will retrieve the order, update its status to *canceled*, and save the changes. This feature improves order management and gives users more control over their purchases.