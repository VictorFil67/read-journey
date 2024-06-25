Read Journey Application
Welcome to Read Journey, your personal reading companion! Here's what you can expect from our app, tailored to offer a seamless and engaging reading experience.

Adaptive Design
Our app is designed to look great on any device, ensuring a responsive and adaptive interface:

Mobile: From 320px (fluid) to 375px (adaptive)
Tablet: From 768px
Desktop: From 1440px
Technical Features
HTML5 Semantics: Adhering to HTML5 standards for a structured and accessible web experience.
Font Integration: Custom fonts are integrated to enhance readability and aesthetics.
Optimized Graphics: Both vector and raster graphics are optimized for performance and clarity.
Retina Display Support: High-resolution images ensure sharp visuals on retina screens.
Efficient Image Loading: Optimized image loading for faster performance.
Sprite Icons: All icons are served via a sprite for efficiency.
Favicon: A distinctive favicon is displayed on your browser tab for easy identification.
User Experience
Non-Authenticated User
Register Page (/register)

RegisterForm: Includes inputs for Name, Email, and Password.
Validation: Utilizes react-hook-form and Yup for validation.
Name: String
Email: String with pattern /^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/
Password: String, minimum 7 characters
Error Handling: Invalid inputs display error messages; data is not sent to the backend.
Success Handling: Valid data is sent to the backend; successful registration leads to automatic login and redirection to the Recommended page (/recommended).
Error Notification: Backend errors are displayed to the user via notifications.
Login Page (/login)

LoginForm: Includes inputs for Email and Password.
Validation: Utilizes react-hook-form and Yup for validation.
Email: String with pattern /^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/
Password: String, minimum 7 characters
Error Handling: Invalid inputs display error messages; data is not sent to the backend.
Success Handling: Valid data is sent to the backend; successful login redirects to the Recommended page (/recommended).
Error Notification: Backend errors are displayed to the user via notifications.
Authenticated User
Main Layout (/)

Header: Displayed on all authenticated user pages.
Logo: Company logo
UserNav: Navigation routes
/recommended: Redirects to Recommended page
/library: Redirects to My Library page
UserBar: Displays current user information
Log out Button: Logs out the user, clears the session, and redirects to the Welcome page. Notifications display any errors.
Recommended Page (/recommended)

Dashboard: Universal component containing:
Filters: Form with inputs and a submit button ("To apply") to filter recommended books.
App Functionality Overview: Short description with a link to My Library page.
Quote Block: Displays a static quote.
RecommendedBooks:
Page Header: Displays the title of the page.
Pagination: Server-side pagination with navigation arrows.
Book List: Displays a list of recommended books as cards.
Book Card: Includes cover image, title, and author. Clicking opens a modal with book details and an "Add to library" button.
My Library Page (/library)

Dashboard: Universal component containing:
AddBook: Form with inputs and a submit button ("Add book") to add a new book.
Recommended Books Link: Link to the Recommended page.
MyLibraryBooks:
Page Header: Displays the title of the page.
Status Filter: Dropdown to filter books by reading status.
Book List: Displays a list of the user's books as cards.
Book Card: Includes cover image, title, author, and a delete button. Clicking opens a modal with book details and a "Start reading" button.
Reading Page (/reading)

Dashboard: Universal component containing:
AddReading: Form with input and a submit button ("To start" or "To stop") to track reading progress.
Details: Displays reading details as a diary or statistics chart.
Diary: Logs reading events with date, pages read, reading time, and percentage completed.
Statistics: Chart to track reading progress.
Enjoy your reading journey with us! Happy reading!
