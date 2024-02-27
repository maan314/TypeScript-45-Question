function make_shirt(size: string, message: string): void {
    console.log(`Size: ${size}`);
    console.log(`Message: ${message}`);
    console.log(`Desc: A ${size}-sized shirt will be printed with the message: "${message}"`);
  }
  
  make_shirt('Medium', 'Hello, World!');
  make_shirt('Small', 'Hello, Micky');
  make_shirt('Large', 'Hello, Sigma');  
  