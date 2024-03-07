const contactform = (req) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Information</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
    }
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50vh;
    }
    .card {
      background-color: #f0f0f0;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      width: 80%;
      max-width: 400px;
      margin:0 auto;
      text-align: left;
    }
    h2 {
      color: #fff;
      padding:15px;
      text-center;
      background:#00bda9;
    }
    p {
      margin-bottom: 10px;
      color: #000;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <h2>Contact Information</h2>
      <p><strong>Email:</strong> ${req.email}</p>
      <p><strong>Name:</strong>  ${req.name}</p>
      <p><strong>Company:</strong>  ${req.company}</p>
      <p><strong>Phone:</strong> ${req.phone}</p>
      <p><strong>Message:</strong>${req.message}</p>
      <p><strong>Budget:</strong>${
        req.budget1 || req.budget2 || req.budget3 || req.budget4
      }</p>
    </div>
  </div>
</body>
</html>

    
    `
}

export default contactform
