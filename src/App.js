import React from 'react'
import Layout from './hoc/Layout/Layout'
import Quiz from './containers/Quiz/Quiz'

function App () {
  return (
  // eslint-disable-next-line react/react-in-jsx-scope
    <Layout>
        <Quiz />
    </Layout>
  )
}

export default App
