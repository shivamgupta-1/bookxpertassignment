Working Project Link: https://shivamgupta-1.github.io/bookxpertassignment/
# BookXpert - Employee Management Dashboard

## Project Overview
BookXpert is a React-based Employee Management Dashboard designed to streamline HR operations. It provides an interactive interface for administrators to view employee statistics, manage employee records (CRUD operations), and export data. The application features a responsive dashboard with real-time updates and a powerful data grid for handling employee lists.

### Key Features
*   **Dashboard Metrics:** Visual cards displaying Total, Active, and Inactive employee counts.
*   **Employee Data Grid:** A feature-rich table (AG Grid) supporting sorting, filtering, and pagination.
*   **Employee Management:** Forms to Add and Edit employee details including profile images, dates, and status.
*   **Data Export:** Capability to download the employee list as a CSV file.
*   **Authentication Check:** Simple session check using LocalStorage.

## Tech Stack
*   **Frontend Framework:** React 19
*   **Build Tool:** Vite
*   **Language:** JavaScript (ES6+)
*   **State Management:** MobX & MobX-React-Lite
*   **Routing:** React Router DOM v7
*   **UI Components:**
    *   **AG Grid React:** For the advanced employee list table.
    *   **Material UI:** For specific UI elements like Switches.
    *   **React Datepicker:** For date input handling.
*   **Form Handling & Validation:** Formik & Yup
*   **Styling:** SCSS (Sass)

## Steps to Run the Project Locally

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd bookxpert
    ```

2.  **Install dependencies:**
    Ensure you have Node.js installed, then run:
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Access the Application:**
    Open your browser and navigate to `http://localhost:5173` (or the port indicated in your terminal).

## Assumptions and Design Decisions
*   **State Management:** MobX was chosen over Redux or Context API for its simplicity and fine-grained reactivity, allowing the dashboard counters to update automatically when the employee list changes without excessive re-renders.
*   **Data Persistence:** The application assumes a lightweight authentication mechanism where a user session key (`bookxpert_user`) is stored in `localStorage`. If missing, the app redirects to the login route.
*   **Grid Implementation:** AG Grid was selected to handle the employee list because it offers built-in performance optimizations and features like CSV export and column filtering out of the box, reducing development time for complex table requirements.
*   **Styling Strategy:** SCSS is used to maintain a structured styling architecture with variables for colors and consistent theming across the dashboard components.