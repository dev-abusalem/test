export const sendMailContactForm = async (formData) => {
  const response = await fetch('/api/sendContactEmail', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
  return response
}
