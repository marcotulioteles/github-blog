import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage } from './pages/ErrorPage'
import { GlobalStyle } from './styles/global'
import { PostPage } from './pages/PostPage'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { CoverTop } from './components/CoverTop'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'post/:postId',
    element: <PostPage />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <CoverTop />
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
)
