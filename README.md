# 🎨 Portfolio Website - Frontend Implementation

This project is a **frontend replica** of a portfolio website design provided via [Figma](https://www.figma.com/design/kIgqpWpgs81nCy7a5d5siG/Portfolio-Website--Community-?node-id=0-1&p=f&t=PFQgfq4zCnbkoUXc-0). It features a responsive layout, theme switching (light/dark), and component-based structure built using **React.js**, **Bootstrap**, **HTML/CSS**, and **JavaScript**.

---

## 🛠️ Tech Stack

- **React.js**
- **Bootstrap 5**
- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**

---

## 📁 Project Structure

├── public/
├── src/
│ ├── assets/ # Static assets like images
│ ├── components/
│ │ ├── NavBar/ # Navigation bar with theme toggle
│ │ ├── Home/ # Hero section with intro
│ │ ├── About/ # About section with bio
│ │ └── SocialLinks/ # Social icons
│ ├── App.css # Main CSS styles
│ ├── App.js # Root component
│ └── index.js # Entry point of the application

---

## 🚀 How to Run

**Clone the Repository**

```bash
git clone https://github.com/Amarnath201099/blockyAssignment.git

cd blockyAssignment
```

**Install Dependencies**

```bash
npm install
```

**Start Development Server**

```bash
npm start
```

**View in Browser**

Open your browser and go to: http://localhost:3000

---

## 🚀 Live Demo

Check out the live version of this project deployed on Vercel:

[View on Vercel](https://blocky-assignment-git-main-amarnath201099s-projects.vercel.app/)

---

## 📱 Responsive Design

The UI is fully responsive and adjusts seamlessly across different screen sizes:

- **Desktop**: Flexbox layout with horizontal alignment
- **Mobile**: Columnar stacking and hamburger menu navigation

---

## 🌗 Theme Toggle

A theme switcher is implemented using React `useState`:

- Switch between **Light** and **Dark** modes
- Dynamically updates background colors, text colors, and icons

---

## ✍️ Implementation Steps

### 🔍 Figma Analysis

- Carefully inspected layout dimensions, typography, and color palette

### 🧱 Componentization

- Converted key sections (`NavBar`, `Home`, `About`, etc.) into reusable React components

### 💡 Bootstrap Integration

- Utilized Bootstrap grid, utility classes, and responsive navbar
- Overrode Bootstrap styles with custom CSS where needed

### 🌓 Theme Mode

- Created a toggle switch to switch themes using conditional `classNames` and styles

### 🧭 Routing

- Implemented navigation using `react-router-dom` for page transitions

---

## 🎨 Custom Bootstrap Customizations

- Navbar behavior modified for dark mode
- Custom button styling for action buttons
- Overridden theme colors for buttons, texts, and backgrounds in both light and dark modes
- Responsive breakpoints fine-tuned with Bootstrap classes

---

## 📌 Future Enhancements

- Add routing for **Projects**, **Skills**, and **Resume** sections
- Animate components on scroll using libraries like **AOS** or **Framer Motion**
- Form handling and validation for the **Contact** section

---

## 📩 Contact Info

**Amarnath**  
📧 Email: [amarnath201099@gmail.com](mailto:amarnath201099@gmail.com)
