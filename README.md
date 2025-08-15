# Redux Toolkit Todo App

A modern todo application built with React and Redux Toolkit, featuring a clean dark theme interface.

## 🚀 Features

- ✅ Add new todos
- ✅ Mark todos as complete/incomplete
- ✅ Delete todos
- ✅ Dark theme UI
- ✅ Responsive design
- ✅ Redux state management

## 🛠️ Tech Stack

- **React** - UI library
- **Redux Toolkit** - State management
- **Vite** - Build tool
- **CSS3** - Styling

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Algoraver22/Redux_Toolkit.git
cd Redux_Toolkit
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── app/
│   └── store.js          # Redux store configuration
├── features/
│   └── todoslice.js      # Todo slice with actions and reducers
├── components/
│   ├── apptodo.jsx       # Add todo form component
│   └── todo.jsx          # Individual todo item component
├── App.jsx               # Main app component
└── main.jsx              # App entry point
```

## 🔧 Redux Toolkit Implementation

### Store Configuration
```javascript
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoslice';

export const store = configureStore({
    reducer: {
        todos: todoReducer
    }
});
```

### Todo Slice
- `addTodo` - Add new todo items
- `removeTodo` - Delete todo items
- `toggleComplete` - Toggle completion status

## 🎯 Learning Objectives

This project demonstrates:
- Redux Toolkit setup and configuration
- Creating slices with actions and reducers
- Using `useSelector` and `useDispatch` hooks
- Form handling with Redux
- Component architecture with React

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Algoraver22**
- GitHub: [@Algoraver22](https://github.com/Algoraver22)

---

⭐ Star this repo if you found it helpful!