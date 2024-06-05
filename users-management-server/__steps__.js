/**
 *  1. create a post api in server side 
 *  2. from Client side send data via post :
 * (set fetch method, headers, body inside fetch options)
      
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
 *on server side use express.json() middleware to use req.body

 */
