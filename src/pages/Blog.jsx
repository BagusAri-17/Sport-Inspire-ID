import React from 'react'
import Navbar from '../components/navbar'
import Cover from '../components/blog/cover'
import Posts from '../components/blog/posts'
import Visitor from '../components/blog/visitors'
import Footer from '../components/footer'

const Blog = () => {
  return (
    <>
      <Navbar />
      <Cover />
      <Visitor />
      <Posts />
      <Footer />
    </>
  )
}

export default Blog