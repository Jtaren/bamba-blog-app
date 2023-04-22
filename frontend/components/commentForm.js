import { useState } from 'react'

export default function CommentForm({ postId }) {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    const response = await fetch('/api/createComment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        postId,
      }),
    })
    setIsSubmitting(false)
    setHasSubmitted(true)
    setFormData({ name: '', email: '', comment: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      {hasSubmitted ? (
        <p className="bg-green-100 text-green-800 px-4 py-2 rounded-md mb-4">
          Thank you for your comment!
        </p>
      ) : (
        <>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="comment"
              className="block text-gray-700 font-medium mb-2"
            >
              Comment
            </label>
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </>
      )}
    </form>
  )
}
